export type MenuCategory =
  | "all"
  | "desserts"
  | "brownies"
  | "tres-leches"
  | "platters"
  | "gift-boxes"
  | "specials";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  image: string;
  price?: string;
  badge?: string;
  featured?: boolean;
}

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "desserts", label: "Desserts" },
  { id: "brownies", label: "Brownies" },
  { id: "tres-leches", label: "Tres Leches" },
  { id: "platters", label: "Platters" },
  { id: "gift-boxes", label: "Gift Boxes" },
  { id: "specials", label: "Specials" },
];

export const products: Product[] = [
  {
    id: "dessert-pizza-classic",
    name: "Signature Dessert Pizza",
    description:
      "Crisp cookie base layered with Belgian chocolate, seasonal berries & gold-dusted cream.",
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    price: "From ₹899",
    badge: "Signature",
    featured: true,
  },
  {
    id: "brownie-luxe-box",
    name: "Luxe Brownie Box",
    description:
      "Six fudgy squares — sea salt caramel, hazelnut praline & ruby chocolate.",
    category: "brownies",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=800&q=80",
    price: "From ₹749",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "tres-leches-rose",
    name: "Rose Tres Leches",
    description:
      "Silky sponge soaked in rose-infused milk, topped with whipped mascarpone clouds.",
    category: "tres-leches",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    price: "From ₹649",
    featured: true,
  },
  {
    id: "cookie-bouquet",
    name: "Cookie Bouquet",
    description:
      "Hand-piped butter cookies arranged like a floral bouquet — edible art.",
    category: "gift-boxes",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    price: "From ₹999",
    badge: "Instagram Favourite",
    featured: true,
  },
  {
    id: "party-platter-grande",
    name: "Grande Party Platter",
    description:
      "Curated spread of mini desserts for 12–15 guests. Perfect for celebrations.",
    category: "platters",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    price: "From ₹2,499",
    featured: true,
  },
  {
    id: "valentine-hamper",
    name: "Valentine's Love Hamper",
    description:
      "Heart-shaped brownies, ruby truffles & a handwritten note — romance, boxed.",
    category: "specials",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
    price: "From ₹1,299",
    badge: "Limited",
    featured: true,
  },
  {
    id: "mothers-day-collection",
    name: "Mother's Day Collection",
    description:
      "Elegant pastel dessert tower with personalised ribbon & chef's message card.",
    category: "specials",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f6?w=800&q=80",
    price: "From ₹1,499",
    badge: "Seasonal",
  },
  {
    id: "corporate-gift-box",
    name: "Corporate Gifting Box",
    description:
      "Branded packaging, premium assortments & bulk pricing for teams & clients.",
    category: "gift-boxes",
    image:
      "https://images.unsplash.com/photo-1541782814456-9b90481f6271?w=800&q=80",
    price: "Custom Quote",
  },
  {
    id: "mini-dessert-flight",
    name: "Mini Dessert Flight",
    description: "Twelve bite-sized creations — one journey through our menu.",
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    price: "From ₹599",
  },
  {
    id: "double-chocolate-brownie",
    name: "Double Chocolate Brownie",
    description: "Dense, glossy centre with 70% dark chocolate shards.",
    category: "brownies",
    image:
      "https://images.unsplash.com/photo-1607924484295-4eee08b3711a?w=800&q=80",
    price: "From ₹149",
  },
  {
    id: "classic-tres-leches",
    name: "Classic Tres Leches",
    description: "Traditional three-milk soak with cinnamon-kissed cream.",
    category: "tres-leches",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    price: "From ₹549",
  },
  {
    id: "celebration-platter",
    name: "Celebration Platter",
    description: "Mixed dessert selection for intimate gatherings of 6–8.",
    category: "platters",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    price: "From ₹1,799",
  },
];

export const collections = [
  {
    id: "dessert-pizza",
    title: "Dessert Pizza",
    subtitle: "Crisp. Decadent. Unforgettable.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=80",
    href: "/menu?category=desserts",
  },
  {
    id: "brownie-boxes",
    title: "Brownie Boxes",
    subtitle: "Fudgy perfection, gift-ready.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=900&q=80",
    href: "/menu?category=brownies",
  },
  {
    id: "cookie-bouquets",
    title: "Cookie Bouquets",
    subtitle: "Edible florals for every mood.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=80",
    href: "/menu?category=gift-boxes",
  },
  {
    id: "tres-leches",
    title: "Tres Leches",
    subtitle: "Silky, soaked, soul-warming.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
    href: "/menu?category=tres-leches",
  },
  {
    id: "party-platters",
    title: "Party Platters",
    subtitle: "Centerpieces that disappear fast.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80",
    href: "/menu?category=platters",
  },
  {
    id: "gift-hampers",
    title: "Gift Hampers",
    subtitle: "Curated luxury, delivered with love.",
    image:
      "https://images.unsplash.com/photo-1541782814456-9b90481f6271?w=900&q=80",
    href: "/menu?category=gift-boxes",
  },
];

