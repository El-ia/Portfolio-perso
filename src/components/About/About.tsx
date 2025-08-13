import photo from '../../assets/profil-picture.png'
import styles from './About.module.scss'

import { useLang } from '../../context/useLang'
import { createTranslator } from '../../i18n/i18n'
import type { Lang } from '../../i18n/i18n'

export default function About(): JSX.Element {
  const { lang } = useLang()
  const t = createTranslator(lang as Lang)

  // Localized strings
  const loopText = t('about.loopText') as string
  const copy = t('about.copy') as string[]
  const location = t('about.location') as string
  const title = t('about.title') as string

  // Apply special class when language is English (loop text is longer: "AVAILABLE")
  const curvedLoopClass = `${styles.curvedLoop} ${lang === 'en' ? styles.curvedLoopEn : ''}`

  return (
    <section id="about" className={styles.about}>
      {/* Visual area: profile photo + circular looped text */}
      <div className={styles.visual}>
        {/* Centered profile picture */}
        <img src={photo} alt="Elia Berthier" className={styles.photo} />

        {/* SVG curved text wrapped around the photo */}
        <svg viewBox="0 0 200 200" className={curvedLoopClass} aria-hidden="true">
          <defs>
            {/* Circular path for the looped text */}
            <path
              id="text-circle"
              d="
                M100,100
                m -85,0
                a 85,85 0 1,1 170,0
                a 85,85 0 1,1 -170,0
              "
            />
          </defs>
          <text dy="-5">
            <textPath href="#text-circle" startOffset="0">
              {loopText}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Textual content: section title, intro paragraphs, and location */}
      <div className={styles.text}>
        {/* Section title */}
        <h2 className={styles.title}>{title}</h2>

        {/* Intro paragraphs (localized) */}
        <div className={styles.copy}>
          {copy.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Location line */}
        <div className={styles.location}>
          <span className={styles.locationText}>{location}</span>
        </div>
      </div>
    </section>
  )
}