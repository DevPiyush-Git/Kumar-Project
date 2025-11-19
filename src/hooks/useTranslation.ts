import { useLanguage } from '../contexts/LanguageContext';
import arTranslations from '../translations/ar.json';
import enTranslations from '../translations/en.json';

const translations = {
  ar: arTranslations,
  en: enTranslations
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t };
};