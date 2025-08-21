import type React from "react";
import LOGO from "../../../public/images/4.png";
//  bg-[#4B0082]/10
const LogoWatermark: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <div className="relative flex items-center justify-center">
        {/* Glass-like circle */}
        <div
          className="
          absolute inset-0
          rounded-full
      
          bg-black/90
          backdrop-blur-md
        "
        ></div>

        {/* Logo */}
        <img
          src={LOGO}
          alt="watermark logo"
          className="relative md:h-[90px] md:w-[90px] h-[70px] w-[70px] rounded-full"
        />
      </div>
    </div>
  );
};

export default LogoWatermark;
