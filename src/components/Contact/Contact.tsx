import styles from './Contact.module.scss'
import downloadIcon from '../../assets/icons/upload-white-icon.png'
import githubIcon from '../../assets/icons/github-icon.png'
import linkedinIcon from '../../assets/icons/linkedin-icon.png'
import shareIcon from '../../assets/icons/share-icon.png'
import cvFile from '../../assets/cv_elia_berthier.pdf'

import { useLang } from '../../context/useLang'
import { createTranslator } from '../../i18n/i18n'
import type { Lang } from '../../i18n/i18n'

import Reveal from '../Reveal/Reveal'

export default function Contact(): JSX.Element {
  const { lang } = useLang()
  const t = createTranslator(lang as Lang)

  // Localized strings
  const title = t('contact.title') as string
  const downloadCta = t('contact.downloadCta') as string
  const downloadA11y = t('a11y.downloadCv') as string
  const intro = t('contact.intro') as string[]
  const labelEmail = t('contact.info.email') as string
  const labelPhone = t('contact.info.phone') as string
  const labelAddress = t('contact.info.address') as string
  const labelLinks = t('contact.info.links') as string
  const addressValue = t('contact.addressValue') as string
  const formName = t('contact.form.name') as string
  const formEmail = t('contact.form.email') as string
  const formMessage = t('contact.form.message') as string
  const formSubmit = t('contact.form.submit') as string

  const shareLabel = t('a11y.sharePage') as string

  return (
    <section className={styles.contact} id="contact">
      {/* ——— CV download link ——— */}
      <div className={styles.contact__download}>
      <Reveal direction="up" delay={100}>
        <a
          href={cvFile}
          download="CV_Elia_Berthier.pdf"
          className={styles.contact__downloadLink}
          aria-label={downloadA11y}
        >
          {downloadCta}
          <img
            src={downloadIcon}
            alt={downloadA11y}
            className={styles.contact__downloadIcon}
          />
        </a>
        </Reveal>
      </div>

      {/* ——— Section title ——— */}
      <Reveal direction="left" delay={100}>
      <h2 className={styles.contact__title}>{title}</h2>
      </Reveal>

      {/* ——— Container for intro and form ——— */}
      
      <div className={styles.contact__wrapper}>
        {/* ——— Left column ——— */}
        <Reveal direction="up" delay={100}>
        <div className={styles.contact__intro}>
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {/* ——— Info list ——— */}
          <dl className={styles.contact__info}>
            <dt>{labelEmail}</dt>
            <dd>
              <a href="mailto:elia_berthier@hotmail.fr">
                elia_berthier@hotmail.fr
              </a>
            </dd>

            <dt>{labelPhone}</dt>
            <dd>
              <a href="tel:+33684914661">06 84 91 46 61</a>
            </dd>

            <dt>{labelAddress}</dt>
            <dd>{addressValue}</dd>

            <dt>{labelLinks}</dt>
            <dd className={styles.contact__links}>
              <a
                href="https://github.com/El-ia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className={styles.contact__icon}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/elia-berthier-181770133/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className={styles.contact__icon}
                />
              </a>
              <button
                type="button"
                aria-label={shareLabel}
                className={styles.contact__shareButton}
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: document.title,
                      url: window.location.href,
                    })
                  }
                }}
              >
                <img src={shareIcon} alt="" className={styles.contact__icon} />
              </button>
            </dd>
          </dl>
        </div>
        </Reveal>

        {/* ——— Right column: form ——— */}
        <form
          className={styles.contact__form}
          action="https://formspree.io/f/xpwlonke"
          method="POST"
        >
          <label htmlFor="name">{formName}</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">{formEmail}</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">{formMessage}</label>
          <textarea id="message" name="message" rows={6} required />

          <button type="submit">{formSubmit}</button>
        </form>
      </div>
    </section>
  )
}