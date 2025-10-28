import React from 'react';
import type { SkillCategory } from '../types';
import Section from './Section';
import { CheckCircle } from './Icons';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Strengths & Expertise" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <div key={index} className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
            <h3 className="text-xl font-bold text-accent mb-4">{category.category}</h3>
            <ul className="space-y-3">
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
