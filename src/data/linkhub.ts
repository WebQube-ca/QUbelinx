import {
  BarChart3,
  CalendarDays,
  Globe2,
  Link2,
  MessageCircle,
  MousePointerClick,
  Palette,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const appName = "MELT BOMBAY";

export const features = [
  {
    icon: Zap,
    title: "Conversion-first link pages",
    description:
      "Guide Instagram traffic to products, bookings, offers, lead forms, and social proof without distracting dead ends.",
  },
  {
    icon: MessageCircle,
    title: "Business-ready contact actions",
    description:
      "Add WhatsApp, call, email, booking, and lead capture buttons that make buying or enquiring feel instant.",
  },
  {
    icon: BarChart3,
    title: "Analytics that explain intent",
    description:
      "Track page views, link clicks, CTR, and top-performing CTAs so creators and teams know what converts.",
  },
  {
    icon: Palette,
    title: "Premium creator themes",
    description:
      "Launch polished mobile pages with brandable gradients, cards, typography, and monetization sections.",
  },
  {
    icon: ShieldCheck,
    title: "Brand control",
    description:
      "Remove platform branding, organize campaigns, and keep your highest-value offers in priority placement.",
  },
  {
    icon: Users,
    title: "Lead tracking for growth",
    description:
      "Capture high-intent visitors from Instagram and route them to offers, calls, consults, or storefronts.",
  },
];

export const howItWorks = [
  {
    title: "Create your profile",
    description:
      "Add a photo, bio, niche, and the single Instagram-ready URL your audience will remember.",
  },
  {
    title: "Stack conversion links",
    description:
      "Drop in offers, WhatsApp buttons, product links, bookings, freebies, and content funnels.",
  },
  {
    title: "Optimize with analytics",
    description:
      "See what gets clicks, reorder links by intent, and turn profile visits into revenue.",
  },
];

export const templates = [
  {
    name: "Creator Launch",
    audience: "Courses, drops, affiliate links",
    gradient: "from-violet-500 via-fuchsia-500 to-orange-400",
    links: ["New paid guide", "Join broadcast channel", "Book brand collab"],
  },
  {
    name: "Local Business",
    audience: "WhatsApp, calls, appointments",
    gradient: "from-emerald-400 via-cyan-500 to-blue-600",
    links: ["WhatsApp quote", "Call now", "Reserve a slot"],
  },
  {
    name: "Premium Brand",
    audience: "Shops, lookbooks, lead magnets",
    gradient: "from-slate-900 via-indigo-900 to-slate-700",
    links: ["Shop best sellers", "Download lookbook", "VIP waitlist"],
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$10",
    description: "For creators and new businesses launching one polished bio hub.",
    badge: "Start here",
    cta: "Start Starter",
    features: [
      "1 profile page",
      "4 conversion links",
      "Basic analytics",
      "Email tech support",
      "Platform branding",
    ],
  },
  {
    name: "Growth",
    price: "$30",
    description: "For creators monetizing launches and businesses capturing leads.",
    badge: "Most Popular",
    cta: "Start Growth",
    highlighted: true,
    features: [
      "7 conversion links",
      "Custom themes",
      "Advanced analytics",
      "Live chat support",
      "Priority link scheduling",
      "Remove branding",
    ],
  },
  {
    name: "Business",
    price: "$60",
    description: "For teams that turn social traffic into qualified leads.",
    badge: "Scale",
    cta: "Start Business",
    features: [
      "10 conversion links",
      "Lead tracking",
      "WhatsApp / Call buttons",
      "Booking integration style section",
      "Priority placement",
      "Priority tech support",
      "Priority live chat support",
      "Campaign performance view",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "We moved from a basic link page to a polished branded hub and finally saw which Instagram clicks were turning into consult calls.",
    name: "Maya Singh",
    role: "Founder, Glow Studio",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "The WhatsApp-first layout helped our small team convert DMs into paid orders without adding another tool.",
    name: "Jordan Ellis",
    role: "Owner, Forge Coffee",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "My launch page looked premium in an afternoon, and the CTR cards made it obvious what to keep above the fold.",
    name: "Alina Park",
    role: "Creator & educator",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80",
  },
];

export const dashboardLinks = [
  {
    id: "1",
    title: "Book a 1:1 strategy call",
    url: "https://cal.com/creator-call",
    clicks: 428,
    ctr: 18.4,
    type: "Booking",
  },
  {
    id: "2",
    title: "Shop the digital template pack",
    url: "https://store.example.com/templates",
    clicks: 316,
    ctr: 13.6,
    type: "Product",
  },
  {
    id: "3",
    title: "Chat on WhatsApp",
    url: "https://wa.me/15551234567",
    clicks: 285,
    ctr: 12.2,
    type: "Contact",
  },
  {
    id: "4",
    title: "Download the free growth checklist",
    url: "https://example.com/checklist",
    clicks: 194,
    ctr: 8.3,
    type: "Lead magnet",
  },
];

export const profileLinks = [
  {
    title: "Book a growth audit",
    subtitle: "Limited May slots",
    icon: CalendarDays,
    clicks: "428 clicks",
  },
  {
    title: "Get the creator monetization kit",
    subtitle: "Templates + pricing calculator",
    icon: Sparkles,
    clicks: "316 clicks",
  },
  {
    title: "WhatsApp for collaborations",
    subtitle: "Fastest response",
    icon: MessageCircle,
    clicks: "285 clicks",
  },
  {
    title: "Read the Instagram funnel guide",
    subtitle: "8 minute read",
    icon: Globe2,
    clicks: "194 clicks",
  },
];

export const analyticsCards = [
  { label: "Total page views", value: "12,842", delta: "+24%", icon: TrendingUp },
  { label: "Total link clicks", value: "2,326", delta: "+18%", icon: MousePointerClick },
  { label: "Average CTR", value: "18.1%", delta: "+4.2%", icon: BarChart3 },
  { label: "Active links", value: "4 / 4", delta: "Starter plan", icon: Link2 },
];
