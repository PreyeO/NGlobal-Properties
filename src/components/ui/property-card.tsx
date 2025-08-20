import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Square,
  Bed,
  Bath,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  images?: string[];
  image?: string;
  type: string;
  location: string; // compulsory
  price: string; // compulsory
  bedrooms?: number | null;
  bathrooms?: number | null;
  area: string;
  features: string[];
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const images = property.images || (property.image ? [property.image] : []);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Card className="group py-0 overflow-hidden border-0 shadow-xl hover:shadow-luxury">
      <div className="relative overflow-hidden">
        <img
          src={images[currentImage]}
          alt={property.title}
          className="w-full h-56 object-cover"
        />
        {images.length > 1 && (
          <>
            <ChevronLeft
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full cursor-pointer"
            />
            <ChevronRight
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full cursor-pointer"
            />
          </>
        )}
        <div className="absolute top-4 left-4">
          <Badge className="text-white bg-[#4B0082] font-semibold">
            {property.type}
          </Badge>
        </div>
      </div>

      <CardContent className="pt-1 pb-8 px-4">
        {/* Title and Price */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4B0082] transition-colors duration-150">
            {property.title}
          </h3>
          <div className="text-lg font-semibold text-[#4B0082]">
            {property.price}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" /> {property.location}
        </div>

        {/* Property Details */}
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

        {/* Features */}
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

        {/* Inquiry Button */}
        <Link to="contact-us">
          <Button className="cursor-pointer rounded-lg border border-[#4B0082] text-white bg-[#4B0082] hover:bg-[#4B0082]/90 transition duration-150">
            Inquire Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
