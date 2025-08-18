import type React from "react";
import PurpleButton from "./purple-button";

interface CTAProps {
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ className }) => {
  return (
    <div
      className={`${className} max-w-4xl mx-auto  shadow-2xl text-center rounded-3xl md:p-12 p-6`}
    >
      <h2 className="text-3xl md:text-4xl font-bold  mb-4">
        Looking for a Home or Land?
      </h2>
      <p className="text-gray-700 mb-8 text-lg">
        We have verified properties ready for you. No stress, no delays — just
        peace of mind.
      </p>

      <PurpleButton action="Book a Free Consultation" />
    </div>
  );
};

export default CTA;
