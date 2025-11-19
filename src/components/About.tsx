import { Award, Heart, Users } from "lucide-react";
import { useTranslation } from '../hooks/useTranslation';

function About() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f6ddab]/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e4620] mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d5f2e] to-[#f6ddab] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/legacy.jpeg"
              alt="Traditional Arabic tailoring"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1e4620] mb-4">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Award className="w-16 h-16 text-[#2d5f2e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1e4620] mb-2">
              26+
            </h3>
            <p className="text-gray-600">{t('about.stats.experience')}</p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Users className="w-16 h-16 text-[#2d5f2e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1e4620] mb-2">100000+</h3>
            <p className="text-gray-600">{t('about.stats.customers')}</p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Heart className="w-16 h-16 text-[#2d5f2e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1e4620] mb-2">100%</h3>
            <p className="text-gray-600">{t('about.stats.garments')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
