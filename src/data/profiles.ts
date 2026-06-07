export type ProfileTheme = {
  mode: "dark" | "light";
  accent: string;
  gradient: string;
};

export type ProfileLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "video" | "shop" | "calendar" | "whatsapp" | "podcast" | "portfolio" | "course" | "mail";
  views: string;
  clicks: number;
  badge?: "New" | "Trending" | "Limited" | "Popular";
  thumbnail?: string;
};

export type SocialLink = {
  label: "WhatsApp" | "Email" | "Call" | "Instagram" | "YouTube" | "TikTok" | "LinkedIn" | "Share";
  href: string;
};

export type FeaturedModule = {
  id: string;
  type: "video" | "product" | "newsletter" | "booking" | "offer" | "tip";
  title: string;
  description: string;
  cta: string;
  metric: string;
  image?: string;
};

export type Profile = {
  username: string;
  profileImage: string;
  name: string;
  verified: boolean;
  bio: string;
  category: string;
  socialProof: string[];
  links: ProfileLink[];
  socialLinks: SocialLink[];
  theme: ProfileTheme;
  analytics: {
    pageViews: number;
    totalClicks: number;
    ctr: number;
    topLink: string;
  };
  featuredModules: FeaturedModule[];
  testimonials: {
    quote: string;
    name: string;
    role: string;
  }[];
  workedWith: string[];
};

export const demoProfile: Profile = {
  username: "avastudio",
  profileImage:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=88",
  name: "Ava Studio",
  verified: true,
  bio: "Creator growth systems, brand partnerships, and launch templates for founders turning Instagram attention into revenue.",
  category: "Creator",
  socialProof: ["10k+ community", "Trusted by 500+ clients", "18.1% avg CTR"],
  theme: {
    mode: "dark",
    accent: "from-violet-500 via-fuchsia-500 to-cyan-400",
    gradient:
      "radial-gradient(circle at 20% 0%, rgba(139,92,246,0.45), transparent 30%), radial-gradient(circle at 80% 12%, rgba(34,211,238,0.24), transparent 30%), radial-gradient(circle at 50% 100%, rgba(236,72,153,0.22), transparent 32%)",
  },
  analytics: {
    pageViews: 12842,
    totalClicks: 2326,
    ctr: 18.1,
    topLink: "Book a 1:1 strategy call",
  },
  socialLinks: [
    { label: "WhatsApp", href: "https://wa.me/15551234567" },
    { label: "Email", href: "mailto:hello@avastudio.co" },
    { label: "Call", href: "tel:+15551234567" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Share", href: "#" },
  ],
  links: [
    {
      id: "watch-video",
      title: "Watch my latest video",
      description: "How I turn content views into warm leads in one week.",
      href: "https://youtube.com",
      icon: "video",
      views: "8.4k views",
      clicks: 612,
      badge: "Trending",
      thumbnail:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=320&q=82",
    },
    {
      id: "shop-products",
      title: "Shop my digital products",
      description: "Templates, pricing calculators, and launch kits for creators.",
      href: "https://store.example.com",
      icon: "shop",
      views: "4.9k views",
      clicks: 516,
      badge: "Popular",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=320&q=82",
    },
    {
      id: "book-call",
      title: "Book a consultation",
      description: "Private 45-minute audit for your Instagram funnel.",
      href: "https://cal.com",
      icon: "calendar",
      views: "2.8k views",
      clicks: 428,
      badge: "Limited",
    },
    {
      id: "whatsapp-community",
      title: "Join WhatsApp community",
      description: "Weekly launch notes, client wins, and fast creator prompts.",
      href: "https://wa.me/15551234567",
      icon: "whatsapp",
      views: "2.1k views",
      clicks: 285,
      badge: "New",
    },
    {
      id: "portfolio",
      title: "View portfolio",
      description: "Campaigns, landing pages, and brand partnership case studies.",
      href: "https://example.com/portfolio",
      icon: "portfolio",
      views: "1.7k views",
      clicks: 194,
    },
  ],
  featuredModules: [
    {
      id: "latest-video",
      type: "video",
      title: "Latest YouTube video",
      description: "The 3-part Instagram funnel I use before every product launch.",
      cta: "Watch now",
      metric: "24 min",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=640&q=84",
    },
    {
      id: "featured-product",
      type: "product",
      title: "Creator Monetization Kit",
      description: "A plug-and-play digital product system with pricing, launch, and email templates.",
      cta: "Get the kit",
      metric: "$39",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=640&q=84",
    },
    {
      id: "newsletter",
      type: "newsletter",
      title: "Join the weekly growth letter",
      description: "One tactic every Friday for creators building a paid audience.",
      cta: "Subscribe",
      metric: "8.2k readers",
    },
  ],
  testimonials: [
    {
      quote: "Ava helped us turn profile visits into booked calls without adding another complicated funnel tool.",
      name: "Maya Singh",
      role: "Founder, Glow Studio",
    },
    {
      quote: "The template kit paid for itself in the first launch weekend.",
      name: "Jordan Ellis",
      role: "Creator operator",
    },
  ],
  workedWith: ["Notion", "Linear", "Framer", "Stripe"],
};

const profiles = [demoProfile];

export function getProfileByUsername(username: string) {
  return profiles.find((profile) => profile.username.toLowerCase() === username.toLowerCase()) ?? demoProfile;
}
