import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../../assets/hero-image.png';
import styles from './Hero.module.scss';

// ——— i18n hooks ———
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

export default function Hero(): JSX.Element {
  // Current language and bound translator
  const { lang } = useLang();
  const t = createTranslator(lang as Lang);

  // Localized strings
  const roleLine1 = t('hero.roleLine1') as string;
  const roleLine2 = t('hero.roleLine2') as string;
  const portfolioWord = t('hero.portfolioWord') as string;
  const cta = t('hero.cta') as string;

  return (
    // Full-screen hero section
    <section id="hero" className={styles.hero}>
      {/* Top bar containing name and role */}
      <header className={styles.topBar}>
        {/* Name displayed over two lines (proper noun, not localized) */}
        <div className={styles.name}>
          Elia<br />Berthier
        </div>
        {/* Localized role on the right */}
        <div className={styles.role}>
          {roleLine1}<br />{roleLine2}
        </div>
      </header>

      {/* Main content area with animated title */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {/* Typewriter effect fed with localized word */}
          <Typewriter
            words={[portfolioWord]}
            loop
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
        <span className={styles.ctaText}>{cta}</span>
        <div className={styles.ctaLine} />
      </a>
    </section>
  );
}