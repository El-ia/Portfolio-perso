import React from 'react';
import photo from '../../assets/profil-picture.png';
import styles from './About.module.scss';

// Functional component for the "À PROPOS" section
export default function About(): JSX.Element {
  // Long repeated string to create a continuous circular text effect
  const loopText: string =
    'DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦';

  return (
    <section id="about" className={styles.about}>
      {/* Visual content: profile photo and circular text loop */}
      <div className={styles.visual}>
        {/* Centered profile picture */}
        <img src={photo} alt="Elia Berthier" className={styles.photo} />

        {/* SVG loop text wrapping around the photo */}
        <svg viewBox="0 0 200 200" className={styles.curvedLoop} aria-hidden="true">
          <defs>
            {/* Circular path for the text to follow */}
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

      {/* Text section: heading, description, and location */}
      <div className={styles.text}>
        {/* Section title */}
        <h2 className={styles.title}>À PROPOS</h2>

        {/* Paragraph block introducing Elia */}
        <div className={styles.copy}>
          <p>
            Bonjour ! Je m'appelle Elia et j'aime créer des choses qui 
            prennent vie sur le web. J'ai découvert le développement 
            en 2022, en bidouillant des sites et en apprenant HTML 
            et CSS par curiosité.
          </p>
          <p>
            Aujourd'hui, je suis développeuse web full stack, formée 
            chez O'clock et diplômée d'un titre professionnel.
          </p>
          <p>
            Pendant mon stage chez Studiolab, j'ai participé à la 
            création d'un site de services informatiques complet, 
            avec un dashboard client et un back-office, un projet 
            concret qui m'a beaucoup appris.
          </p>
          <p>
            Je cherche une entreprise où je pourrai continuer à 
            progresser, relever des défis utiles et m'investir 
            pleinement. Je suis curieuse, rigoureuse et j'aime 
            vraiment comprendre comment tout fonctionne.
          </p>
        </div>

        {/* Location line with visual separation */}
        <div className={styles.location}>
          <span className={styles.locationText}>
            Île de France • Full remote
          </span>
        </div>
      </div>
    </section>
  );
}