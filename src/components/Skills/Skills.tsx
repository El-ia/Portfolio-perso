import React from 'react';
import { skillsData } from '../../types/skills';
import type { SkillCategory, SkillIcon } from '../../types/skills';
import styles from './Skills.module.scss';

// Functional component to render the Skills section
export default function Skills(): JSX.Element {
  return (
    <section className={styles.skills} id="skills">
      {/* Section header */}
      <h2 className={styles.skills__title}>COMPÉTENCES</h2>

      {/* Grid container for skill categories */}
      <div className={styles.skills__grid}>
        {skillsData.map((category: SkillCategory) => (
          // Individual skill category card
          <div
            key={category.category}
            className={`${styles.skills__block} ${styles[`skills__block--${category.color}`]}`}
          >
            {/* Category title */}
            <h3 className={styles.skills__category}>{category.category}</h3>

            {/* List of icons and labels */}
            <ul className={styles.skills__icons}>
              {category.icons.map((skill: SkillIcon, i: number) => (
                <li key={i} className={styles.skills__icon}>
                  {/* Icon image with accessible alt text */}
                  <img src={skill.icon} alt={skill.label} />
                  {/* Visible label next to the icon */}
                  <span>{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}