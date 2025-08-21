import CTA from "@/components/ui/CTA";
import StatsGrid from "@/components/ui/stats-grid";
import { stats } from "@/data";

export default function Stats() {
  return (
    <section className="md:py-24 py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Achievements
        </h2>
        <p className="text-gray-600 mt-2">
          Milestones and impact we have created in the real estate market.
        </p>
      </div>

      <StatsGrid
        stats={stats}
        className="gap-8 max-w-7xl mx-auto"
        valueClassName="text-4xl md:text-5xl"
        labelClassName="text-gray-700 mt-2"
      />

      <div className="md:py-24 py-12">
        <CTA
          bgColor="bg-[#4B0082]"
          textColor="text-white"
          subTextColor="text-gray-200"
          className="hover:bg-white/90  bg-white text-[#4B0082]"
        />
      </div>
    </section>
  );
}
