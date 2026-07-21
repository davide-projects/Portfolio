export type Language = 'it' | 'en';

export type TranslationKey =
  | 'nav.home'
  | 'nav.projects'
  | 'nav.contacts'
  | 'hero.role'
  | 'skills.title'
  | 'skills.frontend'
  | 'skills.backend'
  | 'skills.frameworks'
  | 'footer.copyright';

export type TranslationDict = Record<TranslationKey, string>;

export { it } from './it';
export { en } from './en';
