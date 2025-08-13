// src/components/ProjectModal/ProjectModal.tsx
import React, { useState, useRef, useEffect } from 'react'
import type { Project } from '../../types/projects'
import styles from './ProjectModal.module.scss'

import githubIcon from '../../assets/icons/github-icon.png'
import eyeIcon from '../../assets/icons/eye-icon.png'

// i18n + langue
import { createTranslator } from '../../i18n/i18n'
import { useLang } from '../../context/useLang'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps): JSX.Element {
  // ----- Language & translator -----
  const { lang } = useLang()
  const t = createTranslator(lang)

  // Localized strings from i18n (fall back to project fields if a key is missing)
  const title = (t<string>(`projects.byId.${project.id}.title`) ?? project.title) as string
  const alt =
    (t<string>(`projects.byId.${project.id}.alt`) ?? project.alt ?? title) as string
  const description =
    (t<string[]>(`projects.byId.${project.id}.description`) ??
      project.description ??
      []) as string[]

  const githubLabel = t<string>('projects.modal.githubBtn') ?? 'GitHub'
  const liveLabel = t<string>('projects.modal.liveBtn') ?? 'Live'
  const closeAria = t<string>('a11y.closeModal') ?? 'Close dialog'

  // ----- Open / close animation -----
  const [opening, setOpening] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setOpening(true), 10)
    return () => window.clearTimeout(id)
  }, [])

  const handleClose = () => {
    setClosing(true)
    // wait for CSS transition before actually unmounting
    window.setTimeout(onClose, 300)
  }

  // ----- Drag to move -----
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const startRef = useRef({ x: 0, y: 0 })

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX
    const cy = 'touches' in e ? e.touches[0].clientY : e.clientY
    startRef.current = { x: cx - offset.x, y: cy - offset.y }
    setDragging(true)
  }

  useEffect(() => {
    if (!dragging) return

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const cx = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
      const cy = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY
      setOffset({ x: cx - startRef.current.x, y: cy - startRef.current.y })
    }
    const handleUp = () => {
      setDragging(false)
      setOffset({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('touchend', handleUp)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('touchend', handleUp)
    }
  }, [dragging])

  // ----- Dynamic classes -----
  const overlayClass = [
    styles.modalOverlay,
    opening ? styles.opening : '',
    closing ? styles.closing : '',
  ]
    .join(' ')
    .trim()

  const contentClass = [
    styles.modalContent,
    opening ? styles.opening : '',
    closing ? styles.closing : '',
    dragging ? styles.dragging : '',
  ]
    .join(' ')
    .trim()

  return (
    <div className={overlayClass} role="dialog" aria-modal="true" onClick={handleClose}>
      <div
        className={contentClass}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        {/* Close button */}
        <button className={styles.modalClose} onClick={handleClose} aria-label={closeAria}>
          ×
        </button>

        {/* Left column: image */}
        <div className={styles.modalImageWrapper}>
          <img src={project.img} alt={alt} className={styles.modalImage} />
        </div>

        {/* Right column: content */}
        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{title}</h2>

          {/* Tech icons */}
          <div className={styles.modalTech}>
            {project.techIcons.map((icon, i) => (
              <img key={i} src={icon} alt="" aria-hidden="true" className={styles.modalTechIcon} />
            ))}
          </div>

          {/* Description */}
          <div className={styles.modalDescriptionWrapper}>
            {description.map((paragraph, idx) => (
              <p key={idx} className={styles.modalDescription}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Links */}
          <div className={styles.modalLinks}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.modalLink}
              >
                <img src={githubIcon} alt="GitHub" className={styles.modalLinkIcon} />
                {githubLabel}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.modalLink}
              >
                <img src={eyeIcon} alt="Live view" className={styles.modalLinkIcon} />
                {liveLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}