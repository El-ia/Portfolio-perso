import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Reveal.module.scss';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
  delay?: number;      // animation delay (ms)
  once?: boolean;      // animate only once
  children: React.ReactNode;
}

export default function Reveal(props: RevealProps) {
  const {
    direction = 'up',
    delay = 0,
    once = true,
    className = '',
    style,
    children,
    ...rest // remaining props (id, aria-*, etc.)
  } = props;

  // Track element visibility
  const { ref, visible } = useReveal<HTMLDivElement>({ once });

  // Build class list
  const classes = [
    styles.reveal,
    styles[`from-${direction}`] ?? '',
    className,
  ].join(' ').trim();

  // Merge inline styles + custom CSS var for delay
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(delay
      ? {
          ['--reveal-delay' as keyof React.CSSProperties]:
            `${Math.max(0, Math.min(delay, 2000))}ms`,
        }
      : {}),
  };

  return (
    <div
      ref={ref} // attach observer
      className={classes}
      data-visible={visible ? 'true' : 'false'} // trigger animation in CSS
      style={mergedStyle} // apply merged style
      {...rest} // pass through remaining props
    >
      {children}
    </div>
  );
}