import type React from "react";
import { Link } from "react-router-dom";

// Logo.tsx
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#4B0082] rounded-full flex items-center justify-center text-white font-bold md:text-xl">
          N
        </div>
        <span
          className={`${className} md:text-2xl text-xl font-extrabold text-[#4B0082] tracking-tight`}
        >
          NorthGlobal
        </span>
      </div>
    </Link>
  );
};

export default Logo;
