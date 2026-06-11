import { redirect } from "next/navigation";
import { DashboardClient } from "@/components/app/dashboard-client";
import { getSession } from "@/lib/auth-session";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return <DashboardClient userEmail={session.user?.email ?? null} />;
}
