import { Star, ShieldCheck } from "lucide-react";
import Hero from "../Hero";

export default function PropertyHero() {
  return (
    <Hero
      title="Explore Our Properties"
      description="We have verified lands, beautiful homes, and fully serviced shortlets ready for you. Whatever your needs, our goal is to make finding the right property simple and stress-free."
      cta="View Available Properties"
      ctaLink="#gallery"
      badges={[
        { label: "500+ Happy Clients", icon: <Star /> },
        { label: "100% Verified Lands", icon: <ShieldCheck /> },
      ]}
    />
  );
}
