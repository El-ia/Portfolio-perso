// src/components/Hero/Hero.tsx
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../../assets/hero-image.png';
import styles from './Hero.module.scss';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <header className={styles.topBar}>
        <div className={styles.name}>
          Elia<br/>Berthier
        </div>
        <div className={styles.role}>
          Développeuse web<br/>full stack
        </div>
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>
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

      <div className={styles.imageWrapper}>
        <img src={heroImage} alt="Clavier avec une plante" />
      </div>

      <a href="#projectsCarousel" className={styles.ctaLink}>
        <span className={styles.ctaText}>VOIR MES PROJETS</span>
        <div className={styles.ctaLine} />
      </a>
    </section>
  );
}