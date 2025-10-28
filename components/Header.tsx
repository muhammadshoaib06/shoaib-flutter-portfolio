import React from 'react';
import type { PersonalInfo } from '../types';
import { Mail, Phone, MapPin, Download } from './Icons';
// ThemeToggle is now handled globally in App.tsx

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="flex flex-col md:flex-row items-start justify-between gap-10 animate-fade-in-up mt-12 md:mt-0">
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <img
          src={personalInfo.imageUrl}
          alt={personalInfo.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-accent shadow-lg flex-shrink-0"
        />
        <div>
          <h1 className="text-4xl sm:text-5xl font-black text-text-dark dark:text-white tracking-tight">{personalInfo.name}</h1>
          <h2 className="text-2xl font-semibold text-accent mt-1">{personalInfo.title}</h2>
          <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-text-dark dark:hover:text-white transition-colors">{personalInfo.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full md:w-auto">
        <a
          href={personalInfo.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full justify-center md:w-auto flex-shrink-0 bg-accent hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
