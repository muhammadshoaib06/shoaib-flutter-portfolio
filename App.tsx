import React from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationLanguages from './components/EducationLanguages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechBackground from './components/TechBackground';
import ClickBurst from './components/ClickBurst';

const App: React.FC = () => {
  return (
    <div className="page-shell">
      <div className="ambient-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="orb orb-4" />
        <span className="orb orb-5" />
        <span className="orb orb-6" />
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
        <span className="particle particle-6" />
      </div>
      <TechBackground />
      <div className="grid-overlay" aria-hidden="true" />
      <ClickBurst />
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 overflow-x-hidden">
        <Header personalInfo={portfolioData.personalInfo} />
        <main className="mt-12 sm:mt-16 md:mt-20 space-y-16 sm:space-y-20 md:space-y-24">
          <About />
          <Skills skills={portfolioData.skills} />
          <Experience />
          <Projects projects={portfolioData.projects} />
          <EducationLanguages />
          <Contact personalInfo={portfolioData.personalInfo} />
        </main>
      </div>
      <Footer personalInfo={portfolioData.personalInfo} />
    </div>
  );
};

export default App;
