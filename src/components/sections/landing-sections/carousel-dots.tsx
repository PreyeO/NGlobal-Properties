import { Carousel, CarouselContent } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

export function CarouselWithDots({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect(); // initialize

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <Carousel>
        <CarouselContent ref={emblaRef}>{children}</CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-[#4B0082]" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
