import { skillsData } from '../../types/skills';
import type { SkillCategory, SkillIcon } from '../../types/skills';
import styles from './Skills.module.scss';

// i18n hooks/helpers
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

export default function Skills(): JSX.Element {
  // Current language from context + translator bound to it
  const { lang } = useLang();
  const t = createTranslator(lang as Lang);

  // Localized section title
  const sectionTitle = t<string>('skills.title');

  // Helper: map category color ('frontend' | 'backend' | 'devops' | 'tools') to localized label
  const getCategoryLabel = (cat: SkillCategory): string => {
    // Prefer translated label; fall back to the original `category` from data as a safety net
    const translated = t<string>(`skills.categories.${cat.color}`);
    return translated || cat.category;
  };

  return (
    <section className={styles.skills} id="skills">
      {/* ——— Section header ——— */}
      <h2 className={styles.skills__title}>{sectionTitle}</h2>

      {/* ——— Grid container for skill categories ——— */}
      <div className={styles.skills__grid}>
        {skillsData.map((category: SkillCategory) => (
          // ——— Individual skill category card ———
          <div
            key={category.category}
            className={`${styles.skills__block} ${styles[`skills__block--${category.color}`]}`}
          >
            {/* ——— Category title (localized) ——— */}
            <h3 className={styles.skills__category}>{getCategoryLabel(category)}</h3>

            {/* ——— List of icons and labels (labels are not translated) ——— */}
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