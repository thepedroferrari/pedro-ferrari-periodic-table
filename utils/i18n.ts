import { Categories } from '../types/categories.ts';
import { Levels } from '../constants/levels.ts';

interface Language {
  categories: Record<Categories, string>;
  levels: Record<Levels, string>;
}

interface I18n {
  en: Language;
  // pt: Language;
  // sv: Language;
}

export const i18n: I18n = {
  en: {
    categories: {
      [Categories.BUILD]: 'Build Tools',
      [Categories.CLOUD]: 'Cloud',
      [Categories.DATABASES]: 'Databases',
      [Categories.FRAMEWORK]: 'Framework',
      [Categories.INTERESTS]: 'Interests',
      [Categories.LIBRARY]: 'Libraries',
      [Categories.OTHER]: 'Others',
      [Categories.PROGRAMMING_LANGUAGE]: 'Languages',
      [Categories.SAAS_PAAS]: 'SAAS / PAAS',
      [Categories.SERVER]: 'Servers',
      [Categories.WANT_TO_LEARN]: 'I want to learn',
    },
    levels: {
      0: 'Wants to learn more',
      1: 'Used it on something small',
      2: 'Used a few times',
      3: 'Have worked or built something with it',
      4: 'Works or built multiple things with it',
      5: 'Works with it most days, built enterprise applications with it',
      6: 'Teaches it.',
    },
  },
};

export const getUserLanguage = (): keyof I18n => 'en';
