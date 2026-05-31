export type MenuCategory =
  | "all"
  | "starters"
  | "mains"
  | "desserts"
  | "brownies"
  | "cookies"
  | "fudge"
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
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Mains" },
  { id: "brownies", label: "Brownies" },
  { id: "cookies", label: "Cookies" },
  { id: "fudge", label: "Fudge" },
  { id: "desserts", label: "Desserts" },
];

export const menuCategoryCards: {
  id: MenuCategory;
  label: string;
  eyebrow: string;
  description: string;
  image: string;
}[] = [
  {
    id: "starters",
    label: "Starters",
    eyebrow: "Tiny plates, big charm",
    description: "Garlic breads, stuffed buns, sliders, tofu and party nibbles.",
    image:
      "https://images.unsplash.com/photo-1541529086526-db283c563270?w=900&q=80",
  },
  {
    id: "mains",
    label: "Mains",
    eyebrow: "Comfort, but elevated",
    description: "Pastas, risotto, Mexican favourites and Indo-Chinese mains.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
  },
  {
    id: "brownies",
    label: "Brownie Boxes",
    eyebrow: "Fudgy signatures",
    description: "Chocolate, Nutella, Biscoff and assorted brownie boxes.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=900&q=80",
  },
  {
    id: "cookies",
    label: "Cookies",
    eyebrow: "Soft, chunky, giftable",
    description: "Big chocochunk cookies and Nutella-filled cookies.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=80",
  },
  {
    id: "fudge",
    label: "Fudge",
    eyebrow: "Little bites of luxury",
    description: "Chocolate hazelnut and chocolate walnut fudge pieces.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=80",
  },
  {
    id: "desserts",
    label: "Desserts",
    eyebrow: "Sweet things only",
    description: "Browse all brownies, cookies and fudge in one dreamy place.",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=900&q=80",
  },
];

