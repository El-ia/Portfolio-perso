import { useEffect, useState } from 'react';
import { skillsData } from '../../types/skills';
import type { SkillCategory, SkillIcon } from '../../types/skills';
import styles from './Skills.module.scss';

// i18n hooks/helpers
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

// Reveal (animations au scroll)
import Reveal from '../Reveal/Reveal';

export default function Skills(): JSX.Element {
  const { lang } = useLang();
  const t = createTranslator(lang as Lang);

  // Detect current theme via <html data-theme="...">
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-theme') === 'dark'
  );

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver((records) => {
      for (const r of records) {
        if (r.type === 'attributes' && r.attributeName === 'data-theme') {
          setIsDark(el.getAttribute('data-theme') === 'dark');
        }
      }
    });
    obs.observe(el, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  const sectionTitle = t<string>('skills.title');

  const getCategoryLabel = (cat: SkillCategory): string => {
    const translated = t<string>(`skills.categories.${cat.color}`);
    return translated || cat.category;
  };

  const pickIcon = (skill: SkillIcon) =>
    isDark && skill.darkIcon ? skill.darkIcon : skill.icon;

  return (
    <section className={styles.skills} id="skills">
      {/* ——— Section header ——— */}
      <div className={styles.skills__titleWrapper}>
        <h2 className={styles.skills__title}>
          <Reveal direction="left">
            <span>{sectionTitle}</span>
          </Reveal>
        </h2>
      </div>

      {/* ——— Grid container for skill categories ——— */}
      <div className={styles.skills__grid}>
        {skillsData.map((category: SkillCategory, idx: number) => {
          const delay = (idx % 4) * 100;

          return (
            <Reveal key={category.category} direction="up" delay={delay}>
              <div
                className={`${styles.skills__block} ${styles[`skills__block--${category.color}`]}`}
              >
                <h3 className={styles.skills__category}>
                  {getCategoryLabel(category)}
                </h3>

                <ul className={styles.skills__icons}>
                  {category.icons.map((skill: SkillIcon, i: number) => (
                    <li key={i} className={styles.skills__icon}>
                      <img src={pickIcon(skill)} alt={skill.label} />
                      <span>{skill.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}