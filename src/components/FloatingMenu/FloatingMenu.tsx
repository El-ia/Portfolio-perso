import { useEffect, useState } from 'react';
import styles from './FloatingMenu.module.scss';

// ——— Icons ———
import gearIcon from '../../assets/icons/gear-icon.png';
import flagFrIcon from '../../assets/icons/france-icon.png';
import flagEnIcon from '../../assets/icons/great-britain-icon.png';
import moonIcon from '../../assets/icons/moon-icon.png';
import sunIcon from '../../assets/icons/sun-icon.png';

type Lang = 'fr' | 'en';
type Theme = 'light' | 'dark';

interface FloatingMenuProps {
  /** Initial language state (default: 'fr') */
  initialLang?: Lang;
  /** Initial theme state (default: 'light') */
  initialTheme?: Theme;
  /** Optional callback fired on language toggle */
  onToggleLang?: (lang: Lang) => void;
  /** Optional callback fired on theme toggle */
  onToggleTheme?: (theme: Theme) => void;
}

export default function FloatingMenu({
  initialLang = 'fr',
  initialTheme = 'light',
  onToggleLang,
  onToggleTheme,
}: FloatingMenuProps): JSX.Element {
  // ——— Menu open/close state ———
  const [open, setOpen] = useState(false);

  // ——— Current language and theme ———
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // ——— Visibility state (appears after scrolling 60px, like NavBar) ———
  const [visible, setVisible] = useState(false);

  // ——— Animation states for icon transitions ———
  const [isLangChanging, setIsLangChanging] = useState(false);
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  /* ——— Show/hide Floating Menu on scroll ——— */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    onScroll(); // check initial position
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ——— Update <html> attributes for language ——— */
  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    onToggleLang?.(lang);
  }, [lang, onToggleLang]);

  /* ——— Update <html> attributes for theme ——— */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    onToggleTheme?.(theme);
  }, [theme, onToggleTheme]);

  // ——— Dynamic icons & aria labels ———
  const flagIcon = lang === 'fr' ? flagEnIcon : flagFrIcon;
  const flagAria =
    lang === 'fr' ? 'Switch site language to English' : 'Repasser le site en français';
  const themeIcon = theme === 'light' ? moonIcon : sunIcon;
  const themeAria =
    theme === 'light' ? 'Activer le mode nuit' : 'Revenir au mode jour';

  /* ——— Handle language toggle with flip animation ——— */
  const handleToggleLang = () => {
    if (isLangChanging) return; // prevent multiple clicks during animation

    setIsLangChanging(true);

    // Change language mid-animation
    setTimeout(() => {
      setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
    }, 300);

    // End animation after duration
    setTimeout(() => {
      setIsLangChanging(false);
    }, 600);
  };

  /* ——— Handle theme toggle with spin animation ——— */
  const handleToggleTheme = () => {
    if (isThemeChanging) return; // prevent multiple clicks during animation

    setIsThemeChanging(true);

    // Change theme mid-animation
    setTimeout(() => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }, 250);

    // End animation after duration
    setTimeout(() => {
      setIsThemeChanging(false);
    }, 500);
  };

  return (
    <div
      className={[
        styles.floatingMenu,
        visible ? styles.visible : '',
        open ? styles.open : '',
      ]
        .join(' ')
        .trim()}
    >
      {/* ——— Language Button (above gear) ——— */}
      <button
        type="button"
        className={`${styles.item} ${styles.itemLang} ${
          isLangChanging ? styles.langChanging : ''
        }`}
        aria-label={flagAria}
        onClick={handleToggleLang}
      >
        <img src={flagIcon} alt="" aria-hidden="true" />
      </button>

      {/* ——— Theme Button (above language) ——— */}
      <button
        type="button"
        className={`${styles.item} ${styles.itemTheme} ${
          isThemeChanging ? styles.themeChanging : ''
        }`}
        aria-label={themeAria}
        onClick={handleToggleTheme}
      >
        <img src={themeIcon} alt="" aria-hidden="true" />
      </button>

      {/* ——— Main Gear Button ——— */}
      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        aria-label={open ? 'Fermer le menu rapide' : 'Ouvrir le menu rapide'}
        onClick={() => setOpen(o => !o)}
      >
        <img src={gearIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}