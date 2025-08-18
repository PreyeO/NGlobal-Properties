import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Square, Bed, Bath } from "lucide-react";

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa in Lagos",
    image: "/images/hero-bg.jpg",
    type: "For Sale",
    location: "Lagos, Nigeria",
    bedrooms: 4,
    bathrooms: 3,
    area: "350m²",
    features: ["Swimming Pool", "Garage", "Furnished", "C of O", "Survey Plan"],
  },
  {
    id: 2,
    title: "Beachfront Land in Accra",
    image: "/images/hero-bg.jpg",
    type: "For Sale",
    location: "Accra, Ghana",
    bedrooms: null,
    bathrooms: null,
    area: "500m²",
    features: ["C of O", "Survey Plan", "Water Access"],
  },
  {
    id: 3,
    title: "Modern Apartment in Abuja",
    image: "/images/hero-bg.jpg",
    type: "For Sale",
    location: "Abuja, Nigeria",
    bedrooms: 3,
    bathrooms: 2,
    area: "180m²",
    features: ["Furnished", "Gym Access", "C of O"],
  },
];

export default function FeaturedProperties() {
  return (
    <section className="pt-24 px-6 md:px-12 bg-[#0B1D3A]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8860B]">
          Featured Properties
        </h2>
        <p className="text-gray-300 mt-2">
          Browse a selection of our premium properties and investment
          opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map((property) => (
          <Card
            key={property.id}
            className="group py-0 overflow-hidden border-0 shadow-xl hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-[#FDF6E3]"
          >
            <div className="relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#B8860B] text-[#0B1D3A] font-semibold">
                  {property.type}
                </Badge>
              </div>
            </div>

            <CardContent className="pt-1 pb-8 px-4 text-[#0B1D3A]">
              <h3 className="mb-2 text-xl font-bold group-hover:text-[#B8860B] transition-colors">
                {property.title}
              </h3>
              <div className="flex justify-start items-center gap-4 mb-4 text-sm text-gray-600">
                {property.bedrooms && (
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" /> {property.bedrooms}
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" /> {property.bathrooms}
                  </div>
                )}
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" /> {property.area}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {property.features.slice(0, 3).map((feature, index) => (
                  <Badge
                    key={index}
                    className="text-xs bg-[#B8860B]/20 text-[#0B1D3A]"
                  >
                    {feature}
                  </Badge>
                ))}
                {property.features.length > 3 && (
                  <Badge className="text-xs bg-[#B8860B]/20 text-[#0B1D3A]">
                    +{property.features.length - 3} more
                  </Badge>
                )}
              </div>

              <Button className="rounded-lg border border-[#B8860B] bg-transparent text-[#0B1D3A] hover:bg-[#B8860B] hover:text-white transition">
                Inquire Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
