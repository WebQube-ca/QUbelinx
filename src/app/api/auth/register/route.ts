import { NextResponse } from "next/server";
import { hashPassword, isStrongEnoughPassword } from "@/lib/password";
import { ensureUserProfile, slugifyUsername } from "@/lib/profile";
import { prisma } from "@/lib/prisma";

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

    const preferredUsername = usernameInput
      ? slugifyUsername(usernameInput)
      : slugifyUsername(email.split("@")[0] ?? "");

    await ensureUserProfile(user.id, {
      name,
      email,
    });

    if (preferredUsername) {
      const taken = await prisma.profile.findUnique({
        where: { username: preferredUsername },
      });

      if (!taken) {
        await prisma.profile.update({
          where: { userId: user.id },
          data: { username: preferredUsername, name },
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[register]", error);
    return NextResponse.json(
      { error: "Could not create account. Try again." },
      { status: 500 }
    );
  }
}
