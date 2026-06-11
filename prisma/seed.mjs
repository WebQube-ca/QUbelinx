import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const demoLinks = [
  {
    title: "Book a 1:1 strategy call",
    url: "https://cal.com/creator-call",
    type: "Booking",
    clicks: 428,
    sortOrder: 0,
  },
  {
    title: "Shop the digital template pack",
    url: "https://store.example.com/templates",
    type: "Product",
    clicks: 316,
    sortOrder: 1,
  },
  {
    title: "Chat on WhatsApp",
    url: "https://wa.me/15551234567",
    type: "Contact",
    clicks: 285,
    sortOrder: 2,
  },
  {
    title: "Download the free growth checklist",
    url: "https://example.com/checklist",
    type: "Lead magnet",
    clicks: 194,
    sortOrder: 3,
  },
];

async function main() {
  const existing = await prisma.profile.findUnique({
    where: { username: "avastudio" },
  });

  if (existing) {
    console.log("Demo profile already exists, skipping seed.");
    return;
  }

  const user = await prisma.user.create({
    data: {
      name: "Ava Studio",
      email: "demo@qubelinx.local",
      emailVerified: new Date(),
      profile: {
        create: {
          username: "avastudio",
          name: "Ava Studio",
          bio: "Creator growth systems, brand partnerships, and launch templates.",
          image:
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=240&q=80",
          pageViews: 12842,
          links: {
            create: demoLinks,
          },
        },
      },
    },
    include: { profile: true },
  });

  console.log(`Seeded demo profile at /${user.profile?.username}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
