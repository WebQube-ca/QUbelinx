import { BestSellers } from "@/components/home/best-sellers";
import { Contact } from "@/components/home/contact";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { Hero } from "@/components/home/hero";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { Occasions } from "@/components/home/occasions";
import { Story } from "@/components/home/story";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChoose } from "@/components/home/why-choose";
import { PageTransition } from "@/components/layout/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedCollections />
      <WhyChoose />
      <BestSellers />
      <Story />
      <Testimonials />
      <Occasions />
      <InstagramFeed />
      <Contact />
    </PageTransition>
  );
}
