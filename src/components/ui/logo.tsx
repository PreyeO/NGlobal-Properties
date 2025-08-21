import type React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      {/* Icon Circle */}
      <div className="flex items-center justify-center w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#4B0082] text-white font-bold text-sm md:text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
        N
      </div>

      {/* Text */}
      <span
        className={`${className} text-lg md:text-2xl font-extrabold text-[#4B0082] tracking-tight group-hover:text-[#360060] transition-colors duration-200`}
      >
        Global
      </span>
    </Link>
  );
};

export default Logo;
