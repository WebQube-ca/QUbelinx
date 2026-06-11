import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth-session";
import { getProfilePayloadForUser } from "@/lib/profile";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

async function getOwnedLink(userId: string, linkId: string) {
  const profile = await prisma.profile.findUnique({
    where: { userId },
    select: { id: true },
  });

  if (!profile) return null;

  return prisma.link.findFirst({
    where: {
      id: linkId,
      profileId: profile.id,
    },
  });
}

export async function PUT(request: Request, context: RouteContext) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const link = await getOwnedLink(session.user.id, id);

  if (!link) {
    return NextResponse.json({ error: "Link not found." }, { status: 404 });
  }

  const body = (await request.json()) as {
    title?: string;
    url?: string;
    type?: string;
  };

  await prisma.link.update({
    where: { id },
    data: {
      title: body.title?.trim() || link.title,
      url: body.url?.trim() || link.url,
      type: body.type?.trim() || link.type,
    },
  });

  const profile = await getProfilePayloadForUser(session.user.id);

  return NextResponse.json({ profile });
}

export async function DELETE(_request: Request, context: RouteContext) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const link = await getOwnedLink(session.user.id, id);

  if (!link) {
    return NextResponse.json({ error: "Link not found." }, { status: 404 });
  }

  await prisma.link.delete({ where: { id } });

  const profile = await getProfilePayloadForUser(session.user.id);

  return NextResponse.json({ profile });
}
