import React, { useMemo, useState } from 'react';
import type { Project } from '../types';
import Section from './Section';
import { BuildingIcon, PlayStoreIcon, AppStoreIcon, CheckCircle } from './Icons';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectsProps {
  projects: Project[];
}

const PREVIEW_LENGTH = 130;

const ExpandableDescription: React.FC<{ text: string; showMore: string; showLess: string }> = ({
  text,
  showMore,
  showLess,
}) => {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = text.length > PREVIEW_LENGTH;
  const preview = needsToggle ? `${text.slice(0, PREVIEW_LENGTH).trimEnd()}…` : text;

  return (
    <div className="project-desc">
      <p className={`project-desc-text ${expanded ? 'is-expanded' : ''}`}>
        {expanded || !needsToggle ? text : preview}
      </p>
      {needsToggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="project-more-btn"
        >
          {expanded ? showLess : showMore}
          <span className={`project-more-chevron ${expanded ? 'is-open' : ''}`} aria-hidden="true">
            ▾
          </span>
        </button>
      )}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>(0.12);
  const hasStores = Boolean(project.playStoreUrl || project.appStoreUrl);
  const isLogo = project.imageUrl.includes('/projects/');
  const isDarkLogo = project.imageUrl.includes('plodyo');
  const description = t.projects.descriptions[project.name] ?? project.description;
  const company = t.projects.companies[project.company] ?? project.company;

  let availabilityLabel: string | null = null;
  if (!hasStores) {
    if (project.availability === 'Locally distributed') {
      availabilityLabel = t.projects.locallyDistributed;
    } else if (project.availability === 'Available on Play Store & App Store') {
      availabilityLabel = t.projects.availableStores;
    } else if (project.availability) {
      availabilityLabel = project.availability;
    }
  }

  return (
    <article
      ref={ref}
      className={`project-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <div className="project-card-glow" aria-hidden="true" />
      <div className="project-card-inner">
        <div className="project-media">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.name}
              loading="lazy"
              className={
              isLogo
                ? `project-logo${isDarkLogo ? ' project-logo-dark' : ''}`
                : undefined
            }
            />
          ) : (
            <div className="project-placeholder">
              <span className="project-placeholder-name">{project.name}</span>
            </div>
          )}
          <div className="project-media-overlay" aria-hidden="true" />
          <div className="project-media-shine" aria-hidden="true" />
          <span className="project-index">#{String(index + 1).padStart(2, '0')}</span>
          <div className="project-company-badge">
            <BuildingIcon className="w-3.5 h-3.5" />
            {company}
          </div>
        </div>

        <div className="project-body">
          <h3 className="project-title">{project.name}</h3>
          <ExpandableDescription
            text={description}
            showMore={t.projects.showMore}
            showLess={t.projects.showLess}
          />

          <div className="project-footer">
            {hasStores ? (
              <div className="project-store-row">
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-btn store-btn-play"
                  >
                    <PlayStoreIcon className="w-4 h-4" />
                    {t.projects.playStore}
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-btn store-btn-apple"
                  >
                    <AppStoreIcon className="w-4 h-4" />
                    {t.projects.appStore}
                  </a>
                )}
              </div>
            ) : availabilityLabel ? (
              <span className="project-availability">
                <CheckCircle className="w-4 h-4" />
                {availabilityLabel}
              </span>
            ) : (
              <span className="project-availability muted">{t.projects.clientInternal}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { t } = useLanguage();
  const companies = useMemo(
    () => [t.projects.all, ...Array.from(new Set(projects.map((p) => p.company)))],
    [projects, t.projects.all]
  );
  const [activeCompany, setActiveCompany] = useState('__all__');

  const filtered = useMemo(
    () =>
      activeCompany === '__all__'
        ? projects
        : projects.filter((p) => p.company === activeCompany),
    [projects, activeCompany]
  );

  return (
    <Section title={t.projects.title} id="projects" subtitle={t.projects.subtitle}>
      <div className="project-filters mb-8">
        {companies.map((company) => {
          const key = company === t.projects.all ? '__all__' : company;
          const label =
            company === t.projects.all
              ? t.projects.all
              : t.projects.companies[company] ?? company;
          return (
            <button
              key={key}
              type="button"
              className={`project-filter-chip ${activeCompany === key ? 'is-active' : ''}`}
              onClick={() => setActiveCompany(key)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="project-grid">
        {filtered.map((project, index) => (
          <ProjectCard key={`${activeCompany}-${project.name}`} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
