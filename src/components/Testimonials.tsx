import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.clients.ahmed.name'),
      role: t('testimonials.clients.ahmed.role'),
      video: "https://images.pexels.com/videos/5377700/free-video-5377700.mp4",
      quote: t('testimonials.clients.ahmed.quote'),
      image: "https://images.pexels.com/photos/8090168/pexels-photo-8090168.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: t('testimonials.clients.mohammed.name'),
      role: t('testimonials.clients.mohammed.role'),
      video: "https://images.pexels.com/videos/5377700/free-video-5377700.mp4",
      quote: t('testimonials.clients.mohammed.quote'),
      image: "https://images.pexels.com/photos/8090171/pexels-photo-8090171.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: t('testimonials.clients.khalid.name'),
      role: t('testimonials.clients.khalid.role'),
      video: "https://images.pexels.com/videos/5377700/free-video-5377700.mp4",
      quote: t('testimonials.clients.khalid.quote'),
      image: "https://images.pexels.com/photos/8090169/pexels-photo-8090169.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f6ddab]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e4620] mb-4">{t('testimonials.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d5f2e] to-[#f6ddab] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${isRTL ? currentTestimonial * 100 : -currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-80 md:h-auto">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={testimonial.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <Quote className="w-12 h-12 text-[#f6ddab] mb-4" />
                        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                          "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-[#f6ddab]"
                          />
                          <div>
                            <h4 className="text-xl font-bold text-[#1e4620]">{testimonial.name}</h4>
                            <p className="text-[#2d5f2e]">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 bg-white hover:bg-[#f6ddab] text-[#1e4620] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10`}
            aria-label="Previous testimonial"
          >
            {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 bg-white hover:bg-[#f6ddab] text-[#1e4620] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10`}
            aria-label="Next testimonial"
          >
            {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-[#2d5f2e] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
