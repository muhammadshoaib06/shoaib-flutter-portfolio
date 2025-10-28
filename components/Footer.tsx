import React from 'react';
import type { PersonalInfo } from '../types';
import { Github, Linkedin, Instagram } from './Icons';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const { socials } = personalInfo;

  return (
    <footer className="bg-gray-100 dark:bg-dark-secondary mt-20 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p className="mb-2">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-text-dark dark:hover:text-white transition-colors">{personalInfo.email}</a>
          <span className="mx-2">|</span>
          <span>{personalInfo.phone}</span>
        </p>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
