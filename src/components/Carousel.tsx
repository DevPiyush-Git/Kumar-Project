import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const slides = [
    {
      image: "/carousel1.png",
      title: t('carousel.slides.classic.title'),
      description: t('carousel.slides.classic.description'),
    },
    {
      image: "/carousel2.png",
      title: t('carousel.slides.premium.title'),
      description: t('carousel.slides.premium.description'),
    },
    {
      image: "/carousel3.png",
      title: t('carousel.slides.formal.title'),
      description: t('carousel.slides.formal.description'),
    },
    {
      image: "/carousel4.png",
      title: t('carousel.slides.summer.title'),
      description: t('carousel.slides.summer.description'),
    },
    {
      image: "/carousel5.png",
      title: t('carousel.slides.wedding.title'),
      description: t('carousel.slides.wedding.description'),
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
            {t('carousel.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d5f2e] to-[#f6ddab] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {t('carousel.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${isRTL ? currentSlide * 100 : -currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="relative h-[500px] md:h-[600px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover bg-gray-100"
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
            className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e4620] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
            aria-label="Previous slide"
          >
            {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          <button
            onClick={nextSlide}
            className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e4620] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
            aria-label="Next slide"
          >
            {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
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
