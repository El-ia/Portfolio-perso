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

// Props interface defining the carousel inputs
interface ProjectsCarouselProps {
  projects: Project[]; // Array of projects to display
  onProjectClick: (project: Project) => void; // Callback when a slide is clicked
}

// Functional component for the projects coverflow carousel
export default function ProjectsCarousel({
  projects,
  onProjectClick,
}: ProjectsCarouselProps): JSX.Element {
  // Ref to store the Swiper instance for programmatic control
  const swiperRef = useRef<SwiperClass | null>(null);
  // Track the currently active/focused slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Current language + translator
  const { lang } = useLang();
  const t = createTranslator(lang);

  // Section & controls labels from i18n
  const sectionTitle = t<string>('sections.projects');
  const ariaPrev = t<string>('a11y.prev');
  const ariaNext = t<string>('a11y.next');

  // Small helper to fetch localized project fields with a safe fallback
  const projectText = (id: number, key: 'title' | 'alt', fallback: string) => {
    const val = t<string>(`projects.byId.${id}.${key}`);
    // If the key is missing, t(...) returns the path string. We detect that and fallback.
    return val.includes(`projects.byId.${id}.${key}`) ? fallback : val;
  };

  // Handle slide click - focus if not active, open modal if already active
  const handleSlideClick = (project: Project, index: number) => {
    if (index === activeIndex) {
      // Already focused - open modal
      onProjectClick(project);
    } else {
      // Not focused - slide to this one to focus it
      swiperRef.current?.slideTo(index);
    }
  };

  return (
    <section id="projectsCarousel" className={styles.carouselSection}>
      {/* Section heading */}
      <h2 className={styles.title}>{sectionTitle}</h2>

      {/* Custom navigation arrows */}
      <div className={styles.navButtons}>
        {/* Previous slide button */}
        <button
          className={styles.prevBtn}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label={ariaPrev}
        >
          ‹
        </button>
        {/* Next slide button */}
        <button
          className={styles.nextBtn}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label={ariaNext}
        >
          ›
        </button>
      </div>

      {/* Swiper carousel setup */}
      <Swiper
        modules={[EffectCoverflow, Pagination, Mousewheel, FreeMode]} // Enabled modules
        effect="coverflow" // 3D coverflow effect
        coverflowEffect={{
          rotate: 50, // angle of side slides
          stretch: -100, // spacing between slides
          depth: 100, // perspective depth
          modifier: 1, // effect intensity
          slideShadows: false,
        }}
        freeMode={false} // disable free mode for better control
        mousewheel={{ // enable mouse-wheel navigation
          forceToAxis: true,
          releaseOnEdges: false,
          sensitivity: 1,
          thresholdDelta: 20,
          eventsTarget: '#projectsCarousel',
        }}
        // slideToClickedSlide disabled - we handle clicks manually
        centeredSlides // center active slide
        slidesPerView="auto" // auto number of slides
        spaceBetween={-100} // overlap slides
        speed={500} // transition duration
        pagination={{ clickable: true }} // show pagination bullets
        onSwiper={(swiper: SwiperClass) => {
          swiperRef.current = swiper;
        }} // capture swiper instance
        onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.activeIndex)} // track active slide
        className={styles.swiperContainer} // custom styling
        breakpoints={{ // responsive settings
          320: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* Render each project as a slide */}
        {projects.map((project, idx) => {
          const title = projectText(project.id, 'title', project.title);
          const alt = projectText(project.id, 'alt', project.alt ?? project.title);

          return (
            <SwiperSlide
              key={project.id}
              className={styles.swiperSlide}
              onClick={() => handleSlideClick(project, idx)} // handle focus/open logic
            >
              <div className={styles.card}>
                {/* Project image */}
                <img src={project.img} alt={alt} />
                {/* Project title caption */}
                <p className={styles.caption}>{title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}