import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import cvFile from '../../assets/cv_elia_berthier.pdf';
import uploadGreenIcon from '../../assets/icons/upload-green-icon.png';
import uploadBeigeIcon from '../../assets/icons/upload-beige-icon.png';
import styles from './NavBar.module.scss';

export default function NavBar(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setVisible(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <img src={logo} alt="Logo — retour accueil" className={styles.logoImage} />
              <span className={styles.siteName}>ELIA BERTHIER</span>
            </a>
          </li>

          {/* Links */}
          <li className={styles.navItem}><a href="#about" className={styles.navLink}>À PROPOS</a></li>
          <li className={styles.navItem}><a href="#projectsCarousel" className={styles.navLink}>PROJETS</a></li>
          <li className={styles.navItem}><a href="#skills" className={styles.navLink}>COMPÉTENCES</a></li>
          <li className={styles.navItem}><a href="#timeline" className={styles.navLink}>PARCOURS</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>CONTACT</a></li>
          <li className={styles.navItem}><a href={cvFile} download="CV_Elia_Berthier.pdf" className={`${styles.navLink} ${styles.cvLink}`} 
          aria-label="Télécharger mon CV (PDF)">CV<span className={styles.cvIcon}>
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
        aria-label={sidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        ☰
      </button>

      {/* ——— Overlay ——— */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.active : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ——— Sidebar mobile ——— */}
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
            <img src={logo} alt="Logo — retour accueil" className={styles.logoImage} />
            <span className={styles.siteName}>ELIA BERTHIER</span>
          </a>
        </div>

        <ul className={styles.sidebarList}>
          <li><a href="#about" onClick={() => setSidebarOpen(false)}>À PROPOS</a></li>
          <li><a href="#projectsCarousel" onClick={() => setSidebarOpen(false)}>PROJETS</a></li>
          <li><a href="#skills" onClick={() => setSidebarOpen(false)}>COMPÉTENCES</a></li>
          <li><a href="#timeline" onClick={() => setSidebarOpen(false)}>PARCOURS</a></li>
          <li><a href="#contact" onClick={() => setSidebarOpen(false)}>CONTACT</a></li>
          <li><a href={cvFile} download="CV_Elia_Berthier.pdf" onClick={() => setSidebarOpen(false)} className={`${styles.cvLink} ${styles.sidebarCvLink}`}
              aria-label="Télécharger mon CV (PDF)">CV<span className={styles.cvIcon}>
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