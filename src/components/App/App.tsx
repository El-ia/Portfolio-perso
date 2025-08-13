// src/components/App/App.tsx
import { useEffect, useState } from 'react';

import NavBar from '../NavBar/NavBar';
import FloatingMenu from '../FloatingMenu/FloatingMenu';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import ProjectsCarousel from '../ProjectsCarousel/ProjectsCarousel';
import ProjectModal from '../ProjectModal/ProjectModal';
import Timeline from '../Timeline/Timeline';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import type { Project } from '../../types/projects';
import { projects } from '../../types/projects';

type Theme = 'light' | 'dark';

export default function App(): JSX.Element {
  // Project modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };

  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Hero / landing section */}
      <Hero />

      {/* Main navigation bar */}
      <NavBar />

      {/* About section */}
      <About />

      {/* Projects carousel */}
      <ProjectsCarousel projects={projects} onProjectClick={handleProjectClick} />

      {/* Project modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}

      {/* Skills / expertise section */}
      <Skills />

      {/* Timeline / experience section */}
      <Timeline />

      {/* Contact form / details */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating quick-access menu
         - Language is handled via Context inside FloatingMenu
         - Theme can still be controlled from here if needed */}
      <FloatingMenu
        initialTheme={theme}
        onToggleTheme={setTheme}
      />
    </>
  );
}