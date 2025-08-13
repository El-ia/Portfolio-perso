import styles from './Footer.module.scss';

// ——— Language from context ———
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';
import type { Lang } from '../../i18n/i18n';

export default function Footer(): JSX.Element {
  // Current language from global context
  const { lang } = useLang();
  const t = createTranslator(lang as Lang);

  // Footer text from translations
  const footerText = t('footer.text') as string;

  return (
    <footer className={styles.footer}>
      <p>{footerText}</p>
    </footer>
  );
}