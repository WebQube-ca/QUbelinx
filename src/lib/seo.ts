import type { Metadata } from "next";

export const siteConfig = {
  name: "Resin Passion",
  shortName: "Resin Passion",
  description:
    "Premium handmade resin clocks, personalized name plates, luxury gifts, and custom resin art pieces crafted in Mumbai, India.",
  url: "https://resinpassion.in",
  keywords: [
    "Handmade resin art Mumbai",
    "Customized resin wall clocks",
    "Personalized name plates",
    "Luxury handmade gifts India",
    "Wedding resin gifts",
    "Anniversary gifts Mumbai",
    "Housewarming gifts India",
    "Custom resin art pieces",
    "Luxury home decor Mumbai",
  ],
  ogImage: "/resin-passion-logo.png",
  locale: "en_IN",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Handmade Resin Art`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Resin Passion" }],
  creator: "Resin Passion",
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
        alt: "Resin Passion luxury handmade resin art logo",
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
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/resinpassion2026?igsh=aDFqajdhcThxazd1",
    ],
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Custom handmade resin art",
      itemListElement: [
        "Customized Resin Wall Clocks",
        "Personalized Name Plates",
        "Wedding Gifts",
        "Anniversary Gifts",
        "Housewarming Gifts",
        "Luxury Home Decor",
      ],
    },
  };
}