export const products: Product[] = [
  {
    id: "chocolate-fudge-brownies",
    name: "Chocolate Fudge Brownies",
    description: "4 big pieces of rich, fudgy vegetarian brownies.",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=800&q=80",
    price: "₹500",
    featured: true,
  },
  {
    id: "cookie-dough-brownies",
    name: "Cookie Dough Brownies",
    description: "4 big pieces layered with indulgent cookie dough.",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=800&q=80",
    price: "₹550",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "nutella-fudge-brownies",
    name: "Nutella Fudge Brownies",
    description: "4 big pieces with a Nutella-rich fudge centre.",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1607924484295-4eee08b3711a?w=800&q=80",
    price: "₹550",
    featured: true,
  },
  {
    id: "biscoff-fudge-brownies",
    name: "Biscoff Fudge Brownies",
    description: "4 big pieces with caramelised Biscoff notes.",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=800&q=80",
    price: "₹595",
    badge: "Premium",
    featured: true,
  },
  {
    id: "assorted-brownies-box",
    name: "Box of Assorted Brownies",
    description: "4 big pieces, curated as Plate Date's assorted brownie box.",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=800&q=80",
    price: "₹600",
    featured: true,
  },
  {
    id: "chocochunk-cookies",
    name: "Chocochunk Cookies",
    description: "6 big cookies packed with chocolate chunks.",
    category: "cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    price: "₹400",
    featured: true,
  },
  {
    id: "nutella-filled-cookies",
    name: "Nutella Filled Cookies",
    description: "6 big cookies filled with creamy Nutella.",
    category: "cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    price: "₹450",
    featured: true,
  },
  {
    id: "chocolate-hazelnut-fudge",
    name: "Chocolate Hazelnut Fudge",
    description: "5 pieces of smooth chocolate hazelnut fudge.",
    category: "fudge",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    price: "₹300",
  },
  {
    id: "chocolate-walnut-fudge",
    name: "Chocolate Walnut Fudge",
    description: "5 pieces of chocolate fudge with walnut crunch.",
    category: "fudge",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    price: "₹300",
  },
  {
    id: "pesto-olive-toast",
    name: "Pesto Olive Toast",
    description: "4 pieces served fresh as a vegetarian starter.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80",
    price: "₹300",
  },
  {
    id: "cheese-garlic-bread",
    name: "Cheese Garlic Bread",
    description: "4 pieces of cheesy, garlicky comfort.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80",
    price: "₹300",
  },
  {
    id: "family-pull-apart-garlic-bread",
    name: "Family Pull Apart Garlic Bread",
    description: "A shareable garlic bread centrepiece for the table.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80",
    price: "₹495",
    featured: true,
  },
  {
    id: "corn-cheese-balls",
    name: "Corn Cheese Balls",
    description: "8 pieces of crisp corn-cheese indulgence.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    price: "₹350",
  },
  {
    id: "roasted-butter-parsley-baby-potatoes",
    name: "Roasted Butter Parsley Baby Potatoes",
    description: "Baby potatoes roasted with butter and parsley.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
    price: "₹300",
  },
  {
    id: "zucchini-cream-cheese-rolls",
    name: "Zucchini Cream Cheese Rolls",
    description: "10 pieces of soft zucchini rolls with cream cheese.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=800&q=80",
    price: "₹350",
  },
  {
    id: "mini-sliders",
    name: "Mini Sliders",
    description: "6 mini burgers, ideal for party platters.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    price: "₹450",
  },
  {
    id: "mexican-stuffed-buns",
    name: "Mexican Stuffed Buns",
    description: "6 pieces with a warm Mexican-style vegetarian filling.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    price: "₹550",
  },
  {
    id: "stuffed-truffle-mushroom-buns",
    name: "Stuffed Truffle Mushroom Buns",
    description: "6 pieces with truffle mushroom filling.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    price: "₹550",
    badge: "Truffle",
  },
  {
    id: "korean-cream-cheese-buns",
    name: "Korean Cream Cheese Buns",
    description: "6 pieces of soft Korean-style cream cheese buns.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    price: "₹550",
  },
  {
    id: "creamy-mushroom-garlic-bread",
    name: "Creamy Mushroom with Garlic Bread",
    description: "Creamy mushroom served with crisp garlic bread.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=800&q=80",
    price: "₹400",
  },
  {
    id: "pan-fried-chilli-basil-tofu",
    name: "Pan Fried Chilli Basil Tofu",
    description: "Crisp tofu tossed with chilli and basil.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    price: "₹475",
  },
  {
    id: "chilli-paneer-semi-gravy",
    name: "Chilli Paneer Semi-Gravy",
    description: "Vegetarian chilli paneer in a semi-gravy style.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    price: "₹300",
  },
  {
    id: "whole-wheat-chilli-cheese-crackers",
    name: "Whole Wheat Chilli Cheese Crackers",
    description: "Served with pesto or hummus.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=800&q=80",
    price: "₹325",
  },
  {
    id: "spaghetti-aglio-e-olio",
    name: "Spaghetti Aglio-E-Olio",
    description: "Classic vegetarian spaghetti with garlic and olive oil.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    price: "₹450",
    featured: true,
  },
  {
    id: "penne-arrabbiata",
    name: "Penne Arrabbiata",
    description: "Penne tossed in a bold, spicy tomato sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    price: "₹450",
  },
  {
    id: "truffle-mushroom-spaghetti",
    name: "Truffle Mushroom Spaghetti",
    description: "Creamy mushroom spaghetti finished with truffle notes.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    price: "₹450",
    badge: "Truffle",
  },
  {
    id: "penne-creamy-pesto",
    name: "Penne in Creamy Pesto",
    description: "Penne coated in a creamy herb pesto sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    price: "₹450",
  },
  {
    id: "penne-alfredo",
    name: "Penne in Alfredo",
    description: "A rich, creamy vegetarian Alfredo pasta.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    price: "₹450",
  },
  {
    id: "spinach-cream-cheese-ravioli",
    name: "Spinach & Cream Cheese Ravioli",
    description: "Ravioli in arrabbiata sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    price: "₹495",
  },
  {
    id: "truffle-mushroom-ravioli",
    name: "Truffle Cream Cheese & Mushroom Ravioli",
    description: "Ravioli in butter aioli sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    price: "₹495",
    badge: "Truffle",
  },
  {
    id: "veg-lasagne",
    name: "Veg Lasagne",
    description: "Layered vegetarian lasagne, baked rich and comforting.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80",
    price: "₹800",
    featured: true,
  },
  {
    id: "sundried-tomato-risotto",
    name: "Sundried Tomato Risotto",
    description: "Creamy risotto with sundried tomato depth.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    price: "₹495",
  },
  {
    id: "mushroom-parmesan-risotto",
    name: "Mushroom & Parmesan Risotto",
    description: "Creamy risotto with mushroom and parmesan.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    price: "₹495",
  },
  {
    id: "burrito-bowl",
    name: "Burrito Bowl",
    description: "A hearty Mexican-inspired vegetarian bowl.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    price: "₹550",
  },
  {
    id: "tacos-mexicana",
    name: "Tacos Mexicana",
    description: "6 vegetarian Mexican-style tacos.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    price: "₹500",
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    description: "Veg cottage cheese, cheese, refried beans, corn, spinach and cheese with sour cream.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&q=80",
    price: "₹425",
  },
  {
    id: "potato-rosti-herbed-cheese",
    name: "Potato Rosti with Herbed Cheese Sauce",
    description: "Crisp potato rosti with herbed cheese sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
    price: "₹350",
  },
  {
    id: "tex-mex-rice-herbed-cheese",
    name: "Tex Mex Rice with Herbed Cheese Sauce",
    description: "Tex Mex rice served with herbed cheese sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    price: "₹350",
  },
  {
    id: "mapo-tofu",
    name: "Mapo Tofu",
    description: "A vegetarian tofu main with bold flavour.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    price: "₹495",
  },
  {
    id: "chilli-paneer-gravy",
    name: "Chilli Paneer Gravy",
    description: "Paneer in a spicy Indo-Chinese gravy.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    price: "₹400",
  },
  {
    id: "diced-potato-corn-hot-garlic",
    name: "Diced Potato & Corn in Hot Garlic Sauce",
    description: "Potato and corn tossed in hot garlic sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    price: "₹400",
  },
  {
    id: "exotic-vegetables-garlic-pepper",
    name: "Exotic Vegetables in Garlic Pepper Sauce",
    description: "Vegetables tossed in garlic pepper sauce.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    price: "₹400",
  },
  {
    id: "hakka-noodles",
    name: "Hakka Noodles",
    description: "Classic vegetarian Hakka noodles.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    price: "₹375",
  },
  {
    id: "chilli-garlic-noodles",
    name: "Chilli Garlic Noodles",
    description: "Noodles tossed with chilli and garlic.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    price: "₹375",
  },
  {
    id: "udon-noodles",
    name: "Udon Noodles",
    description: "Thick udon noodles in a vegetarian preparation.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    price: "₹450",
  },
  {
    id: "burnt-ginger-capsicum-fried-rice",
    name: "Burnt Ginger Capsicum Fried Rice",
    description: "Fried rice with burnt ginger and capsicum.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    price: "₹350",
  },
  {
    id: "vegetable-fried-rice",
    name: "Vegetable Fried Rice",
    description: "Classic vegetarian fried rice.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    price: "₹350",
  },
  {
    id: "butter-garlic-fried-rice",
    name: "Butter Garlic Fried Rice",
    description: "Fried rice finished with butter and garlic.",
    category: "mains",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    price: "₹350",
  },
];

