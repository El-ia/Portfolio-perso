import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../../assets/hero-image.png';
import styles from './Hero.module.scss';

export default function Hero() {
  // State to track whether the hero section has scrolled past 60px
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Listen for window scroll and update visibility
    const onScroll = () => setVisible(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // Full-screen hero section
    <section id="hero" className={styles.hero}>
      {/* Top bar containing name and role */}
      <header className={styles.topBar}>
        {/* Name displayed over two lines */}
        <div className={styles.name}>
          Elia<br/>Berthier
        </div>
        {/* Role displayed on the right */}
        <div className={styles.role}>
          Développeuse web<br/>full stack
        </div>
      </header>

      {/* Main content area with animated title */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {/* Typewriter effect for dynamic "PORTFOLIO ." text */}
          <Typewriter
            words={['PORTFOLIO .']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
      </div>

      {/* Image wrapper positioned at the right */}
      <div className={styles.imageWrapper}>
        <img src={heroImage} alt="Clavier avec une plante" />
      </div>

      {/* Call-to-action link to scroll down to projects */}
      <a href="#projectsCarousel" className={styles.ctaLink}>
        <span className={styles.ctaText}>VOIR MES PROJETS</span>
        <div className={styles.ctaLine} />
      </a>
    </section>
  );
}