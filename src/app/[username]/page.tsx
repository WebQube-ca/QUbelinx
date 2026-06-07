import type { Metadata } from "next";
import { ProfilePage } from "@/components/profile/profile-page";
import { getProfileByUsername } from "@/data/profiles";

type PublicProfilePageProps = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: PublicProfilePageProps): Promise<Metadata> {
  const { username } = await params;
  const profile = getProfileByUsername(username);

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
  const profile = getProfileByUsername(username);

  return <ProfilePage profile={profile} />;
}
