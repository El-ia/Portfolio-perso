// src/components/NavBar/NavBar.tsx
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
      {/* ——— Barre horizontale (desktop) ——— */}
      <nav
        className={`${styles.nav} ${visible ? styles.visible : ''}`}
        aria-label="Main navigation"
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#hero" className={styles.navLinkLogo}>
              <img
                src={logo}
                alt="Logo — retour accueil"
                className={styles.logoImage}
              />
              <span className={styles.siteName}>ELIA BERTHIER</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink}>À PROPOS</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" className={styles.navLink}>PROJETS</a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills" className={styles.navLink}>COMPÉTENCES</a>
          </li>
          <li className={styles.navItem}>
            <a href="#timeline" className={styles.navLink}>PARCOURS</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink}>CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* ——— Bouton hamburger (mobile) ——— */}
      <button
        className={`${styles.tabHandle} ${sidebarOpen ? styles.sidebarOpen : ''}`}
        onClick={() => setSidebarOpen(o => !o)}
        aria-label={sidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        ☰
      </button>

      {/* ——— Overlay clic en dehors ——— */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.active : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ——— Sidebar (mobile) ——— */}
      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}
        aria-hidden={!sidebarOpen}
      >
        {/* En-tête dans la sidebar */}
        <div className={styles.sidebarHeader}>
          <a
            href="#hero"
            onClick={() => setSidebarOpen(false)}
            className={styles.navLinkLogo}
          >
            <img
              src={logo}
              alt="Logo — retour accueil"
              className={styles.logoImage}
            />
            <span className={styles.siteName}>ELIA BERTHIER</span>
          </a>
        </div>

        <ul className={styles.sidebarList}>
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