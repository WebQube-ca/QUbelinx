import type { Metadata } from "next";

export const siteConfig = {
  name: "Plate Date by Rhea Jaitha",
  shortName: "Plate Date",
  description:
    "Premium vegetarian cloud kitchen in Kolkata. Handcrafted brownie boxes, dessert pizza, tres leches, cookie bouquets, party platters & custom food gifting.",
  url: "https://platedate.in",
  keywords: [
    "Cloud Kitchen Kolkata",
    "Dessert Delivery Kolkata",
    "Brownie Boxes Kolkata",
    "Vegetarian Desserts Kolkata",
    "Custom Food Gifts Kolkata",
    "Party Platters Kolkata",
    "Plate Date",
    "Rhea Jaitha",
    "Dessert Pizza Kolkata",
    "Tres Leches Kolkata",
  ],
  ogImage: "/og-image.svg",
  locale: "en_IN",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Desserts & Gifting Kolkata`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Rhea Jaitha" }],
  creator: "Rhea Jaitha",
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
        alt: "Plate Date — Luxury Desserts Kolkata",
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

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    servesCuisine: ["Vegetarian", "Desserts", "Indian Fusion"],
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ballygunge",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5245,
      longitude: 88.3654,
    },
    founder: {
      "@type": "Person",
      name: "Rhea Jaitha",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
    sameAs: [
      "https://instagram.com/platedate",
    ],
  };
}
