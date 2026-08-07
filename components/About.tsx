import React from 'react';
import Section from './Section';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const highlights = [
    { label: '5+', detail: t.about.years },
    { label: '12+', detail: t.about.apps },
    { label: 'UK · EU · ME', detail: t.about.clients },
  ];

  return (
    <Section title={t.about.title} id="about" subtitle={t.about.subtitle}>
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} space-y-8 sm:space-y-10`}>
        <div className="summary-box max-w-5xl">
          <p className="text-[var(--text)] text-base sm:text-lg leading-relaxed text-justify hyphens-auto">
            {t.about.summary}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-5 max-w-4xl">
          {highlights.map((item) => (
            <div key={item.label} className="panel px-2.5 sm:px-4 py-3.5 sm:py-5 text-center">
              <p className="font-display text-lg sm:text-2xl font-bold brand-gradient">{item.label}</p>
              <p className="mt-1 sm:mt-1.5 text-[0.7rem] sm:text-sm text-[var(--text-muted)] leading-snug">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
