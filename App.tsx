import React from 'react';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationLanguages from './components/EducationLanguages';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    // Add relative positioning to act as a container for the absolutely positioned theme toggle
    <div className="min-h-screen relative">
      {/* Position ThemeToggle in the top-right corner of the page */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* The main background colors are now on the body tag in index.html
      for smoother theme transitions. */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Header personalInfo={portfolioData.personalInfo} />
        <main className="mt-16 space-y-20">
          <About summary={portfolioData.professionalSummary} />
          <Skills skills={portfolioData.skills} />
          <Experience experience={portfolioData.experience} />
          <Projects projects={portfolioData.projects} />
          <EducationLanguages education={portfolioData.education} languages={portfolioData.languages} />
        </main>
      </div>
      <Footer personalInfo={portfolioData.personalInfo} />
    </div>
  );
};

export default App;
