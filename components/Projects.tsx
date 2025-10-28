import React from 'react';
import type { Project } from '../types';
import Section from './Section';
import { CheckCircle } from './Icons';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section title="Projects & Work History" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2">
            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-dark dark:text-white mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm h-20">{project.description}</p>
              {project.link ? (
                <span className="flex items-center gap-2 text-sm font-medium text-accent">
                  <CheckCircle className="w-4 h-4" />
                  {project.link}
                </span>
              ) : (
                 <span className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-500">
                  Internal Project
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
