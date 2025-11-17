import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/carousel1.jpeg",
      title: "Classic White Dishdasha",
      description: "Timeless elegance for everyday wear",
    },
    {
      image: "/carousel2.jpeg",
      title: "Premium Beige Thobe",
      description: "Sophisticated style for special occasions",
    },
    {
      image: "/carousel3.jpeg",
      title: "Formal Grey Kandura",
      description: "Modern cut with traditional values",
    },
    {
      image: "/carousel4.jpeg",
      title: "Summer Collection",
      description: "Lightweight fabrics for comfort",
    },
    {
      image: "/carousel5.jpeg",
      title: "Wedding Special",
      description: "Luxurious designs for your big day",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f6ddab]/10 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e4620] mb-4">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d5f2e] to-[#f6ddab] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our exquisite range of traditional Arabic menswear
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="relative h-[500px] md:h-[600px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-lg md:text-xl text-[#f6ddab]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e4620] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e4620] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#2d5f2e] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
