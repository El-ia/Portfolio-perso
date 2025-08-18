import * as React from 'react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Reveal.module.scss';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;  // tag to render (div, span, section, ...)
  direction?: Direction;             // animation direction
  delay?: number;                    // animation delay (ms)
  once?: boolean;                    // animate only once
  children: React.ReactNode;
}

export default function Reveal(props: RevealProps) {
  const {
    as = 'div',
    direction = 'up',
    delay = 0,
    once = true,
    className = '',
    style,
    children,
    ...rest // remaining props (id, aria-*, etc.)
  } = props;

  // Track element visibility
  const { ref, visible } = useReveal<HTMLElement>({ once });

  // Build class list
  const classes = [
    styles.reveal,
    styles[`from-${direction}`] ?? '',
    className,
  ].join(' ').trim();

  // Inline style + CSS var for delay (no complex unions)
  type StyleWithVar = React.CSSProperties & { ['--reveal-delay']?: string };
  const mergedStyle: StyleWithVar = { ...(style as React.CSSProperties) };
  if (delay) {
    mergedStyle['--reveal-delay'] = `${Math.max(0, Math.min(delay, 2000))}ms`;
  }

  // Render as desired tag (kept simple to avoid TS unions explosion)
  const Tag = as as unknown as React.ElementType;

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}           // attach observer
      className={classes}
      data-visible={visible ? 'true' : 'false'}     // CSS trigger
      style={mergedStyle}                           // apply delay var if any
      {...rest}
    >
      {children}
    </Tag>
  );
}