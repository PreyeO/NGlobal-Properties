import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, Map, Users } from "lucide-react";

const services = [
  {
    title: "Luxury Homes",
    description:
      "Handpicked modern and classic homes offering comfort, style, and lasting value.",
    icon: <Home className="h-8 w-8 text-[#4B0082]" />,
  },
  {
    title: "Affordable Lands",
    description:
      "Secure prime land locations with flexible payment options tailored to you.",
    icon: <Map className="h-8 w-8 text-[#4B0082]" />,
  },
  {
    title: "Shortlets & Airbnb",
    description:
      "Fully managed short-term rentals for hassle-free hosting and guaranteed returns.",
    icon: <Key className="h-8 w-8 text-[#4B0082]" />,
  },
  {
    title: "Consultation & Advisory",
    description:
      "Expert guidance to make confident and profitable real estate decisions.",
    icon: <Users className="h-8 w-8 text-[#4B0082]" />,
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
    <section className="relative w-full bg-white py-32 px-6 md:px-12 text-gray-900">
      <div className="absolute inset-0 -z-10 bg-[url('/images/pattern.svg')] opacity-5" />

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
            <span className="text-[#4B0082]">NGlobal Properties</span>
          </h1>
          <p className="text-lg text-gray-600">
            Luxury, comfort, and personalized guidance—globally. Let us make
            property buying, selling, and investing effortless for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-2xl px-6 py-5 text-lg bg-[#4B0082] text-white hover:scale-105 transition-transform">
              Book a Free Consultation
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-6 py-5 text-lg border-[#4B0082] bg-transparent hover:bg-[#4B0082] hover:text-white transition-transform"
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
                <p className="text-3xl font-bold text-[#4B0082]">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
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
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-gray-50 border border-gray-200">
                <CardContent className="p-4 flex flex-col items-start space-y-3">
                  <div className="p-3 rounded-full bg-[#4B0082]/10">
                    {service.icon}
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
