import React from 'react';
import Section from './Section';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <Section title="Professional Summary" id="about">
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
        {summary}
      </p>
    </Section>
  );
};

export default About;
