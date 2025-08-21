import type React from "react";
import PurpleButton from "./purple-button";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface CTAProps {
  className?: string;
  bgColor?: string; // e.g. "bg-[#F5F5F5]" or "bg-[#4B0082]"
  textColor?: string; // main text color
  subTextColor?: string; // subtext color
}

const CTA: React.FC<CTAProps> = ({
  className,
  bgColor = "bg-white",
  textColor = "text-gray-900",
  subTextColor = "text-gray-700",
}) => {
  return (
    <div
      className={clsx(
        "max-w-4xl mx-auto shadow-2xl text-center rounded-3xl md:p-12 p-6",
        bgColor,
        textColor
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Looking for a Home or Land?
      </h2>
      <p className={clsx("mb-8 text-lg", subTextColor)}>
        We have verified properties ready for you. No stress, no delays — just
        peace of mind.
      </p>

      <Link to="/contact-us">
        <PurpleButton action="Book a Free Consultation" className={className} />
      </Link>
    </div>
  );
};

export default CTA;
