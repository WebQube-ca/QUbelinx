import { Hero } from "@/components/home/hero";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { WhyChoose } from "@/components/home/why-choose";
import { BestSellers } from "@/components/home/best-sellers";
import { Story } from "@/components/home/story";
import { Testimonials } from "@/components/home/testimonials";
import { Occasions } from "@/components/home/occasions";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { Contact } from "@/components/home/contact";
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
