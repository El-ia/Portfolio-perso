import React, { useState, useRef, useEffect } from 'react';
import type { Project } from '../../types/projects';
import styles from './ProjectModal.module.scss';

import githubIcon from '../../assets/icons/github-icon.png';
import eyeIcon from '../../assets/icons/eye-icon.png';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps): JSX.Element {
  // open / closing states
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);
  // drag state
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const startRef = useRef({ x: 0, y: 0 });

  // trigger opening animation right after mount
  useEffect(() => {
    const id = window.setTimeout(() => setOpening(true), 10);
    return () => window.clearTimeout(id);
  }, []);

  // handle drag movements
  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
      setOffset({ x: cx - startRef.current.x, y: cy - startRef.current.y });
    };
    const handleUp = () => {
      setDragging(false);
      setOffset({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, [dragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
    startRef.current = { x: cx - offset.x, y: cy - offset.y };
    setDragging(true);
  };

  // trigger closing animation
  const handleClose = () => {
    setClosing(true);
    // wait for transition before actually closing
    setTimeout(onClose, 300);
  };

  // build dynamic class names
  const overlayClass = [
    styles.modalOverlay,
    opening ? styles.opening : '',
    closing ? styles.closing : '',
  ].join(' ').trim();
  const contentClass = [
    styles.modalContent,
    opening ? styles.opening : '',
    closing ? styles.closing : '',
    dragging ? styles.dragging : '',
  ].join(' ').trim();

  return (
    <div
      className={overlayClass}
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div
        className={contentClass}
        onClick={e => e.stopPropagation()}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        {/* Close button */}
        <button
          className={styles.modalClose}
          onClick={handleClose}
          aria-label="Close modal"
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
                  alt="Live view"
                  className={styles.modalLinkIcon}
                />
                Jetez un œil
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}