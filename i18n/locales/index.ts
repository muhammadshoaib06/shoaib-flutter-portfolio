import type { Locale, Translations } from '../types';
import { en } from './en';
import { ar } from './ar';
import { fr } from './fr';
import { es } from './es';
import { de } from './de';
import { pt } from './pt';
import { zh } from './zh';
import { ur } from './ur';

export const translations: Record<Locale, Translations> = {
  en,
  ar,
  fr,
  es,
  de,
  pt,
  zh,
  ur,
};

export type { Locale, Translations };
