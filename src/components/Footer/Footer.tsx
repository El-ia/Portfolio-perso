import styles from './Footer.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Elia Berthier. Tous droits réservés.</p>
    </footer>
  );
}