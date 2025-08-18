import type { HTMLAttributes, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Reveal.module.scss';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
  delay?: number;      // in ms
  once?: boolean;
  className?: string;  // redeclared for safety
  children: ReactNode;
}

export default function Reveal({
  direction = 'up',
  delay = 0,
  once = true,
  className = '',
  children,
  ...rest
}: RevealProps) {
  // Hook to track when the element becomes visible
  const { ref, visible } = useReveal<HTMLDivElement>({ once });

  // Compose CSS classes:
  // - base .reveal class
  // - directional class like .from-up, .from-left, etc.
  // - any custom classes passed via props
  const classes = [
    styles.reveal,
    styles[`from-${direction}`] ?? '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <div
      ref={ref} // Attach observer to this element
      className={classes}
      data-visible={visible ? 'true' : 'false'} // Used in CSS to trigger animations
      // Optional transition delay (clamped between 0 and 2000ms for safety)
      style={delay ? { transitionDelay: `${Math.max(0, Math.min(delay, 2000))}ms` } : undefined}
      {...rest} // Spread any other props (e.g. aria-label, id, etc.)
    >
      {children}
    </div>
  );
}