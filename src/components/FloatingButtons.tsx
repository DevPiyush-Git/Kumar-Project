import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from '../hooks/useTranslation';

const FloatingButtons = () => {
  const { t } = useTranslation();
  const phoneNumber = "+96566283347";
  const whatsappNumber = "96566283347";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleWhatsApp = () => {
    const message =
      "Hello! I would like to book an appointment for tailoring services.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {t('floating.whatsapp')}
        </span>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {t('floating.call')}
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
