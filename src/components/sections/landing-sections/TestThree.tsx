// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Home, Key, Map, Users } from "lucide-react";

// const services = [
//   {
//     title: "Luxury Homes",
//     description:
//       "Handpicked modern and classic homes that offer comfort, style, and lasting value.",
//     icon: <Home className="h-8 w-8 text-primary" />,
//   },
//   {
//     title: "Affordable Lands",
//     description:
//       "Secure prime land locations with flexible payment options tailored to you.",
//     icon: <Map className="h-8 w-8 text-primary" />,
//   },
//   {
//     title: "Shortlets & Airbnb",
//     description:
//       "Fully managed short-term rentals for hassle-free hosting and guaranteed returns.",
//     icon: <Key className="h-8 w-8 text-primary" />,
//   },
//   {
//     title: "Consultation & Advisory",
//     description:
//       "Expert guidance to help you make confident and profitable real estate decisions.",
//     icon: <Users className="h-8 w-8 text-primary" />,
//   },
// ];

// const stats = [
//   { label: "Properties Sold", value: "50+" },
//   { label: "Happy Clients", value: "120+" },
//   { label: "Years Experience", value: "5+" },
//   { label: "Cities Covered", value: "8+" },
// ];

// export default function Hero() {
//   return (
//     <section className="relative w-full bg-gradient-to-br from-gray-50 to-white py-30 px-6 md:px-12">
//       <div className="absolute inset-0 -z-10 bg-[url('/images/pattern.svg')] opacity-5" />

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-6"
//         >
//           <h1 className="text-4xl md:text-5xl  font-extrabold leading-tight text-gray-900">
//             Find Your Dream Property with{" "}
//             <span className="text-primary">NGlobal Properties</span>
//           </h1>
//           <p className="text-lg text-gray-600">
//             We help you buy and sell prime lands and properties with ease.
//             Personalized advice, trusted recommendations, and stress-free
//             transactions are guaranteed.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Button className="rounded-2xl px-6 py-5 text-lg">
//               Book a Consultation
//             </Button>
//             <Button
//               variant="outline"
//               className="rounded-2xl px-6 py-5 text-lg border-gray-300"
//             >
//               Explore Properties
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {stats.map((stat, i) => (
//               <div key={i} className="text-center">
//                 <p className="text-3xl font-bold text-primary">{stat.value}</p>
//                 <p className="text-sm text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right Content - Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white border border-gray-100">
//                 <CardContent className="p-4 flex flex-col items-start space-y-3">
//                   <div className="p-3 rounded-full bg-primary/10">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-snug">
//                     {service.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About Us", href: "/about" },
//   { name: "Properties", href: "/services" },
// ];

// const NavBar: React.FC = () => {
//   return (
//     <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-auto bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-full z-50 px-8 py-4">
//       <div className="flex items-center gap-12">
//         {/* Logo */}
//         <div className="text-xl font-bold text-primary">NGlobal Properties</div>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className="text-gray-700 font-medium hover:text-primary transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Button className="ml-4 rounded-2xl px-6 py-2 text-base">
//             Contact Us
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
