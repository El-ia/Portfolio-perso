import { Typewriter } from 'react-simple-typewriter';
import styles from './Hero.module.scss';

// ——— i18n hooks ———
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

// ——— Components ———
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

      {/* Image (LCP optimized + wrapper animation) */}
      <div className={styles.imageWrapper}>
        <Reveal direction="left" delay={200} as="div" className={styles.imageAnim}>
          <picture>
            {/* AVIF first */}
            <source
              type="image/avif"
              srcSet="/images/hero/hero-image-640.avif 640w, /images/hero/hero-image-1280.avif 1280w, /images/hero/hero-image-2048.avif 2048w"
              sizes="(max-width: 550px) 83vw, (max-width: 810px) 65vw, (max-width: 1050px) 55vw, 45vw"
            />
            {/* WebP fallback */}
            <source
              type="image/webp"
              srcSet="/images/hero/hero-image-640.webp 640w, /images/hero/hero-image-1280.webp 1280w, /images/hero/hero-image-2048.webp 2048w"
              sizes="(max-width: 550px) 83vw, (max-width: 810px) 65vw, (max-width: 1050px) 55vw, 45vw"
            />
            {/* PNG fallback (legacy browsers) */}
            <img
              src="/images/hero/hero-image.png"
              alt="Clavier avec une plante"
              width={2048}
              height={2048}   
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