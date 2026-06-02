import StoryCTA from "@/components/our-story/StoryCTA";
import StoryHeadline from "@/components/our-story/StoryHeadline";
import StoryHero from "@/components/our-story/StoryHero";
import StoryValues from "@/components/our-story/StoryValues";
import ProductShowcase from "@/components/shared/ProductShowcase";

function OurStoryPage() {
  return (
    <>
      <StoryHero />
      <StoryHeadline />
      <StoryValues />
      <StoryCTA />
      <ProductShowcase />
    </>
  );
}

export default OurStoryPage;
