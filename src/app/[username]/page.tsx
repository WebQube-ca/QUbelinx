import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProfilePage } from "@/components/profile/profile-page";
import { getProfileByUsername } from "@/lib/profile";

type PublicProfilePageProps = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: PublicProfilePageProps): Promise<Metadata> {
  const { username } = await params;
  const profile = await getProfileByUsername(username);

  if (!profile) {
    return { title: "Profile not found | QubeLinx" };
  }

  return {
    title: `${profile.name} | QubeLinx`,
    description: profile.bio,
    openGraph: {
      title: `${profile.name} | QubeLinx`,
      description: profile.bio,
      images: [profile.profileImage],
    },
  };
}

export default async function PublicProfilePage({ params }: PublicProfilePageProps) {
  const { username } = await params;
  const profile = await getProfileByUsername(username);

  if (!profile) {
    notFound();
  }

  return <ProfilePage profile={profile} />;
}
