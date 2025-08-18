interface CarouselDotsProps {
  count: number;
  selectedIndex: number;
  onDotClick: (index: number) => void;
}

export default function CarouselDots({
  count,
  selectedIndex,
  onDotClick,
}: CarouselDotsProps) {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`h-2 w-2 rounded-full transition-colors ${
            index === selectedIndex ? "bg-[#4B0082]" : "bg-gray-300"
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
