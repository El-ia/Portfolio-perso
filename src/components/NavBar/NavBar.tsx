import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import styles from './NavBar.module.scss'

export default function NavBar() {
  const [visible, setVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* horizontal menu */}
      <nav
        className={`${styles.nav} ${visible ? styles.visible : ''}`}
        aria-label="Main navigation"
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#hero" className={styles.navLinkLogo}>
              <img
                src={logo}
                alt="Logo — return home"
                className={styles.logoImage}
              />
              <span className={styles.siteName}>ELIA BERTHIER</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink}>
              À PROPOS
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" className={styles.navLink}>
              PROJETS
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills" className={styles.navLink}>
              COMPÉTENCES
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#timeline" className={styles.navLink}>
              PARCOURS
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* hamburger menu button */}
      <button
        className={styles.tabHandle}
        onClick={() => setSidebarOpen((o) => !o)}
        aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
      >
        ☰
      </button>

      {/* Overlay to close sidebar when clicking outside */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.active : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* mobile sidebar */}
      <aside
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.open : ''
        }`}
        aria-hidden={!sidebarOpen}
      >
        <ul className={styles.sidebarList}>
          <li><a href="#hero" onClick={() => setSidebarOpen(false)}>ACCUEIL</a></li>
          <li><a href="#about" onClick={() => setSidebarOpen(false)}>À PROPOS</a></li>
          <li><a href="#projects" onClick={() => setSidebarOpen(false)}>PROJETS</a></li>
          <li><a href="#skills" onClick={() => setSidebarOpen(false)}>COMPÉTENCES</a></li>
          <li><a href="#timeline" onClick={() => setSidebarOpen(false)}>PARCOURS</a></li>
          <li><a href="#contact" onClick={() => setSidebarOpen(false)}>CONTACT</a></li>
        </ul>
      </aside>
    </>
  )
}