// Footer.tsx
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Logo from "../ui/logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl flex flex-wrap xl:justify-between gap-12">
        <div className="space-y-4">
          <Logo className="text-white" />
          <p className="text-gray-400 md:text-base text-sm w-[300px]">
            Connecting you to premium properties globally. Luxury homes,
            investment lands, and expert guidance all in one place.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about-us" className="hover:text-[#4B0082]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-[#4B0082]">
                Properties
              </Link>
            </li>
            <li>
              <Link to="#testimonials" className="hover:text-[#4B0082]">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="#faq" className="hover:text-[#4B0082]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="flex items-center gap-2 text-gray-400">
            <Mail className="w-4 h-4" /> info@nglobalproperties.com
          </p>
          <p className="text-gray-400 mt-2">+234 123 456 789</p>
          <p className="text-gray-400 mt-2">Lagos, Nigeria</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Social Media</h4>
          <p className="text-gray-400 mb-4 w-[300px]">
            Get the latest properties and updates in our socials.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#4B0082]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#4B0082]">
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/nglobalproperties?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="hover:text-[#4B0082]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#4B0082]">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NGlobal Properties. All rights
        reserved.
      </div>
    </footer>
  );
}
