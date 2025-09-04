import React, { useState, useRef, useEffect } from 'react'
import type { Project } from '../../types/projects'
import styles from './ProjectModal.module.scss'

import githubIcon from '../../assets/icons/github-icon.png'
import eyeIcon from '../../assets/icons/eye-icon.png'

// i18n + language
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

  // Helpers to safely fetch strings/arrays from i18n with graceful fallbacks
  const safeString = (path: string, fallback: string): string => {
    const raw = t<string>(path)
    // If the key is missing, t(...) returns the path itself; detect and fallback.
    return typeof raw === 'string' && raw.includes(path) ? fallback : raw
  }
  const safeStringArray = (path: string, fallback: string[]): string[] => {
    const raw = t(path) as unknown
    if (Array.isArray(raw)) return raw as string[]
    // If missing, t(...) returns the path as a string
    if (typeof raw === 'string' && raw.includes(path)) return fallback
    return fallback
  }

  // Localized strings from i18n (with safe fallbacks)
  const title = safeString(`projects.byId.${project.id}.title`, '')
  const alt = safeString(
    `projects.byId.${project.id}.alt`,
    title || (lang === 'fr' ? 'Aperçu du projet' : 'Project image')
  )
  const description = safeStringArray(`projects.byId.${project.id}.description`, [])

  const githubLabel = safeString('projects.modal.githubBtn', 'GitHub')
  const liveLabel = safeString('projects.modal.liveBtn', lang === 'fr' ? 'Voir' : 'Live')
  const closeAria = safeString('a11y.closeModal', lang === 'fr' ? 'Fermer la fenêtre' : 'Close dialog')

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

  // Narrow helper to discriminate touch vs mouse
  const isTouchEvent = (e: React.MouseEvent | React.TouchEvent): e is React.TouchEvent =>
    'touches' in (e as React.TouchEvent)

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    // Allow preventDefault only for mouse; avoid it for touch to prevent passive warnings
    if (!isTouchEvent(e)) e.preventDefault()

    const cx = isTouchEvent(e) ? e.touches[0].clientX : (e as React.MouseEvent).clientX
    const cy = isTouchEvent(e) ? e.touches[0].clientY : (e as React.MouseEvent).clientY
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

    // Keep touchmove non-passive since we might extend logic later
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