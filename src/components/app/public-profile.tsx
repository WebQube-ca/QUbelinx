import { ProfilePage } from "@/components/profile/profile-page";
import { demoProfile } from "@/data/profiles";

export function PublicProfile() {
  return <ProfilePage profile={demoProfile} />;
}
