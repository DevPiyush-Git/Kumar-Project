import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useTranslation } from '../hooks/useTranslation';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1e4620] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#f6ddab] mb-4">
              {t('footer.title')}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#f6ddab] mb-4">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#f6ddab] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+965 66283347</p>
                  <p className="text-gray-300">+965 99363278</p>
                  <p className="text-gray-300">+965 24747660</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#f6ddab] mt-1 flex-shrink-0" />
                <p className="text-gray-300">kkumarfashions@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f6ddab] mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Shop No. 10 or 13, Block 3 FARWANIYA
                  <br />
                  Kuwait
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#f6ddab] mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#f6ddab] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#f6ddab] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#f6ddab] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div>
              <h5 className="font-semibold mb-2">{t('footer.businessHours')}</h5>
              <p className="text-gray-300 text-sm">
                {t('footer.hours.weekdays')}
              </p>
              <p className="text-gray-300 text-sm">{t('footer.hours.friday')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
