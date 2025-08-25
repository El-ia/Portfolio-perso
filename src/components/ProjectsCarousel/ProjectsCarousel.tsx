import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Mousewheel, FreeMode } from 'swiper';
import type { Swiper as SwiperClass } from 'swiper/types';

// Import core Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './ProjectsCarousel.module.scss';
import type { Project } from '../../types/projects';

// i18n
import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';

// Reveal (scroll animations)
import Reveal from '../Reveal/Reveal';

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const dimensionsById: Record<number, { w: number; h: number }> = {
  1: { w: 2600, h: 1564 },
  2: { w: 2602, h: 1562 },
  3: { w: 2470, h: 1486 },
};

export default function ProjectsCarousel({
  projects,
  onProjectClick,
}: ProjectsCarouselProps): JSX.Element {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { lang } = useLang();
  const t = createTranslator(lang);

  const sectionTitle = t<string>('sections.projects');
  const ariaPrev = t<string>('a11y.prev');
  const ariaNext = t<string>('a11y.next');

  const projectText = (id: number, key: 'title' | 'alt', fallback: string) => {
    const val = t<string>(`projects.byId.${id}.${key}`);
    return typeof val === 'string' && val.includes(`projects.byId.${id}.${key}`)
      ? fallback
      : val;
  };

  const handleSlideClick = (project: Project, index: number) => {
    if (index === activeIndex) {
      onProjectClick(project);
    } else {
      swiperRef.current?.slideTo(index);
    }
  };

  return (
    <section id="projectsCarousel" className={styles.carouselSection}>
      {/* Title fixed in layout, only its content animates */}
      <h2 className={styles.title}>
        <Reveal direction="right">
          <span>{sectionTitle}</span>
        </Reveal>
      </h2>

      {/* Arrows: prev from left, next from right */}
      <div className={styles.navButtons}>
        <Reveal direction="left" delay={50}>
          <button
            className={styles.prevBtn}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label={ariaPrev}
          >
            ‹
          </button>
        </Reveal>
        <Reveal direction="right" delay={50}>
          <button
            className={styles.nextBtn}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label={ariaNext}
          >
            ›
          </button>
        </Reveal>
      </div>

      {/* Swiper container gently moves up */}
      <Reveal direction="up" delay={100}>
        <Swiper
          modules={[EffectCoverflow, Pagination, Mousewheel, FreeMode]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: -100,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          freeMode={false}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: false,
            sensitivity: 1,
            thresholdDelta: 20,
            eventsTarget: '#projectsCarousel',
          }}
          centeredSlides
          slidesPerView="auto"
          spaceBetween={-100}
          speed={500}
          pagination={{ clickable: true }}
          onSwiper={(swiper: SwiperClass) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.activeIndex)}
          className={styles.swiperContainer}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, idx) => {
            const title = projectText(project.id, 'title', '');
            const alt = projectText(project.id, 'alt', title || 'Project image');

            // Dimensions connues ? sinon fallback (évite le CLS même si le ratio n’est pas parfait)
            const dims = dimensionsById[project.id] ?? { w: 1200, h: 800 };

            // small stagger: 0ms, 100ms, 200ms, 300ms then repeats
            const delay = (idx % 4) * 100;

            return (
              <SwiperSlide
                key={project.id}
                className={styles.swiperSlide}
                onClick={() => handleSlideClick(project, idx)}
              >
                {/* Each card moves up individually */}
                <Reveal direction="up" delay={delay}>
                  <div className={styles.card}>
                    <img
                      src={project.img}
                      alt={alt}
                      width={dims.w}
                      height={dims.h}
                      loading="lazy"
                      decoding="async"
                    />
                    <p className={styles.caption}>{title}</p>
                  </div>
                </Reveal>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Reveal>
    </section>
  );
}