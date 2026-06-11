import type { Profile, ProfileLink } from "@/data/profiles";
import { demoProfile } from "@/data/profiles";
import { prisma } from "@/lib/prisma";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=240&q=80";

export const STARTER_LINK_LIMIT = 5;

export type DashboardLink = {
  id: string;
  title: string;
  url: string;
  clicks: number;
  ctr: number;
  type: string;
};

export type ProfilePayload = {
  id: string;
  username: string;
  name: string;
  bio: string;
  image: string | null;
  pageViews: number;
  links: DashboardLink[];
};

function computeCtr(clicks: number, pageViews: number) {
  if (pageViews <= 0) return 0;
  return Number(((clicks / pageViews) * 100).toFixed(1));
}

function toDashboardLink(link: {
  id: string;
  title: string;
  url: string;
  type: string;
  clicks: number;
  sortOrder: number;
}, pageViews: number): DashboardLink {
  return {
    id: link.id,
    title: link.title,
    url: link.url,
    type: link.type,
    clicks: link.clicks,
    ctr: computeCtr(link.clicks, pageViews),
  };
}

export function slugifyUsername(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-_]/g, "")
    .slice(0, 32);
}

export async function ensureUserProfile(userId: string, defaults?: { name?: string | null; email?: string | null }) {
  const existing = await prisma.profile.findUnique({
    where: { userId },
    include: { links: { orderBy: { sortOrder: "asc" } } },
  });

  if (existing) return existing;

  const baseUsername =
    slugifyUsername(defaults?.email?.split("@")[0] ?? "") ||
    `creator-${userId.slice(0, 6)}`;

  let username = baseUsername;
  let suffix = 1;

  while (await prisma.profile.findUnique({ where: { username } })) {
    username = `${baseUsername}-${suffix}`;
    suffix += 1;
  }

  return prisma.profile.create({
    data: {
      userId,
      username,
      name: defaults?.name?.trim() || "New creator",
      bio: "",
      image: DEFAULT_IMAGE,
    },
    include: { links: { orderBy: { sortOrder: "asc" } } },
  });
}

export async function getProfilePayloadForUser(userId: string) {
  const profile = await prisma.profile.findUnique({
    where: { userId },
    include: { links: { orderBy: { sortOrder: "asc" } } },
  });

  if (!profile) return null;

  return {
    id: profile.id,
    username: profile.username,
    name: profile.name,
    bio: profile.bio,
    image: profile.image,
    pageViews: profile.pageViews,
    links: profile.links.map((link) => toDashboardLink(link, profile.pageViews)),
  } satisfies ProfilePayload;
}

export async function getProfileByUsername(username: string) {
  const profile = await prisma.profile.findUnique({
    where: { username: username.toLowerCase() },
    include: { links: { orderBy: { sortOrder: "asc" } } },
  });

  if (!profile) return null;

  return toPublicProfile(profile);
}

function mapLinkToProfileLink(
  link: { id: string; title: string; url: string; clicks: number },
  index: number
): ProfileLink {
  const badges = ["Trending", "Popular", "Limited", "New"] as const;

  return {
    id: link.id,
    title: link.title,
    description: "Tap to open this link.",
    href: link.url,
    icon: index === 0 ? "calendar" : index === 1 ? "shop" : index === 2 ? "whatsapp" : "portfolio",
    views: `${link.clicks.toLocaleString()} clicks`,
    clicks: link.clicks,
    badge: badges[index],
  };
}

export function toPublicProfile(profile: {
  username: string;
  name: string;
  bio: string;
  image: string | null;
  pageViews: number;
  links: Array<{ id: string; title: string; url: string; clicks: number; sortOrder: number }>;
}): Profile {
  const totalClicks = profile.links.reduce((sum, link) => sum + link.clicks, 0);
  const ctr = computeCtr(totalClicks, profile.pageViews);
  const topLink = [...profile.links].sort((a, b) => b.clicks - a.clicks)[0]?.title ?? "";

  return {
    username: profile.username,
    profileImage: profile.image ?? DEFAULT_IMAGE,
    name: profile.name,
    verified: false,
    bio: profile.bio || "Add a short bio to explain why visitors should click.",
    category: "Creator",
    socialProof: [`${profile.pageViews.toLocaleString()} page views`, `${totalClicks.toLocaleString()} total clicks`],
    theme: demoProfile.theme,
    analytics: {
      pageViews: profile.pageViews,
      totalClicks,
      ctr,
      topLink,
    },
    socialLinks: demoProfile.socialLinks,
    links: profile.links.map(mapLinkToProfileLink),
    featuredModules: demoProfile.featuredModules.slice(0, 2),
    testimonials: demoProfile.testimonials,
    workedWith: demoProfile.workedWith,
  };
}
