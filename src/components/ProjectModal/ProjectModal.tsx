import React from 'react'
import type { Project } from '../../types/projects'
import styles from './ProjectModal.module.scss'

import githubIcon from '../../assets/github-icon.png'
import eyeIcon    from '../../assets/eye-icon.png'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

// Functional component to display project details in a modal dialog
export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps): JSX.Element {
  return (
    // Overlay covering the entire viewport, clicking it closes the modal
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Container for modal content; clicking inside should not close */}
      <div
        className={styles.modalContent}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button in top-right corner */}
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        {/* Left column: project image */}
        <div className={styles.modalImageWrapper}>
          <img
            src={project.img}
            alt={project.alt}
            className={styles.modalImage}
          />
        </div>

        {/* Right column: textual details */}
        <div className={styles.modalBody}>
          {/* Project title */}
          <h2 className={styles.modalTitle}>{project.title}</h2>

          {/* Technology icons used in the project */}
          <div className={styles.modalTech}>
            {project.techIcons.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt=""
                aria-hidden="true"
                className={styles.modalTechIcon}
              />
            ))}
          </div>

          {/* Project description split into paragraphs */}
          <div className={styles.modalDescriptionWrapper}>
            {project.description.map((paragraph, idx) => (
              <p key={idx} className={styles.modalDescription}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Action links: GitHub and Live demo */}
          <div className={styles.modalLinks}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.modalLink}
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className={styles.modalLinkIcon}
                />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.modalLink}
              >
                <img
                  src={eyeIcon}
                  alt="Voir en ligne"
                  className={styles.modalLinkIcon}
                />
                Jetez un œil
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}