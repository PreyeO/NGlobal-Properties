// Stats.tsx
import CTA from "@/components/ui/CTA";
import { motion } from "framer-motion";

const stats = [
  { label: "Properties Sold", value: "50+" },
  { label: "Happy Clients", value: "120+" },
  { label: "Years Experience", value: "5+" },
  { label: "Cities Covered", value: "8+" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Achievements
        </h2>
        <p className="text-gray-600 mt-2">
          Milestones and impact we have created in the real estate market.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-[#4B0082]">
              {stat.value}
            </p>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="py-24">
        <CTA className="bg-[#4B0082] text-[#F5F5F5]" />
      </div>
    </section>
  );
}
