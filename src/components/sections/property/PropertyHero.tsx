// PropertyHero.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PropertyHero() {
  return (
    <section className="relative w-full bg-[#4B0082] text-white py-28 md:py-46 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />

      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Explore Our Properties
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
        >
          We have verified lands, beautiful homes, and fully serviced shortlets
          ready for you. Whatever your needs, our goal is to make finding the
          right property simple and stress-free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-white text-[#4B0082] px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            View Available Properties
          </Button>
        </motion.div>
      </div>

      {/* Optional decorative circles */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
