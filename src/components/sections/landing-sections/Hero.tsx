import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, Map, Users } from "lucide-react";
import { stats, services } from "@/data";
import { Link } from "react-router-dom";
import PurpleButton from "@/components/ui/purple-button";
import type { JSX } from "react";

const icons: Record<string, JSX.Element> = {
  Home: <Home className="h-6 w-6 md:h-8 md:w-8 text-[#4B0082]" />,
  Map: <Map className="h-6 w-6 md:h-8 md:w-8 text-[#4B0082]" />,
  Key: <Key className="h-6 w-6 md:h-8 md:w-8 text-[#4B0082]" />,
  Users: <Users className="h-6 w-6 md:h-8 md:w-8 text-[#4B0082]" />,
};

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F5F5F5] md:pt-35 pt-24 px-6 md:px-12 md:pb-24 pb-12">
      <div className="absolute inset-0 -z-10 bg-[url('/images/pattern.svg')] opacity-5" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Own, Invest, and Thrive with{" "}
            <span className="text-[#4B0082]">NGlobal Properties</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            We help you buy, sell, and invest in properties globally, with
            expert guidance, personalized solutions, and guaranteed peace of
            mind. Affordable luxury, stress-free transactions, and lasting
            value—every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/contact-us">
              <PurpleButton action="Book a Free Consultation" />
            </Link>
            <Link to="/our-properties">
              <Button
                variant="outline"
                className="cursor-pointer rounded-2xl px-12 py-6 text-lg border-gray-300 text-[#4B0082] hover:scale-105 transition-transform"
              >
                Explore Properties
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="md:text-3xl text-2xl font-bold text-[#4B0082]">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white border border-gray-100">
                <CardContent className="md:p-4 flex flex-col items-start space-y-3 text-left">
                  <div className="md:p-3 p-2 rounded-full bg-[#4B0082]/10">
                    {icons[service.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-snug">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
