import { useState, useEffect } from 'react'
import type { Project } from '../../types/projects'
import styles from './ProjectModal.module.scss'

import githubIcon from '../../assets/icons/github-icon.png'
import eyeIcon from '../../assets/icons/eye-icon.png'

// --- Dark mode variants for HTML & JS icons ---
import htmlDarkIcon from '../../assets/icons/html-dark-icon.png'
import jsDarkIcon from '../../assets/icons/js-dark-icon.png'

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
    return typeof raw === 'string' && raw.includes(path) ? fallback : raw
  }
  const safeStringArray = (path: string, fallback: string[]): string[] => {
    const raw = t(path) as unknown
    if (Array.isArray(raw)) return raw as string[]
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

  // ----- Detect dark mode and swap icons for HTML/JS -----
  const getIsDark = () =>
    (typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-theme') === 'dark') || false

  const [isDark, setIsDark] = useState<boolean>(getIsDark())

  useEffect(() => {
    const el = document.documentElement
    const update = () => setIsDark(el.getAttribute('data-theme') === 'dark')
    update()
    const obs = new MutationObserver(update)
    obs.observe(el, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  // Only swap HTML & JS icons when dark mode is active
  const resolveTechIcon = (src: string): string => {
    if (!isDark) return src
    const file = src.toLowerCase()
    if (file.includes('html')) return htmlDarkIcon
    if (file.includes('js-icon') || file.includes('javascript')) return jsDarkIcon
    return src
  }

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
  ]
    .join(' ')
    .trim()

  return (
    <div className={overlayClass} role="dialog" aria-modal="true" onClick={handleClose}>
      <div
        className={contentClass}
        onClick={(e) => e.stopPropagation()}
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
              <img
                key={i}
                src={resolveTechIcon(icon)}
                alt=""
                aria-hidden="true"
                className={styles.modalTechIcon}
              />
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