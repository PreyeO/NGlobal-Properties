import FAQSection from "@/components/sections/landing-sections/FAQSection";
import FeaturedSection from "@/components/sections/landing-sections/FeaturedSection";
import Hero from "@/components/sections/landing-sections/Hero";
import TestimonialsCTA from "@/components/sections/landing-sections/Testimonials";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <FeaturedSection />

      <TestimonialsCTA />
      <FAQSection />
    </main>
  );
};

export default LandingPage;
