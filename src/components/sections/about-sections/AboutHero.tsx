// AboutHero.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="relative w-full  bg-[#4B0082] text-white py-28 md:py-46 px-6 md:px-12 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug"
        >
          About North Global Property
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
        >
          At North Global Property, we strike the perfect balance in global real
          estate. We guide our clients to discover quality properties, invest
          with confidence, and thrive in every opportunity while ensuring
          exceptional service, trust, and long-term value.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-white text-[#4B0082] px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform font-semibold text-lg">
            Explore Our Journey
          </Button>
        </motion.div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
