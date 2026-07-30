import React from 'react';
import Section from './Section';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';

const ExperienceCard: React.FC<{
  role: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}> = ({ role, company, period, description, index }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} relative`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="experience-dot absolute -start-[29px] sm:-start-[41px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[image:var(--gradient-brand)] ring-4 ring-[var(--bg)]" />
      <div className="panel p-4 sm:p-7 transition-transform duration-300 hover:-translate-y-1">
        <p className="text-xs sm:text-sm font-bold tracking-wide text-[var(--accent)] mb-2">{period}</p>
        <h3 className="font-display text-lg sm:text-2xl font-bold text-[var(--text)] leading-snug">{role}</h3>
        <p className="mt-1 text-sm sm:text-base font-medium text-[var(--text-muted)] mb-3 sm:mb-4">{company}</p>
        <ul className="space-y-2 sm:space-y-2.5">
          {description.map((point) => (
            <li key={point} className="flex gap-2.5 sm:gap-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.experience.title} id="experience" subtitle={t.experience.subtitle}>
      <div className="relative border-s-2 border-[var(--line)] ps-5 sm:ps-8 space-y-6 sm:space-y-8">
        <div className="absolute start-0 top-0 bottom-0 w-0.5 timeline-line opacity-70" />
        {t.experience.jobs.map((job, index) => (
          <ExperienceCard
            key={`${job.company}-${job.period}`}
            role={job.role}
            company={job.company}
            period={job.period}
            description={job.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
