import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { hashPassword, isStrongEnoughPassword } from "@/lib/password";
import { ensureUserProfile } from "@/lib/profile";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

function registerErrorMessage(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2022") {
      return "Database schema is outdated. Run npm run forge:setup on the server.";
    }
    if (error.code === "P2002") {
      return "An account with this email or username already exists.";
    }
  }

  if (error instanceof Error && error.message.includes("passwordHash")) {
    return "Database schema is outdated. Run npm run forge:setup on the server.";
  }

  return "Could not create account. Try again.";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      password?: string;
      username?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password ?? "";
    const usernameInput = body.username?.trim();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    if (!isStrongEnoughPassword(password)) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        emailVerified: new Date(),
      },
    });

    await ensureUserProfile(user.id, {
      name,
      email,
      username: usernameInput || email.split("@")[0],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[register]", error);
    return NextResponse.json(
      { error: registerErrorMessage(error) },
      { status: 500 }
    );
  }
}
