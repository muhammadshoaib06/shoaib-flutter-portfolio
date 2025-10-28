export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  imageUrl: string;
  cvUrl: string;
  socials: Socials;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  link: string | null;
  imageUrl: string;
}

export interface Education {
  degree: string;
  university: string;
  year: string;
}

export interface Language {
  name: string;
  proficiency: string;
}