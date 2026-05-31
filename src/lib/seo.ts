import type { Metadata } from "next";

export const siteConfig = {
  name: "BioBoost",
  shortName: "BioBoost",
  description:
    "A premium link-in-bio SaaS for creators and businesses turning Instagram traffic into clicks, leads, calls, bookings, and sales.",
  url: "https://bioboost.app",
  keywords: [
    "Link in bio",
    "Instagram bio link",
    "Creator tools",
    "Bio link analytics",
    "Link hub",
    "Conversion link page",
    "Creator monetization",
    "Small business Instagram",
  ],
  ogImage: "/og-image.svg",
  locale: "en_US",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Conversion-focused link-in-bio pages`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "BioBoost" }],
  creator: "BioBoost",
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
        alt: "BioBoost link-in-bio SaaS dashboard",
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

export function getSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "10",
      highPrice: "60",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
  };
}
