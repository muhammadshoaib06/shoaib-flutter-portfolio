import React from 'react';
import type { ExperienceItem } from '../types';
import Section from './Section';

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Section title="Professional Experience" id="experience">
      <div className="relative border-l-2 border-accent/30 pl-8 space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-light dark:border-dark"></div>
            <p className="text-sm font-semibold text-accent/80 mb-1">{job.period}</p>
            <h3 className="text-2xl font-bold text-text-dark dark:text-white">{job.role}</h3>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-4">{job.company}</p>
            <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              {job.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
