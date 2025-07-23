import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import styles from './NavBar.module.scss';

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // dès que le scroll vertical dépasse 60px (hauteur de ton header),
      // on bascule visible à true
      setVisible(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${visible ? styles.visible : ''}`}
      aria-label="Navigation principale">
      <ul className={styles.navList}><li className={styles.navItem}>
        <a href="#hero" className={styles.navLinkLogo}><img src={logo} alt="Logo — retour accueil" className={styles.logoImage} />
            <span className={styles.siteName}>ELIA BERTHIER</span>
          </a></li>
        <li className={styles.navItem}><a href="#about" className={styles.navLink}>À PROPOS</a></li>
        <li className={styles.navItem}><a href="#projectsCarousel" className={styles.navLink}>PROJETS</a></li>
        <li className={styles.navItem}><a href="#skills" className={styles.navLink}>COMPÉTENCES</a></li>
        <li className={styles.navItem}><a href="#timeline" className={styles.navLink}>PARCOURS</a></li>
        <li className={styles.navItem}><a href="#contact" className={styles.navLink}>CONTACT</a></li>
      </ul>
    </nav>
  );
}