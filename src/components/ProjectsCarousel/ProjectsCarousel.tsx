import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Mousewheel, FreeMode } from 'swiper';
import type { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './ProjectsCarousel.module.scss';
import type { Project } from '../../types/projects';

import { useLang } from '../../context/useLang';
import { createTranslator } from '../../i18n/i18n';

import Reveal from '../Reveal/Reveal';

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function ProjectsCarousel({
  projects,
  onProjectClick,
}: ProjectsCarouselProps): JSX.Element {
  const swiperRef = useRef<SwiperClass | null>(null);

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

  const handleCardClick = (
    e: React.MouseEvent,
    project: Project,
    idx: number
  ) => {
    // Stop here — prevents Swiper's container handlers from re-processing the click
    e.stopPropagation();

    const slideEl = (e.currentTarget as HTMLElement).closest('.swiper-slide');
    if (slideEl?.classList.contains('swiper-slide-active')) {
      onProjectClick(project);
    } else {
      swiperRef.current?.slideTo(idx);
    }
  };

  return (
    <section id="projectsCarousel" className={styles.carouselSection}>
      <h2 className={styles.title}>
        <Reveal direction="right">
          <span>{sectionTitle}</span>
        </Reveal>
      </h2>

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
          passiveListeners={false}
          touchStartPreventDefault={false}
          // Disable Swiper's stopPropagation on click so events always reach React's root
          preventClicksPropagation={false}
          onSwiper={(swiper: SwiperClass) => {
            swiperRef.current = swiper;
          }}
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
            const delay = (idx % 4) * 100;

            return (
              <SwiperSlide
                key={project.id}
                className={styles.swiperSlide}
              >
                <div
                  className={styles.slideClickWrapper}
                  onClick={(e) => handleCardClick(e, project, idx)}
                >
                  <Reveal direction="up" delay={delay}>
                    <div className={styles.card}>
                      <img src={project.img} alt={alt} />
                      <p className={styles.caption}>{title}</p>
                    </div>
                  </Reveal>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Reveal>
    </section>
  );
}
