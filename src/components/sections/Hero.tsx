import { motion } from "framer-motion";
import PurpleButton from "@/components/ui/purple-button";
import { useNavigate } from "react-router-dom";

type HeroProps = {
  title: string;
  description: string;
  cta?: string;
  ctaLink?: string;
  centerWidth?: string;
  badges?: { label: string; icon?: React.ReactNode }[];
};

export default function Hero({
  title,
  description,
  cta,
  ctaLink,
  centerWidth = "max-w-5xl",
  badges = [],
}: HeroProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (!ctaLink) return;

    if (ctaLink.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(ctaLink);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(ctaLink);
    }
  };

  return (
    <section className="relative w-full md:min-h-screen py-24 md:py-0 flex items-center bg-[#4B0082] text-white px-6 md:px-12 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />

      <div className={`${centerWidth} mx-auto text-center space-y-8`}>
        {/* Badges on top */}
        {badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-wrap justify-center gap-3 mb-4 hidden md:flex"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-purple-100/90 text-purple-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm border border-purple-200"
              >
                {badge.icon && (
                  <span className="text-purple-500">{badge.icon}</span>
                )}
                {badge.label}
              </div>
            ))}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <PurpleButton
              className="bg-white text-[#4B0082] hover:bg-white/90"
              action={cta}
              onClick={handleClick}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
