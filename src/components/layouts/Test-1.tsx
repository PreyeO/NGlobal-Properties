import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/services" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-auto bg-[#0B1D3A]/90 backdrop-blur-md shadow-lg rounded-full z-50 px-8 py-4">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="text-xl font-bold text-[#B8860B]">
          NGlobal Properties
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-200 font-medium hover:text-[#B8860B] transition"
            >
              {link.name}
            </Link>
          ))}
          <Button className="ml-4 rounded-2xl px-6 py-2 text-base bg-[#B8860B] text-[#0B1D3A] hover:bg-[#D1A440] hover:text-[#0B1D3A] transition">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
