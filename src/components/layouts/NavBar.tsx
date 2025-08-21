import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Logo from "../ui/logo";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Properties", href: "/our-properties" },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2 
        flex items-center justify-between  w-full sm:w-auto px-6 
        z-50
        md:rounded-full md:gap-12 md:max-w-7xl md:bg-white/70 md:backdrop-blur-md md:shadow-lg md:py-2
      "
    >
      {/* Logo */}
      <Logo />

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              `font-medium text-base transition ${
                isActive
                  ? "text-[#4B0082] underline underline-offset-4"
                  : "text-gray-700 hover:text-[#4B0082]"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <NavLink to="/contact-us">
          <Button className="cursor-pointer ml-4 rounded-xl px-5 py-2 text-base bg-[#4B0082] text-white hover:bg-[#4B0082]/90 transition">
            Contact
          </Button>
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="p-2 bg-[#4B0082]">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-6 w-64">
            <div className="flex flex-col gap-6 mt-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-medium text-lg ${
                      isActive
                        ? "text-[#4B0082]"
                        : "text-gray-700 hover:text-[#4B0082]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/contact-us" onClick={() => setOpen(false)}>
                <Button className="cursor-pointer mt-4 w-full rounded-xl px-5 py-3 text-base bg-[#4B0082] text-white hover:bg-[#4B0082]/90 transition">
                  Contact
                </Button>
              </NavLink>
            </div>

            <SheetClose asChild>
              <Button className="absolute top-4 right-4 p-1 bg-[#4B0082]">
                <X className="w-6 h-6" />
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
