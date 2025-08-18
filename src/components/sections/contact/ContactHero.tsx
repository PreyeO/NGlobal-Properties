// ContactHero.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#4B0082] text-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
        >
          Whether you’re buying land, finding a new home, or setting up a
          shortlet, our team is here to listen, guide, and make the process
          simple for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-white text-[#4B0082] px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            Talk to Us Today!
          </Button>
        </motion.div>
      </div>

      {/* Optional decorative circles */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
