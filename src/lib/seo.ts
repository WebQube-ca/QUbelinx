import type { Metadata } from "next";

export const siteConfig = {
  name: "QubeLinx",
  shortName: "QubeLinx",
  description:
    "A premium link-in-bio platform that turns Instagram traffic into clicks, bookings, leads, and sales for creators and businesses.",
  url: "https://qubelinx.com",
  keywords: [
    "QubeLinx",
    "link in bio",
    "Instagram bio link",
    "creator monetization",
    "link hub",
    "bio link analytics",
    "WhatsApp link page",
    "creator landing page",
    "Instagram traffic conversion",
  ],
  ogImage: "/og-image.svg",
  locale: "en_US",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Turn Instagram Traffic Into Conversions`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "QubeLinx" }],
  creator: "QubeLinx",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "QubeLinx premium Instagram bio link hub dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export function getBrandSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: ["https://www.instagram.com/qubelinx"],
    makesOffer: {
      "@type": "OfferCatalog",
      name: "QubeLinx link hub plans",
      itemListElement: [
        "Free Plan",
        "Pro Plan",
        "Business Plan",
        "Custom themes",
        "Advanced analytics",
        "Lead tracking",
      ],
    },
  };
}
