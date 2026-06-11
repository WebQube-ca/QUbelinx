import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { defaultMetadata, getBrandSchema } from "@/lib/seo";
import { AuthSessionProvider } from "@/components/providers/auth-session-provider";
import { AppShell } from "@/components/layout/app-shell";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getBrandSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <AuthSessionProvider>
          <ThemeProvider>
            <SmoothScrollProvider>
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-white"
              >
                Skip to main content
              </a>
              <AppShell>{children}</AppShell>
            </SmoothScrollProvider>
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
