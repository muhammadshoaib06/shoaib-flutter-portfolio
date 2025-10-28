import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
      <h2 className="text-3xl font-black text-text-dark dark:text-white mb-8 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
