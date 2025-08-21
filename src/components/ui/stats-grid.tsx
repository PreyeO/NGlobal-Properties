import { motion } from "framer-motion";
import CountUp from "react-countup";
import clsx from "clsx";

type Stat = {
  label: string;
  value: string;
};

interface StatsGridProps {
  stats: Stat[];
  className?: string; // for container styling
  valueClassName?: string; // for number styling
  labelClassName?: string; // for label styling
}

export default function StatsGrid({
  stats,
  className,
  valueClassName,
  labelClassName,
}: StatsGridProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 sm:grid-cols-4 gap-6 text-center",
        className
      )}
    >
      {stats.map((stat, i) => {
        const numericValue = Number(stat.value.replace("+", ""));

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p
              className={clsx(
                "md:text-3xl text-2xl font-bold text-[#4B0082]",
                valueClassName
              )}
            >
              <CountUp
                end={numericValue}
                duration={2}
                separator=","
                startOnMount={false}
                enableScrollSpy
              />
              +
            </p>
            <p className={clsx("text-sm text-gray-600", labelClassName)}>
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
