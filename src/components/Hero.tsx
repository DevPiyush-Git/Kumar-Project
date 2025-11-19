import { Scissors } from "lucide-react";
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface HeroProps {
  onBookingClick: () => void;
}

function Hero({ onBookingClick }: HeroProps) {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Background_home.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} z-20 flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-3 py-2 rounded-lg sm:px-6 sm:py-4 sm:gap-3`}>
        <Scissors className="w-6 h-6 sm:w-10 sm:h-10 text-[#f6ddab]" strokeWidth={1.5} />
        <div>
          <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wide">
            Kumar & Co.
          </h1>
          <p className="text-xs sm:text-sm text-[#f6ddab]">Since 1999</p>
        </div>
      </div>

      <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-20`}>
        <LanguageToggle />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-wide px-2">
          {t('hero.subtitle')}
        </h2>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#f6ddab] mb-8 max-w-2xl px-4">
          {t('hero.description')}
        </p>
        <button
          onClick={onBookingClick}
          className="bg-gradient-to-r from-[#2d5f2e] to-[#1e4620] hover:from-[#3a7a3c] hover:to-[#2d5f2e] text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl border border-[#f6ddab]"
        >
          {t('hero.bookAppointment')}
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