export const menuImages = [
  {
    src: "/menu-starters.png",
    alt: "Plate Date starters menu",
    title: "Starters",
  },
  {
    src: "/menu-mains.png",
    alt: "Plate Date mains menu",
    title: "Mains",
  },
  {
    src: "/menu-desserts.png",
    alt: "Plate Date desserts menu",
    title: "Desserts",
  },
];

export const collections = [
  {
    id: "starters",
    title: "Starters",
    subtitle: "Garlic breads, stuffed buns, sliders and small plates.",
    image:
      "https://images.unsplash.com/photo-1541529086526-db283c563270?w=900&q=80",
    href: "/menu?category=starters",
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
    id: "cookies",
    title: "Cookies",
    subtitle: "Big chocochunk and Nutella-filled cookies.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=80",
    href: "/menu?category=cookies",
  },
  {
    id: "fudge",
    title: "Fudge",
    subtitle: "Chocolate hazelnut and walnut fudge bites.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=80",
    href: "/menu?category=fudge",
  },
  {
    id: "mains",
    title: "Mains",
    subtitle: "Pasta, risotto, Mexican bowls and Indo-Chinese favourites.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
    href: "/menu?category=mains",
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Brownies, cookies and fudge for every sweet craving.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=900&q=80",
    href: "/menu?category=desserts",
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
