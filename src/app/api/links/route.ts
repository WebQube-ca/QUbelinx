import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth-session";
import { ensureUserProfile, getProfilePayloadForUser, STARTER_LINK_LIMIT } from "@/lib/profile";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profile = await ensureUserProfile(session.user.id, {
    name: session.user.name,
    email: session.user.email,
  });

  if (profile.links.length >= STARTER_LINK_LIMIT) {
    return NextResponse.json(
      { error: `Free plan limit is ${STARTER_LINK_LIMIT} links.` },
      { status: 400 }
    );
  }

  const body = (await request.json()) as {
    title?: string;
    url?: string;
    type?: string;
  };

  const title = body.title?.trim() || "New link";
  const url = body.url?.trim() || "https://example.com";

  await prisma.link.create({
    data: {
      profileId: profile.id,
      title,
      url,
      type: body.type?.trim() || "Link",
      sortOrder: profile.links.length,
    },
  });

  const payload = await getProfilePayloadForUser(session.user.id);

  return NextResponse.json({ profile: payload, linkLimit: STARTER_LINK_LIMIT });
}
