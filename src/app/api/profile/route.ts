import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth-session";
import {
  ensureUserProfile,
  getProfilePayloadForUser,
  slugifyUsername,
  STARTER_LINK_LIMIT,
} from "@/lib/profile";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await ensureUserProfile(session.user.id, {
    name: session.user.name,
    email: session.user.email,
  });

  const profile = await getProfilePayloadForUser(session.user.id);

  return NextResponse.json({ profile });
}

export async function PUT(request: Request) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    name?: string;
    username?: string;
    bio?: string;
    image?: string | null;
  };

  const current = await ensureUserProfile(session.user.id, {
    name: session.user.name,
    email: session.user.email,
  });

  const username = body.username ? slugifyUsername(body.username) : current.username;

  if (!username) {
    return NextResponse.json({ error: "Username is required." }, { status: 400 });
  }

  if (username !== current.username) {
    const taken = await prisma.profile.findUnique({ where: { username } });
    if (taken) {
      return NextResponse.json({ error: "Username is already taken." }, { status: 409 });
    }
  }

  await prisma.profile.update({
    where: { userId: session.user.id },
    data: {
      name: body.name?.trim() || current.name,
      username,
      bio: body.bio?.trim() ?? current.bio,
      image: body.image === undefined ? current.image : body.image,
    },
  });

  const profile = await getProfilePayloadForUser(session.user.id);

  return NextResponse.json({ profile, linkLimit: STARTER_LINK_LIMIT });
}
