import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(_request: Request, context: RouteContext) {
  const { id } = await context.params;

  const link = await prisma.link.findUnique({
    where: { id },
    include: { profile: true },
  });

  if (!link) {
    return NextResponse.json({ error: "Link not found." }, { status: 404 });
  }

  await prisma.$transaction([
    prisma.link.update({
      where: { id },
      data: { clicks: { increment: 1 } },
    }),
    prisma.profile.update({
      where: { id: link.profileId },
      data: { pageViews: { increment: 1 } },
    }),
  ]);

  return NextResponse.json({ ok: true });
}
