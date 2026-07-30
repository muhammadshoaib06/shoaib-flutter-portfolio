export type Locale = 'en' | 'ar' | 'fr' | 'es' | 'de' | 'pt' | 'zh' | 'ur';

export interface LocaleMeta {
  code: Locale;
  label: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
}

export const locales: LocaleMeta[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', dir: 'ltr' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', dir: 'ltr' },
  { code: 'pt', label: 'Portuguese', nativeLabel: 'Português', dir: 'ltr' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文', dir: 'ltr' },
  { code: 'ur', label: 'Urdu', nativeLabel: 'اردو', dir: 'rtl' },
];

export interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  header: {
    available: string;
    title: string;
    tagline: string;
    downloadCv: string;
    viewProjects: string;
    location: string;
    badge: string;
  };
  about: {
    title: string;
    subtitle: string;
    summary: string;
    years: string;
    apps: string;
    clients: string;
  };
  skills: {
    title: string;
    subtitle: string;
    skillsCount: string;
    categories: Record<string, string>;
  };
  experience: {
    title: string;
    subtitle: string;
    jobs: Array<{
      role: string;
      company: string;
      period: string;
      description: string[];
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    all: string;
    showMore: string;
    showLess: string;
    playStore: string;
    appStore: string;
    clientInternal: string;
    locallyDistributed: string;
    availableStores: string;
    companies: Record<string, string>;
    descriptions: Record<string, string>;
  };
  education: {
    title: string;
    education: string;
    languages: string;
    degree: string;
    university: string;
    spoken: Array<{ name: string; proficiency: string }>;
  };
  contact: {
    title: string;
    heading: string;
    body: string;
    emailMe: string;
    whatsapp: string;
    downloadCv: string;
  };
  footer: {
    rights: string;
  };
  language: string;
}
