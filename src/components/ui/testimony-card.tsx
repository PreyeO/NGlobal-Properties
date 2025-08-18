import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  image?: string;
  name: string;
  role: string;
  message: string;
  className?: string;
}

export default function TestimonialCard({
  image,
  name,
  role,
  message,
  className = "",
}: TestimonialCardProps) {
  return (
    <Card className={`md:p-6 p-3 rounded-xl shadow ${className}`}>
      <div className="flex flex-col items-center text-center">
        <Avatar className="mb-3">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-[#4B0082]">{name[0]}</AvatarFallback>
        </Avatar>
        <p className="text-gray-700 mb-2">{message}</p>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-[#4B0082] text-sm">{role}</p>
      </div>
    </Card>
  );
}
