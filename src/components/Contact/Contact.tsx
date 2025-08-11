import styles from './Contact.module.scss';
import downloadIcon from '../../assets/icons/download-icon.png';
import githubIcon from '../../assets/icons/github-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';
import shareIcon from '../../assets/icons/share-icon.png';
import cvFile from '../../assets/cv_elia_berthier.pdf';

export default function Contact(): JSX.Element {
  return (
    <section className={styles.contact} id="contact">
      {/* ——— CV download link ——— */}
      <div className={styles.contact__download}>
        <a
          href={cvFile}
          download="CV_Elia_Berthier.pdf"
          className={styles.contact__downloadLink}
        >
          Voir mon CV complet
          <img
            src={downloadIcon}
            alt="Télécharger CV"
            className={styles.contact__downloadIcon}
          />
        </a>
      </div>

      {/* ——— Section title ——— */}
      <h2 className={styles.contact__title}>CONTACT</h2>

      {/* ——— Container for intro and form ——— */}
      <div className={styles.contact__wrapper}>
        {/* ——— Left column ——— */}
        <div className={styles.contact__intro}>
          <p>
            Envie de travailler ensemble ou de me confier votre projet&nbsp;?
          </p>
          <p>
            Je reste disponible et à l’écoute de nouvelles opportunités ou
            collaborations inspirantes.
          </p>
          <p>
            Si vous souhaitez me proposer un projet, échanger autour d’une idée
            ou simplement prendre contact, je serai ravie d’en discuter avec
            vous.
          </p>

          {/* ——— Info list ——— */}
          <dl className={styles.contact__info}>
            <dt>Email</dt>
            <dd>
              <a href="mailto:elia_berthier@hotmail.fr">
                elia_berthier@hotmail.fr
              </a>
            </dd>

            <dt>Téléphone</dt>
            <dd>
              <a href="tel:+33684914661">06 84 91 46 61</a>
            </dd>

            <dt>Adresse</dt>
            <dd>Paris | 18ᵉ arrondissement, France</dd>

            <dt>Liens</dt>
            <dd className={styles.contact__links}>
              <a
                href="https://github.com/El-ia"
                target="_blank"
                rel="noopener noreferrer"
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
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className={styles.contact__icon}
                />
              </a>
              <button
                type="button"
                aria-label="Partager cette page"
                className={styles.contact__shareButton}
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: document.title,
                      url: window.location.href,
                    });
                  }
                }}
              >
                <img src={shareIcon} alt="" className={styles.contact__icon} />
              </button>
            </dd>
          </dl>
        </div>

        {/* ——— Right column: form ——— */}
        <form
          className={styles.contact__form}
          action="https://formspree.io/f/xpwlonke"
          method="POST"
        >
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}