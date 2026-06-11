import { AuthCard } from "@/components/auth/auth-card";
import { authProviders } from "@/lib/auth";

export default function SignupPage() {
  return <AuthCard mode="signup" providers={authProviders} />;
}
