import React from 'react';
import Section from './Section';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';

const EducationLanguages: React.FC = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Section title={t.education.title} id="education">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-6`}>
        <div className="panel p-6 sm:p-7">
          <h3 className="font-display text-xl font-bold text-[var(--text)] mb-5">{t.education.education}</h3>
          <div>
            <p className="font-display text-lg font-semibold brand-gradient">{t.education.degree}</p>
            <p className="mt-2 text-[var(--text-muted)]">{t.education.university}</p>
          </div>
        </div>
        <div className="panel p-6 sm:p-7">
          <h3 className="font-display text-xl font-bold text-[var(--text)] mb-5">{t.education.languages}</h3>
          <div className="space-y-4">
            {t.education.spoken.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between gap-4">
                <p className="text-lg text-[var(--text)] font-medium">{lang.name}</p>
                <span className="skill-chip">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationLanguages;
