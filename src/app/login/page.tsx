import { AuthCard } from "@/components/auth/auth-card";
import { authProviders } from "@/lib/auth";

export default function LoginPage() {
  return <AuthCard mode="login" providers={authProviders} />;
}
