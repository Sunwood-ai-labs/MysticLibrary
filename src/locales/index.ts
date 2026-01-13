import { jaJP } from './ja-JP';
import { enUS } from './en-US';
import { Language } from '../types/i18n';

export const translations = {
  ja: jaJP,
  en: enUS,
};

export const getTranslation = (language: Language) => {
  return translations[language];
};
