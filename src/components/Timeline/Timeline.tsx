import React, { useEffect, useRef, useState } from 'react';
import type { TimelineItem } from '../../types/timelines';
import { timelineData } from '../../types/timelines';
import styles from './Timeline.module.scss';

export default function Timeline(): JSX.Element {
  // store refs to each timeline item for scroll detection
  const items: TimelineItem[] = timelineData;
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    // calculate which item is closest to 20% down from viewport top
    const handleScroll = () => {
      const offsetAnchor = window.innerHeight * 0.2;
      let closestIndex = 0;
      let minDist = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - offsetAnchor);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    // initialize on mount and attach listener
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.timeline} id="timeline">
      {/* Section heading */}
      <h2 className={styles.timeline__title}>PARCOURS</h2>

      {/* Central vertical line */}
      <div className={styles.timeline__line} />

      {/* Timeline entries */}
      <ul className={styles.timeline__list}>
        {items.map((item, idx) => {
          // alternate left/right positioning
          const sideClass =
            idx % 2 === 0
              ? styles['timeline__item--left']
              : styles['timeline__item--right'];
          const isActive = idx === activeIndex;

          return (
            <li
              key={idx}
              // capture ref for scroll calculations
              ref={(el) => { itemRefs.current[idx] = el; }}
              className={`
                ${styles.timeline__item}
                ${sideClass}
                ${
                  isActive
                    ? styles['timeline__item--active']
                    : styles['timeline__item--inactive']
                }
              `}
              // use data-text attribute for CSS-driven date bubble
              data-text={item.date}
            >
              {/* content block for title and description */}
              <div className={styles.timeline__content} tabIndex={0}>
                <h3 className={styles.timeline__itemTitle}>{item.title}</h3>
                {item.description.map((para, pIdx) => (
                  <p key={pIdx} className={styles.timeline__itemDesc}>
                    {para}
                  </p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}