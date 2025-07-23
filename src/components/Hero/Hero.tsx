import styles from './Hero.module.scss';
import heroImage from '../../assets/hero-image.png';

export default function Hero() {
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
        <h1 className={styles.title}>PORTFOLIO .</h1>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={heroImage}
          alt="Clavier avec une plante"
        />
      </div>

      <a href="#projectsCarousel" className={styles.ctaLink}>
        <span className={styles.ctaText}>VOIR MES PROJETS</span>
        <div className={styles.ctaLine} />
      </a>
    </section>
  );
}
