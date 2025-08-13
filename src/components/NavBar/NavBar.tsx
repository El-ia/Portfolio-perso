import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import cvFile from '../../assets/cv_elia_berthier.pdf';
import uploadGreenIcon from '../../assets/icons/upload-green-icon.png';
import uploadBeigeIcon from '../../assets/icons/upload-beige-icon.png';
import styles from './NavBar.module.scss';

// ——— i18n ———
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

export default function NavBar(): JSX.Element {
  // Current language + translator
  const { lang } = useLang();
  const t = createTranslator(lang as Lang);

  // Scroll visibility + sidebar state
  const [visible, setVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setVisible(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Localized labels
  const lblAbout = t('nav.about') as string;
  const lblProjects = t('nav.projects') as string;
  const lblSkills = t('nav.skills') as string;
  const lblTimeline = t('nav.timeline') as string;
  const lblContact = t('nav.contact') as string;
  const lblCv = t('nav.cv') as string;

  const ariaDownloadCv = t('a11y.downloadCv') as string;
  const ariaMenuOpen = t('a11y.menuOpen') as string;
  const ariaMenuClose = t('a11y.menuClose') as string;

  return (
    <>
      {/* ——— Desktop horizontal navbar ——— */}
      <nav
        className={`${styles.nav} ${visible ? styles.visible : ''}`}
        aria-label="Main navigation"
      >
        <ul className={styles.navList}>
          {/* Logo */}
          <li className={styles.navItem}>
            <a href="#hero" className={styles.navLinkLogo}>
              <img src={logo} alt="Logo — home" className={styles.logoImage} />
              <span className={styles.siteName}>ELIA BERTHIER</span>
            </a>
          </li>

          {/* Links */}
          <li className={styles.navItem}><a href="#about" className={styles.navLink}>{lblAbout}</a></li>
          <li className={styles.navItem}><a href="#projectsCarousel" className={styles.navLink}>{lblProjects}</a></li>
          <li className={styles.navItem}><a href="#skills" className={styles.navLink}>{lblSkills}</a></li>
          <li className={styles.navItem}><a href="#timeline" className={styles.navLink}>{lblTimeline}</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>{lblContact}</a></li>

          {/* CV download with icon swap */}
          <li className={styles.navItem}>
            <a
              href={cvFile}
              download="CV_Elia_Berthier.pdf"
              className={`${styles.navLink} ${styles.cvLink}`}
              aria-label={ariaDownloadCv}
            >
              {lblCv}
              <span className={styles.cvIcon}>
                <img
                  src={uploadGreenIcon}
                  alt=""
                  aria-hidden="true"
                  className={`${styles.cvIconImg} ${styles.cvIconImgGreen}`}
                />
                <img
                  src={uploadBeigeIcon}
                  alt=""
                  aria-hidden="true"
                  className={`${styles.cvIconImg} ${styles.cvIconImgBeige}`}
                />
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* ——— Mobile hamburger ——— */}
      <button
        className={`${styles.tabHandle} ${sidebarOpen ? styles.sidebarOpen : ''}`}
        onClick={() => setSidebarOpen(prev => !prev)}
        aria-label={sidebarOpen ? ariaMenuClose : ariaMenuOpen}
      >
        ☰
      </button>

      {/* ——— Overlay ——— */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.active : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ——— Mobile sidebar ——— */}
      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}
        aria-hidden={!sidebarOpen}
      >
        <div className={styles.sidebarHeader}>
          <a
            href="#hero"
            onClick={() => setSidebarOpen(false)}
            className={styles.navLinkLogo}
          >
            <img src={logo} alt="Logo — home" className={styles.logoImage} />
            <span className={styles.siteName}>ELIA BERTHIER</span>
          </a>
        </div>

        <ul className={styles.sidebarList}>
          <li><a href="#about" onClick={() => setSidebarOpen(false)}>{lblAbout}</a></li>
          <li><a href="#projectsCarousel" onClick={() => setSidebarOpen(false)}>{lblProjects}</a></li>
          <li><a href="#skills" onClick={() => setSidebarOpen(false)}>{lblSkills}</a></li>
          <li><a href="#timeline" onClick={() => setSidebarOpen(false)}>{lblTimeline}</a></li>
          <li><a href="#contact" onClick={() => setSidebarOpen(false)}>{lblContact}</a></li>
          <li>
            <a
              href={cvFile}
              download="CV_Elia_Berthier.pdf"
              onClick={() => setSidebarOpen(false)}
              className={`${styles.cvLink} ${styles.sidebarCvLink}`}
              aria-label={ariaDownloadCv}
            >
              {lblCv}
              <span className={styles.cvIcon}>
                <img
                  src={uploadGreenIcon}
                  alt=""
                  aria-hidden="true"
                  className={`${styles.cvIconImg} ${styles.cvIconImgGreen}`}
                />
                <img
                  src={uploadBeigeIcon}
                  alt=""
                  aria-hidden="true"
                  className={`${styles.cvIconImg} ${styles.cvIconImgBeige}`}
                />
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}