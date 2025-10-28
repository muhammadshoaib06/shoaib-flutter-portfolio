import React from 'react';
import type { Education, Language } from '../types';
import Section from './Section';

interface EducationLanguagesProps {
  education: Education[];
  languages: Language[];
}

const EducationLanguages: React.FC<EducationLanguagesProps> = ({ education, languages }) => {
  return (
    <Section title="Education & Languages" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-text-dark dark:text-white mb-4">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-accent">{edu.degree}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.university}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{edu.year}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text-dark dark:text-white mb-4">Languages</h3>
          <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg space-y-3">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-baseline">
                <p className="text-lg text-gray-700 dark:text-gray-300">{lang.name}</p>
                <p className="text-md font-semibold text-accent">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationLanguages;
