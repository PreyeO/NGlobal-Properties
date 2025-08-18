import CTA from "@/components/ui/CTA";
import PropertyCard from "@/components/ui/property-card";
import { featuredProperties } from "@/data";

export default function FeaturedProperties() {
  return (
    <section className="md:pt-24 pt-12 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Featured Properties
        </h2>
        <p className="text-gray-300 mt-2">
          Browse a selection of our premium properties and investment
          opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="py-24">
        <CTA className="bg-[#F5F5F5] text-[#4B0082] " />
      </div>
    </section>
  );
}
