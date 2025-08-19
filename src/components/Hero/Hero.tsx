import { Typewriter } from 'react-simple-typewriter';
import styles from './Hero.module.scss';

// ——— Assets (responsive hero image) ———
import hero640 from '../../assets/hero-image-640.webp';
import hero1280 from '../../assets/hero-image-1280.webp';
import hero2048 from '../../assets/hero-image-2048.webp';
import heroPng from '../../assets/hero-image.png';

// ——— i18n hooks ———
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

// ——— Components ———
import Reveal from '../Reveal/Reveal';

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
        <Reveal direction="fade" delay={50}>
          <Typewriter
            words={[portfolioWord]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </Reveal>
        </h1>
      </div>

      {/* Image (LCP): responsive WebP + PNG fallback, explicit dimensions */}
      <div className={styles.imageWrapper}>
        <Reveal direction="left" delay={200}>
          <picture>
            {/* Prefer modern WebP; let the browser pick the best width */}
            <source
              type="image/webp"
              srcSet={`${hero640} 640w, ${hero1280} 1280w, ${hero2048} 2048w`}
              sizes="(max-width: 1050px) 60vw, 45vw" // matches your CSS layout
            />
            {/* PNG fallback for older browsers */}
            <img
              src={heroPng}
              alt="Clavier avec une plante"
              width={2048}     
              height={1536}    
              loading="eager"   
              decoding="async"     
              {...{ fetchpriority: 'high' }} 
            />
          </picture>
        </Reveal>
      </div>

      {/* CTA */}
      <a href="#projectsCarousel" className={styles.ctaLink}>
        {/* CTA text with fade-only animation (doesn't affect layout) */}
        <Reveal as="span" direction="fade" delay={150}>
          <span className={styles.ctaText}>{cta}</span>
        </Reveal>
        <div className={styles.ctaLine} />
      </a>
    </section>
  );
}