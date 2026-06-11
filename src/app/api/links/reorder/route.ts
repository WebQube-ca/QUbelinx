import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth-session";
import { getProfilePayloadForUser } from "@/lib/profile";
import { prisma } from "@/lib/prisma";

export async function PUT(request: Request) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { orderedIds?: string[] };
  const orderedIds = body.orderedIds ?? [];

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
    include: { links: true },
  });

  if (!profile) {
    return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  }

  const ownedIds = new Set(profile.links.map((link) => link.id));

  if (orderedIds.length !== profile.links.length || orderedIds.some((id) => !ownedIds.has(id))) {
    return NextResponse.json({ error: "Invalid link order." }, { status: 400 });
  }

  await prisma.$transaction(
    orderedIds.map((id, index) =>
      prisma.link.update({
        where: { id },
        data: { sortOrder: index },
      })
    )
  );

  const payload = await getProfilePayloadForUser(session.user.id);

  return NextResponse.json({ profile: payload });
}
