import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Square, Bed, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  image: string;
  type: string;
  location?: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  area: string;
  features: string[];
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="group py-0 overflow-hidden border-0 shadow-xl hover:shadow-luxury">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover "
        />
        <div className="absolute top-4 left-4">
          <Badge className="text-white bg-[#4B0082] font-semibold">
            {property.type}
          </Badge>
        </div>
      </div>

      <CardContent className="pt-1 pb-8 px-4">
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[#4B0082] transition-colors duration-150">
          {property.title}
        </h3>

        <div className="flex justify-start items-center gap-4 mb-4 text-sm text-gray-500">
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
              className="text-xs bg-[#4B0082]/10 text-[#4B0082]"
            >
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge className="text-xs bg-[#4B0082]/10 text-[#4B0082]">
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>

        <Link to="contact-us">
          <Button className=" cursor-pointer rounded-lg border border-[#4B0082] text-white bg-[#4B0082] hover:bg-[#4B0082]/90 transition duration-150">
            Inquire Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
