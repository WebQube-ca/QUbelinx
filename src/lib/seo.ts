import type { Metadata } from "next";

export const siteConfig = {
  name: "Plate Date by Rhea Jaitha",
  shortName: "Plate Date",
  description:
    "Premium vegetarian cloud kitchen in Kolkata. Handcrafted brownies, cookies, fudge, vegetarian starters, mains and custom food gifting.",
  url: "https://platedate.in",
  keywords: [
    "Cloud Kitchen Kolkata",
    "Dessert Delivery Kolkata",
    "Brownie Boxes Kolkata",
    "Vegetarian Desserts Kolkata",
    "Custom Food Gifts Kolkata",
    "Vegetarian Food Kolkata",
    "Party Platters Kolkata",
    "Plate Date",
    "Rhea Jaitha",
  ],
  ogImage: "/plate-date-logo.png",
  locale: "en_IN",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Vegetarian Food & Desserts Kolkata`,
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
        width: 1024,
        height: 1024,
        alt: "Plate Date by Rhea Jaitha",
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
  icons: {
    icon: "/plate-date-logo.png",
    apple: "/plate-date-logo.png",
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
    servesCuisine: ["Vegetarian", "Desserts", "Italian", "Mexican", "Asian"],
    priceRange: "₹₹",
    telephone: "+91 98743 45555",
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
    sameAs: ["https://www.instagram.com/platedatebyrheajaitha"],
  };
}
