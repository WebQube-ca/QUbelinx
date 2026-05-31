import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { defaultMetadata, getLocalBusinessSchema } from "@/lib/seo";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
    { media: "(prefers-color-scheme: light)", color: "#C2185B" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

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
        <ThemeProvider>
          <SmoothScrollProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <FloatingCTA />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
