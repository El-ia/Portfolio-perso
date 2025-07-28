// src/components/ProjectsCarousel/ProjectsCarousel.tsx

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Pagination,
  Mousewheel,
  FreeMode,
} from 'swiper';

// Import Swiper core styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import styles from './ProjectsCarousel.module.scss';
import studiolabCloud from '../../assets/studiolab-cloud-preview.png';
import incoming from '../../assets/incoming-website.png';

type Project = {
  id: number;
  title: string;
  img: string;
  alt?: string;
};

export default function ProjectsCarousel(): JSX.Element {
  // Reference to the Swiper instance for controlling navigation programmatically
  const swiperRef = useRef<any>(null);

  // List of project items to render in the carousel
  const projects: Project[] = [
    { id: 1, title: 'StudioLab Cloud', img: studiolabCloud, alt: 'StudioLab Cloud preview' },
    { id: 2, title: 'COMING SOON',     img: incoming,       alt: 'Browser mockup' },
    { id: 3, title: 'COMING SOON',     img: incoming,       alt: 'Browser mockup' },
    { id: 4, title: 'COMING SOON',     img: incoming,       alt: 'Browser mockup' },
    { id: 5, title: 'COMING SOON',     img: incoming,       alt: 'Browser mockup' },
    { id: 6, title: 'COMING SOON',     img: incoming,       alt: 'Browser mockup' },
  ];

  return (
    <section id="projectsCarousel" className={styles.carouselSection}>
      {/* Section title */}
      <h2 className={styles.title}>PROJECTS</h2>

      {/* Navigation arrows container */}
      <div className={styles.navButtons}>
        {/* Previous button */}
        <button
          className={styles.prevBtn}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
        >
          ‹
        </button>
        {/* Next button */}
        <button
          className={styles.nextBtn}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Swiper carousel */}
      <Swiper
        // Core modules to power coverflow effect, pagination, free scrolling & mouse wheel
        modules={[EffectCoverflow, Pagination, Mousewheel, FreeMode]}

        // Enable coverflow 3D effect
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,        // rotation angle of side slides
          stretch: -100,     // spacing between slides
          depth: 100,        // slide depth
          modifier: 1,       // effect intensity
          slideShadows: false,
        }}

        // Free mode configuration for smooth, momentum-based scrolling
        freeMode={{
          enabled: true,
          sticky: true,            // snap to nearest slide
          momentumRatio: 0.8,      // momentum strength
          momentumBounce: false,   // disable bounce
        }}

        // Enable navigation via mouse wheel
        mousewheel={{
          forceToAxis: true,       // lock scroll axis
          releaseOnEdges: true,    // allow scroll release at edges
          sensitivity: 1,          // scroll sensitivity
        }}

        // Clicking on a slide will focus it
        slideToClickedSlide

        // Center the active slide in the viewport
        centeredSlides

        // Let Swiper calculate how many slides fit
        slidesPerView="auto"

        // Negative space to overlap neighboring cards
        spaceBetween={-100}

        // Speed of slide transition in ms
        speed={500}

        // Enable pagination bullets at the bottom
        pagination={{ clickable: true }}

        // Capture Swiper instance
        onSwiper={(swiper) => { swiperRef.current = swiper; }}

        // Custom container classname for SCSS styling
        className={styles.swiperContainer}

        // Responsive breakpoints
        breakpoints={{
          320:  { slidesPerView: 1.5, },
          768:  { slidesPerView: 2.5, },
          1024: { slidesPerView: 3,   },
        }}
      >
        {/* Render each project slide */}
        {projects.map((project, idx) => (
          <SwiperSlide
            key={project.id}
            className={styles.swiperSlide}
            onClick={() => swiperRef.current?.slideTo(idx)} // Focus on clicked slide
          >
            <div className={styles.card}>
              {/* Project image */}
              <img src={project.img} alt={project.alt ?? project.title} />
              {/* Project title caption */}
              <p className={styles.caption}>{project.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}