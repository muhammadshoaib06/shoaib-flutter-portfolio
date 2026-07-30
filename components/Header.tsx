import React from 'react';
import type { PersonalInfo } from '../types';
import { Mail, MapPin, Download, Github, Linkedin, WhatsApp } from './Icons';
import TypeWriter from './TypeWriter';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const whatsappHref = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}`;
};

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const { t, locale } = useLanguage();

  return (
    <header id="top" className="pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 sm:gap-12 lg:gap-10 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-start">
          <p className="animate-hero animate-hero-delay-1 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[var(--accent)] mb-3 sm:mb-4">
            {t.header.available}
          </p>
          <h1
            key={locale}
            className="animate-hero animate-hero-delay-2 font-name text-[2rem] leading-tight sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight sm:leading-[1.1] text-[var(--text)] min-h-[1.2em]"
          >
            <TypeWriter text={personalInfo.name} startDelayMs={400} speedMs={85} />
          </h1>
          <h2 className="animate-hero animate-hero-delay-3 mt-3 sm:mt-4 font-display text-lg sm:text-2xl font-semibold brand-gradient">
            {t.header.title}
          </h2>
          <p className="animate-hero animate-hero-delay-3 mt-4 sm:mt-5 mx-auto lg:mx-0 max-w-xl text-sm sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {t.header.tagline}
          </p>

          <div className="animate-hero animate-hero-delay-4 mt-5 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center lg:items-start justify-center lg:justify-start gap-x-5 gap-y-2.5 text-sm text-[var(--text-muted)]">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors break-all">
              <Mail className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
              {personalInfo.email}
            </a>
            <a
              href={whatsappHref(personalInfo.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#25D366] transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <WhatsApp className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              {personalInfo.phone}
            </a>
            <span className="inline-flex items-center gap-2 text-center sm:text-start">
              <MapPin className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
              {t.header.location}
            </span>
          </div>

          <div className="animate-hero animate-hero-delay-4 mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              {t.header.downloadCv}
            </a>
            <a href="#projects" className="btn-ghost w-full sm:w-auto">
              {t.header.viewProjects}
            </a>
            <div className="flex items-center justify-center gap-2 sm:ms-1">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-[var(--line)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-[var(--line)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 animate-hero animate-hero-delay-3 relative flex justify-center lg:justify-end">
          <div className="absolute top-6 sm:top-8 w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-[var(--hero-glow-1)] blur-3xl pulse-soft" />
          <div className="relative float-y profile-frame">
            <div className="avatar-ring avatar-ring-lg">
              <div className="avatar-glow" />
              <img
                src={personalInfo.imageUrl}
                alt={personalInfo.name}
                className="profile-photo w-44 h-44 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full object-cover"
              />
            </div>
            <span className="avatar-dot avatar-dot-1" />
            <span className="avatar-dot avatar-dot-2" />
            <span className="avatar-dot avatar-dot-3" />
            <div className="profile-badge absolute -bottom-1 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-3 sm:px-5 py-2 sm:py-2.5 rounded-full panel text-[0.65rem] sm:text-sm font-bold tracking-wide text-[var(--accent)] shadow-lg">
              {t.header.badge}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
