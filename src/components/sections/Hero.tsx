import { motion } from "framer-motion";
import PurpleButton from "@/components/ui/purple-button";
import { useNavigate } from "react-router-dom";

type HeroProps = {
  title: string;
  description: string;
  cta?: string;
  ctaLink?: string; // can be "#section-id" or route
  centerWidth?: string;
};

export default function Hero({
  title,
  description,
  cta,
  ctaLink,
  centerWidth = "max-w-5xl",
}: HeroProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (!ctaLink) return;

    if (ctaLink.startsWith("#")) {
      // smooth scroll within the same page
      e.preventDefault();
      const el = document.querySelector(ctaLink);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // navigate to a route
      navigate(ctaLink);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#4B0082] text-white px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />

      <div className={`${centerWidth} mx-auto text-center space-y-8`}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {cta && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PurpleButton
              className="bg-white text-[#4B0082] hover:bg-white/90"
              action={cta}
              onClick={handleClick}
            />
          </motion.div>
        )}
      </div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
