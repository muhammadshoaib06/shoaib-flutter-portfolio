import React from 'react';
import {
  UserIcon,
  SparklesIcon,
  BriefcaseIcon,
  LayersIcon,
  GraduationCapIcon,
  MessageIcon,
} from './Icons';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
  subtitle?: string;
}

const sectionIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  about: UserIcon,
  skills: SparklesIcon,
  experience: BriefcaseIcon,
  projects: LayersIcon,
  education: GraduationCapIcon,
  contact: MessageIcon,
};

const Section: React.FC<SectionProps> = ({ title, children, id, subtitle }) => {
  const Icon = sectionIcons[id] ?? SparklesIcon;

  return (
    <section id={id} className="scroll-mt-24 sm:scroll-mt-28">
      <div className="mb-8 sm:mb-10 max-w-2xl">
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mb-1">
          <span className="section-icon" aria-hidden="true">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
            {title}
          </h2>
        </div>
        <div className="mt-3 ms-10 sm:ms-12 h-1 w-14 sm:w-16 rounded-full bg-[image:var(--gradient-brand)]" />
        {subtitle && (
          <p className="mt-3 sm:mt-4 ms-0 sm:ms-12 text-[var(--text-muted)] text-sm sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
