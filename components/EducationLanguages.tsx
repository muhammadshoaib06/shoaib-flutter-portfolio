import React, { useEffect, useState } from 'react';
import type { Education } from '../types';
import Section from './Section';
import { ImageIcon } from './Icons';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolioData';

const EducationLanguages: React.FC = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const education: Education = portfolioData.education[0];
  const [showDegree, setShowDegree] = useState(false);

  useEffect(() => {
    if (!showDegree) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowDegree(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showDegree]);

  return (
    <>
      <Section title={t.education.title} id="education">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-6`}>
          <div className="panel p-6 sm:p-7">
            <h3 className="font-display text-xl font-bold text-[var(--text)] mb-5">{t.education.education}</h3>
            <div>
              <div className="education-degree-row">
                <p className="font-display text-lg font-semibold brand-gradient">{t.education.degree}</p>
                {education.imageUrl && (
                  <button
                    type="button"
                    className="education-degree-btn"
                    onClick={() => setShowDegree(true)}
                    aria-label={`View ${t.education.degree} certificate`}
                    title={`View ${t.education.degree} certificate`}
                  >
                    <ImageIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
              <p className="mt-2 text-[var(--text-muted)]">{t.education.university}</p>
              {education.year && (
                <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{education.year}</p>
              )}
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

      {showDegree && education.imageUrl && (
        <div
          className="degree-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.education.degree} certificate`}
          onClick={() => setShowDegree(false)}
        >
          <div className="degree-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="degree-modal-close"
              onClick={() => setShowDegree(false)}
              aria-label="Close certificate view"
            >
              ×
            </button>
            <div className="degree-modal-body">
              <div className="degree-modal-rotate-wrap">
                <img
                  src={education.imageUrl}
                  alt={`${t.education.degree} — ${t.education.university}`}
                  className="degree-modal-image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EducationLanguages;
