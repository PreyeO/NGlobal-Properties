// CoreValues.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Star, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold honesty and strong moral principles in every interaction and decision.",
    icon: <Shield className="h-8 w-8 text-[#4B0082]" />,
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest quality in our services, ensuring client satisfaction and long-term value.",
    icon: <Star className="h-8 w-8 text-[#4B0082]" />,
  },
  {
    title: "Innovation",
    description:
      "Continuously seeking new solutions, technologies, and approaches to improve the real estate experience.",
    icon: <CloudLightning className="h-8 w-8 text-[#4B0082]" />,
  },
  {
    title: "Customer Focus",
    description:
      "Putting our clients at the heart of everything we do, delivering tailored solutions for their needs.",
    icon: <Heart className="h-8 w-8 text-[#4B0082]" />,
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Core Values
        </h2>
        <p className="text-gray-600 mt-2">
          The principles that guide our actions and define who we are at North
          Global Property.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white border border-gray-100">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-[#4B0082]/10">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
