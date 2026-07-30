import React from 'react';
import type { PersonalInfo } from '../types';
import { Github, Linkedin, Instagram } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const { t } = useLanguage();
  const { socials } = personalInfo;

  return (
    <footer className="mt-20 border-t border-[var(--line)] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-muted)]">
        <div className="flex justify-center gap-5 mb-5">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[var(--line)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[var(--line)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[var(--line)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <p className="mb-2 text-sm">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[var(--accent)] transition-colors">
            {personalInfo.email}
          </a>
          <span className="mx-2 opacity-40">·</span>
          <span>{personalInfo.phone}</span>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
