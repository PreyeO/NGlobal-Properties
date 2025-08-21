import type React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../../public/images/2.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img src={LOGO} alt="logo" className={`${className} `} />
    </Link>
  );
};

export default Logo;
