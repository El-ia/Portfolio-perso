import { useEffect, useState } from 'react';
import { skillsData } from '../../types/skills';
import type { SkillCategory, SkillIcon as BaseSkillIcon } from '../../types/skills';
import styles from './Skills.module.scss';

// i18n hooks/helpers
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

// Reveal (animations au scroll)
import Reveal from '../Reveal/Reveal';

// Extend du type si tes données fournissent plus d’infos
interface SkillIcon extends BaseSkillIcon {
  darkIcon?: string;
  w?: number;
  h?: number;
}

// Dimensions d’icône par défaut
const ICON_W = 48;
const ICON_H = 48;

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

  const getIconSize = (skill: SkillIcon) => {
    return { w: skill.w ?? ICON_W, h: skill.h ?? ICON_H };
  };

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
                  {category.icons.map((skill: SkillIcon, i: number) => {
                    const { w, h } = getIconSize(skill);
                    return (
                      <li key={i} className={styles.skills__icon}>
                        <img
                          src={pickIcon(skill)}
                          alt={skill.label}
                          width={w}
                          height={h}
                          loading="lazy"
                          decoding="async"
                        />
                        <span>{skill.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}