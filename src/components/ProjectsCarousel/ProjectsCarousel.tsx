import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Mousewheel, FreeMode } from 'swiper'

// Import core Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import styles from './ProjectsCarousel.module.scss'
import type { Project } from '../../types/projects'

// Props interface defining the carousel inputs
interface ProjectsCarouselProps {
  projects: Project[]                    // Array of projects to display
  onProjectClick: (project: Project) => void  // Callback when a slide is clicked
}

// Functional component for the projects coverflow carousel
export default function ProjectsCarousel({
  projects,
  onProjectClick,
}: ProjectsCarouselProps): JSX.Element {
  // Ref to store the Swiper instance for programmatic control
  const swiperRef = useRef<any>(null)

  return (
    <section id="projectsCarousel" className={styles.carouselSection}>
      {/* Section heading */}
      <h2 className={styles.title}>PROJETS</h2>

      {/* Custom navigation arrows */}
      <div className={styles.navButtons}>
        {/* Previous slide button */}
        <button
          className={styles.prevBtn}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
        >
          ‹
        </button>
        {/* Next slide button */}
        <button
          className={styles.nextBtn}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Swiper carousel setup */}
      <Swiper
        modules={[EffectCoverflow, Pagination, Mousewheel, FreeMode]}  // Enabled modules
        effect="coverflow"                                            // 3D coverflow effect
        coverflowEffect={{                                           
          rotate: 50,       // angle of side slides
          stretch: -100,    // spacing between slides
          depth: 100,       // perspective depth
          modifier: 1,      // effect intensity
          slideShadows: false,
        }}
        freeMode={{                                                   // free scroll configuration
          enabled: true,
          sticky: true,           // snap to nearest slide after scroll
          momentumRatio: 0.8,     // scroll momentum
          momentumBounce: false,  // disable bounce-back
        }}
        mousewheel={{                                                // enable mouse-wheel navigation
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 1,
        }}
        slideToClickedSlide                                           // click slide to focus
        centeredSlides                                               // center active slide
        slidesPerView="auto"                                         // auto number of slides
        spaceBetween={-100}                                          // overlap slides
        speed={500}                                                  // transition duration
        pagination={{ clickable: true }}                            // show pagination bullets
        onSwiper={(swiper) => { swiperRef.current = swiper }}       // capture swiper instance
        className={styles.swiperContainer}                          // custom styling
        breakpoints={{                                               // responsive settings
          320:  { slidesPerView: 1.5 },
          768:  { slidesPerView: 2.5 },
          1024: { slidesPerView: 3   },
        }}
      >
        {/* Render each project as a slide */}
        {projects.map((project, idx) => (
          <SwiperSlide
            key={project.id}
            className={styles.swiperSlide}
            onClick={() => onProjectClick(project)}  // notify parent of clicked project
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
  )
}