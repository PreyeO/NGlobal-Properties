// Hero.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, Map, Users } from "lucide-react";

const services = [
  {
    title: "Luxury Homes",
    description:
      "Handpicked modern and classic homes offering comfort, style, and lasting value.",
    icon: <Home className="h-8 w-8 text-yellow-400" />,
  },
  {
    title: "Affordable Lands",
    description:
      "Secure prime land locations with flexible payment options tailored to you.",
    icon: <Map className="h-8 w-8 text-yellow-400" />,
  },
  {
    title: "Shortlets & Airbnb",
    description:
      "Fully managed short-term rentals for hassle-free hosting and guaranteed returns.",
    icon: <Key className="h-8 w-8 text-yellow-400" />,
  },
  {
    title: "Consultation & Advisory",
    description:
      "Expert guidance to make confident and profitable real estate decisions.",
    icon: <Users className="h-8 w-8 text-yellow-400" />,
  },
];

const stats = [
  { label: "Properties Sold", value: "50+" },
  { label: "Happy Clients", value: "120+" },
  { label: "Years Experience", value: "5+" },
  { label: "Cities Covered", value: "8+" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0B1D3A] to-[#1B2A4B] py-32 px-6 md:px-12 text-white">
      <div className="absolute inset-0 -z-10 bg-[url('/images/pattern.svg')] opacity-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Own, Invest, and Thrive with{" "}
            <span className="text-[#B8860B]">NGlobal Properties</span>
          </h1>
          <p className="text-lg text-gray-200">
            Luxury, comfort, and personalized guidance—globally. Let us make
            property buying, selling, and investing effortless for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-2xl px-6 py-5 text-lg bg-yellow-400 text-[#0B1D3A] hover:scale-105 transition-transform">
              Book a Free Consultation
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-6 py-5 text-lg border-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-[#0B1D3A] transition-transform"
            >
              Explore Properties
            </Button>
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
                <p className="text-3xl font-bold text-yellow-400">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-200">{stat.label}</p>
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
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-[#11254F] border border-gray-700 text-white">
                <CardContent className="p-4 flex flex-col items-start space-y-3">
                  <div className="p-3 rounded-full bg-yellow-400/30">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-200 text-sm leading-snug">
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
