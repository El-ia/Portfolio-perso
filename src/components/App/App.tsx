import { useState } from 'react'

import NavBar           from '../NavBar/NavBar'
// import FloatingMenu     from '../FloatingMenu/FloatingMenu'
import Hero             from '../Hero/Hero'
import About            from '../About/About'
import Skills           from '../Skills/Skills'
import ProjectsCarousel from '../ProjectsCarousel/ProjectsCarousel'
import ProjectModal     from '../ProjectModal/ProjectModal'
import Timeline         from '../Timeline/Timeline'
import Contact          from '../Contact/Contact'
import Footer           from '../Footer/Footer'

import type { Project } from '../../types/projects'
import { projects }     from '../../types/projects'

export default function App(): JSX.Element {
  // Track which project is currently open in the modal (null = no modal)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Handler to open modal when a project is clicked in the carousel
  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project)
  }

  // Handler to close the modal
  const handleCloseModal = (): void => {
    setSelectedProject(null)
  }

  return (
    <>
      {/* Hero / landing section */}
      <Hero />

      {/* Main navigation bar */}
      <NavBar />

      {/* About section */}
      <About />

      {/*
        Projects carousel:
        - Pass the full list of projects
        - Provide a callback to open the modal on click
      */}
      <ProjectsCarousel
        projects={projects}
        onProjectClick={handleProjectClick}
      />

      {/*
        Conditionally render ProjectModal:
        - Only show when a project is selected
        - Pass selected project data and close handler
      */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}

      {/* Skills / expertise section */}
      <Skills />

      {/* Timeline / experience section */}
      <Timeline />

      {/* Contact form / details */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating quick-access menu
      <FloatingMenu /> */}
    </>
  )
}