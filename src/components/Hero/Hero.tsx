import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../../assets/hero-image.png';
import styles from './Hero.module.scss';

// ——— i18n hooks ———
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

import Reveal from '../Reveal/Reveal';

export default function Hero(): JSX.Element {
  const { lang } = useLang();
  const t = createTranslator(lang as Lang);

  const roleLine1 = t('hero.roleLine1') as string;
  const roleLine2 = t('hero.roleLine2') as string;
  const portfolioWord = t('hero.portfolioWord') as string;
  const cta = t('hero.cta') as string;

  return (
    <section id="hero" className={styles.hero}>
      {/* Top bar */}
      <header className={styles.topBar}>
        <Reveal direction="down" delay={200}>
          <div className={styles.name}>
            Elia<br />Berthier
          </div>
        </Reveal>
        <Reveal direction="down" delay={200}>
          <div className={styles.role}>
            {roleLine1}<br />{roleLine2}
          </div>
        </Reveal>
      </header>

      {/* Title */}
      <div className={styles.content}>
        <h1 className={styles.title}>
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

      {/* Image */}
      <div className={styles.imageWrapper}>
        <Reveal direction="left" delay={200}>
          <img src={heroImage} alt="Clavier avec une plante" />
        </Reveal>
      </div>

      {/* CTA */}
      <a href="#projectsCarousel" className={styles.ctaLink}>
        {/* texte du CTA en fade-only sans casser la mise en page */}
        <Reveal as="span" direction="fade" delay={150}>
          <span className={styles.ctaText}>{cta}</span>
        </Reveal>
        <div className={styles.ctaLine} />
      </a>
    </section>
  );
}