import * as React from "react";
import { testimonials } from "@/data";
import Marquee from "react-fast-marquee";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "@/components/ui/testimony-card";
import CarouselDots from "@/components/ui/carousel-dot";

export default function Testimonials() {
  return (
    <section className="md:py-24 py-12 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Client Testimonials
        </h2>
        <p className="text-gray-600 mt-2">
          See what our clients say about working with NGlobal Properties.
        </p>
      </div>

      {/* Mobile View - Carousel with dots */}
      <div className="block md:hidden max-w-xs mx-auto">
        <CarouselWithDots>
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-0 shrink-0 grow-0 basis-full px-2">
              <TestimonialCard {...t} />
            </div>
          ))}
        </CarouselWithDots>
      </div>

      {/* Desktop View - Marquee */}
      <div className="hidden md:block">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              {...t}
              className="mx-4 w-80 flex-shrink-0"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

/* -------------------
   Carousel with Dots
------------------- */
function CarouselWithDots({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // initialize

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {/* dots */}
      <CarouselDots
        count={scrollSnaps.length}
        selectedIndex={selectedIndex}
        onDotClick={(i) => emblaApi?.scrollTo(i)}
      />
    </div>
  );
}