export const features = [
  {
    icon: "Leaf",
    title: "100% Vegetarian",
    description: "Every creation is crafted without meat — pure indulgence.",
  },
  {
    icon: "Sparkles",
    title: "Handcrafted Fresh",
    description: "Made to order in small batches for peak flavour & texture.",
  },
  {
    icon: "Gift",
    title: "Custom Gifting",
    description: "Personalised notes, ribbons & branded boxes for every occasion.",
  },
  {
    icon: "Gem",
    title: "Premium Ingredients",
    description: "Belgian chocolate, farm-fresh cream & artisan techniques.",
  },
  {
    icon: "Users",
    title: "Party Orders",
    description: "Platters scaled for intimate dinners to grand celebrations.",
  },
  {
    icon: "Heart",
    title: "Made with Love",
    description: "Chef Rhea pours heart into every plate that leaves our kitchen.",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Ananya S.",
    role: "Birthday Host",
    rating: 5,
    text: "The brownie box was the star of my party. Guests kept asking where it was from — Plate Date is now my go-to.",
    source: "google",
  },
  {
    id: "2",
    name: "Rohan & Priya",
    role: "Anniversary",
    rating: 5,
    text: "Dessert pizza for date night? Genius. Romantic packaging, flawless delivery to Ballygunge.",
    source: "instagram",
  },
  {
    id: "3",
    name: "Meera K.",
    role: "Corporate Gifting",
    rating: 5,
    text: "We ordered 40 custom hampers for clients. Professional, beautiful, and delicious. Rhea understood our brand perfectly.",
    source: "google",
  },
  {
    id: "4",
    name: "Devika M.",
    role: "Mother's Day",
    rating: 5,
    text: "My mom cried happy tears. The tres leches tower looked like it belonged in a magazine.",
    source: "instagram",
  },
  {
    id: "5",
    name: "Arjun T.",
    role: "Valentine's Special",
    rating: 5,
    text: "Ordered at midnight, delivered by noon. The cookie bouquet was Instagram gold.",
    source: "google",
  },
];

export const occasions = [
  {
    id: "valentines",
    title: "Valentine's Day",
    description: "Heart-forward hampers & ruby chocolate creations.",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
    emoji: "💕",
  },
  {
    id: "birthdays",
    title: "Birthdays",
    description: "Custom message cakes & surprise dessert towers.",
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80",
    emoji: "🎂",
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    description: "Romantic platters designed for two.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80",
    emoji: "✨",
  },
  {
    id: "mothers-day",
    title: "Mother's Day",
    description: "Pastel elegance she'll treasure forever.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f6?w=600&q=80",
    emoji: "🌸",
  },
  {
    id: "corporate",
    title: "Corporate Gifting",
    description: "Bulk orders with branded luxury packaging.",
    image:
      "https://images.unsplash.com/photo-1541782814456-9b90481f6271?w=600&q=80",
    emoji: "🎁",
  },
];

export const instagramPosts = [
  {
    id: "ig1",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=500&q=80",
    likes: 1240,
  },
  {
    id: "ig2",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
    likes: 982,
  },
  {
    id: "ig3",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80",
    likes: 2103,
  },
  {
    id: "ig4",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
    likes: 876,
  },
  {
    id: "ig5",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80",
    likes: 1544,
  },
  {
    id: "ig6",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&q=80",
    likes: 3201,
  },
];

export const timeline = [
  {
    year: "2019",
    title: "The First Recipe",
    description:
      "Rhea Jaitha experiments in her home kitchen, perfecting a fudgy brownie that friends couldn't stop requesting.",
  },
  {
    year: "2021",
    title: "Plate Date is Born",
    description:
      "A cloud kitchen vision takes shape — luxury desserts, vegetarian-only, delivered across Kolkata.",
  },
  {
    year: "2023",
    title: "Instagram Fame",
    description:
      "Dessert pizza & cookie bouquets go viral. Waitlists become the norm for weekend orders.",
  },
  {
    year: "2025",
    title: "Kolkata's Gifting Icon",
    description:
      "Corporate hampers, party platters & seasonal collections make Plate Date synonymous with celebration.",
  },
];
