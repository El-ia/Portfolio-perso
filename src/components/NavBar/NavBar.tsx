import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png';
import styles from './NavBar.module.scss';

// Functional component for the main navigation bar
export default function NavBar(): JSX.Element {
  // Tracks whether the navbar should appear after scrolling past 60px
  const [visible, setVisible] = useState<boolean>(false);

  // Tracks whether the mobile sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Adds a scroll listener to toggle navbar visibility
  useEffect(() => {
    const handleScroll = (): void => {
      setVisible(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* ——— Desktop horizontal navbar ——— */}
      <nav
        className={`${styles.nav} ${visible ? styles.visible : ''}`}
        aria-label="Main navigation"
      >
        <ul className={styles.navList}>
          {/* Logo and site name link */}
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

          {/* Navigation links */}
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink}>À PROPOS</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projectsCarousel" className={styles.navLink}>PROJETS</a>
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

      {/* ——— Mobile hamburger button to toggle sidebar ——— */}
      <button
        className={`${styles.tabHandle} ${sidebarOpen ? styles.sidebarOpen : ''}`}
        onClick={() => setSidebarOpen(prev => !prev)}
        aria-label={sidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        ☰
      </button>

      {/* ——— Transparent overlay to close sidebar when clicking outside ——— */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.active : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ——— Mobile sidebar panel ——— */}
      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}
        aria-hidden={!sidebarOpen}
      >
        {/* Sidebar header with logo */}
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

        {/* Sidebar navigation links */}
        <ul className={styles.sidebarList}>
          <li><a href="#about" onClick={() => setSidebarOpen(false)}>À PROPOS</a></li>
          <li><a href="#projectsCarousel" onClick={() => setSidebarOpen(false)}>PROJETS</a></li>
          <li><a href="#skills" onClick={() => setSidebarOpen(false)}>COMPÉTENCES</a></li>
          <li><a href="#timeline" onClick={() => setSidebarOpen(false)}>PARCOURS</a></li>
          <li><a href="#contact" onClick={() => setSidebarOpen(false)}>CONTACT</a></li>
        </ul>
      </aside>
    </>
  );
}