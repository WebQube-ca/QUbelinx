import type { Metadata } from "next";

export const siteConfig = {
  name: "MELT BOMBAY",
  shortName: "MELT BOMBAY",
  description:
    "Premium eggless cookies, brownies, cookie tins, dessert boxes, and luxury gifting handcrafted in Lower Parel, Mumbai.",
  url: "https://meltbombay.com",
  keywords: [
    "MELT BOMBAY",
    "eggless desserts Mumbai",
    "premium cookies Mumbai",
    "stuffed cookies Mumbai",
    "cookie tins Mumbai",
    "eggless brownies",
    "luxury dessert boxes",
    "corporate gifting Mumbai",
    "Lower Parel bakery",
  ],
  ogImage: "/og-image.svg",
  locale: "en_IN",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Eggless Desserts That Melt In Your Mouth`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "MELT BOMBAY" }],
  creator: "MELT BOMBAY",
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
        alt: "MELT BOMBAY premium eggless desserts and gifting",
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
    sameAs: [
      "https://www.instagram.com/melt.bombay?igsh=Y21oYjlnenl5cnFv",
    ],
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Premium eggless dessert collections",
      itemListElement: [
        "Premium Cookies",
        "Stuffed Cookies",
        "Cookie Tins",
        "Brownies",
        "Dessert Boxes",
        "Corporate Gifting",
      ],
    },
  };
}
