import React from 'react';
import type { SkillCategory } from '../types';
import Section from './Section';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';
import {
  CodeIcon,
  ActivityIcon,
  DatabaseIcon,
  ServerIcon,
  BotIcon,
  TestTubeIcon,
  ShieldIcon,
  PaletteIcon,
  SmartphoneIcon,
  SparklesIcon,
} from './Icons';

interface SkillsProps {
  skills: SkillCategory[];
}

const categoryIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'Flutter & Dart': CodeIcon,
  'State Management': ActivityIcon,
  'Offline-First & Performance': DatabaseIcon,
  'APIs & Backend': ServerIcon,
  'AI & Developer Tools': BotIcon,
  'Quality & Delivery': TestTubeIcon,
  'Security & Stores': ShieldIcon,
  'UI & Collaboration': PaletteIcon,
  Platforms: SmartphoneIcon,
};

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>(0.12);
  const Icon = categoryIcons[category.category] ?? SparklesIcon;
  const title = t.skills.categories[category.category] ?? category.category;
  const countLabel = t.skills.skillsCount.replace('{n}', String(category.items.length));

  return (
    <article
      ref={ref}
      className={`skill-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <div className="skill-card-glow" aria-hidden="true" />
      <div className="skill-card-inner">
        <span className="skill-card-bg-icon" aria-hidden="true">
          <Icon />
        </span>
        <div className="skill-card-top">
          <span className="skill-card-icon" aria-hidden="true">
            <Icon className="w-5 h-5" />
          </span>
          <span className="skill-card-count">{countLabel}</span>
        </div>

        <h3 className="skill-card-title">{title}</h3>
        <div className="skill-card-divider" aria-hidden="true" />

        <div className="skill-chip-grid">
          {category.items.map((skill, skillIndex) => (
            <span
              key={skill}
              className="skill-chip skill-chip-animated"
              style={{ animationDelay: visible ? `${150 + skillIndex * 45}ms` : '0ms' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { t } = useLanguage();

  return (
    <Section title={t.skills.title} id="skills" subtitle={t.skills.subtitle}>
      <div className="skills-section-wrap">
        <div className="skills-section-bg" aria-hidden="true">
          {skills.map((category, index) => {
            const Icon = categoryIcons[category.category] ?? SparklesIcon;
            return (
              <span
                key={category.category}
                className={`skills-bg-icon skills-bg-icon-${(index % 9) + 1}`}
              >
                <Icon />
              </span>
            );
          })}
        </div>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
