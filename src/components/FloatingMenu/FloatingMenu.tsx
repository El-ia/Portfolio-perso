import { useEffect, useState } from 'react';
import styles from './FloatingMenu.module.scss';

// ——— Icons ———
import gearIcon from '../../assets/icons/gear-icon.png';
import flagFrIcon from '../../assets/icons/france-icon.png';
import flagEnIcon from '../../assets/icons/great-britain-icon.png';
import moonIcon from '../../assets/icons/moon-icon.png';
import sunIcon from '../../assets/icons/sun-icon.png';

// ——— App language from context ———
import { useLang } from '../../context/useLang';

type Theme = 'light' | 'dark';

interface FloatingMenuProps {
  /** Initial theme state (default: 'light') */
  initialTheme?: Theme;
  /** Optional callback fired on theme toggle */
  onToggleTheme?: (theme: Theme) => void;
}

export default function FloatingMenu({
  initialTheme = 'light',
  onToggleTheme,
}: FloatingMenuProps): JSX.Element {
  // ——— Language from global context ———
  const { lang, setLang } = useLang();

  // ——— Open/close state for the floating menu ———
  const [open, setOpen] = useState(false);

  // ——— Local theme (you can move to a ThemeContext later) ———
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // ——— Visibility (same behavior as NavBar: appears after scroll > 60px) ———
  const [visible, setVisible] = useState(false);

  // ——— Animation flags ———
  const [isLangChanging, setIsLangChanging] = useState(false);
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  /* ——— Show/hide with scroll ——— */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ——— On first mount: restore theme from localStorage OR OS preference ——— */
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme | null);
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      return;
    }
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  /* ——— Reflect theme on <html>, persist it, and notify parent ——— */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    onToggleTheme?.(theme);
  }, [theme, onToggleTheme]);

  // ——— Dynamic icons & aria labels (based on context lang + local theme) ———
  const flagIcon = lang === 'fr' ? flagEnIcon : flagFrIcon;
  const flagAria =
    lang === 'fr' ? 'Switch site language to English' : 'Repasser le site en français';
  const themeIcon = theme === 'light' ? moonIcon : sunIcon;
  const themeAria = theme === 'light' ? 'Activer le mode nuit' : 'Revenir au mode jour';

  /* ——— Toggle language with flip animation ——— */
  const handleToggleLang = () => {
    if (isLangChanging) return;
    setIsLangChanging(true);

    // Change in the middle of the animation
    setTimeout(() => {
      setLang(lang === 'fr' ? 'en' : 'fr');
    }, 300);

    setTimeout(() => {
      setIsLangChanging(false);
    }, 600);
  };

  /* ——— Toggle theme with spin animation ——— */
  const handleToggleTheme = () => {
    if (isThemeChanging) return;
    setIsThemeChanging(true);

    setTimeout(() => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }, 250);

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
      {/* Language button (above gear) */}
      <button
        type="button"
        className={`${styles.item} ${styles.itemLang} ${
          isLangChanging ? styles.langChanging : ''
        }`}
        aria-label={flagAria}
        onClick={handleToggleLang}
      >
        <img
          src={flagIcon}
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
        />
      </button>

      {/* Theme button (above language) */}
      <button
        type="button"
        className={`${styles.item} ${styles.itemTheme} ${
          isThemeChanging ? styles.themeChanging : ''
        }`}
        aria-label={themeAria}
        onClick={handleToggleTheme}
      >
        <img
          src={themeIcon}
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
        />
      </button>

      {/* Main gear button */}
      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        aria-label={open ? 'Fermer le menu rapide' : 'Ouvrir le menu rapide'}
        onClick={() => setOpen(o => !o)}
      >
        <img
          src={gearIcon}
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
        />
      </button>
    </div>
  );
}