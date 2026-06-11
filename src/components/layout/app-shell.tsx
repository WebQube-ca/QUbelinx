"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

const chromeRoutes = new Set(["/", "/login", "/signup", "/dashboard"]);

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showChrome = chromeRoutes.has(pathname);

  return (
    <>
      {showChrome && <SiteHeader />}
      <main id="main-content" className="w-full max-w-[100vw] overflow-x-clip">
        {children}
      </main>
      {showChrome && <SiteFooter />}
    </>
  );
}
