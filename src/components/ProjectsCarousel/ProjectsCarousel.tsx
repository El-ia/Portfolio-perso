import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Mousewheel, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import styles from './ProjectsCarousel.module.scss';
import studiolabCloud from '../../assets/studiolab-cloud-preview.png';
import incoming from '../../assets/incoming-website.png';

// Define the shape of a project item
type Project = {
  id: number;
  title: string;
  img: string;
  alt?: string;
};

export default function ProjectsCarousel(): JSX.Element {
  // Array of projects to display in the carousel, strictly typed
  const projects: Project[] = [
    { id: 1, title: 'StudioLab Cloud', img: studiolabCloud, alt: 'StudioLab Cloud project preview' },
    { id: 2, title: 'COMING SOON', img: incoming, alt: 'browser mockup with a plant' },
    { id: 3, title: 'COMING SOON', img: incoming, alt: 'browser mockup with a plant' },
    { id: 4, title: 'COMING SOON', img: incoming, alt: 'browser mockup with a plant' },
    { id: 5, title: 'COMING SOON', img: incoming, alt: 'browser mockup with a plant' },
    { id: 6, title: 'COMING SOON', img: incoming, alt: 'browser mockup with a plant' },
  ];

  // Return the JSX layout for the carousel section
  return (
    <section id="projectsCarousel" className={styles.carouselSection}>
      {/* Section heading */}
      <h2 className={styles.heading}>PROJECTS</h2>

      {/* Swiper component used to create the carousel */}
      <Swiper
        modules={[EffectCoverflow, Pagination, Mousewheel, FreeMode]} // Swiper modules being used
        effect="coverflow" // Coverflow-style carousel effect
        freeMode={{
          enabled: true,     // Allows free scrolling
          sticky: true,      // Slides stick into place after scrolling
          momentumRatio: 0.5 // Scroll momentum
        }}
        mousewheel={{
          forceToAxis: false,     // Allows free scrolling in all directions
          releaseOnEdges: true    // Stops scroll at the edge of the Swiper
        }}
        centeredSlides           // Centers the active slide
        slidesPerView={3}        // Number of visible slides
        spaceBetween={-100}      // Overlap between slides
        coverflowEffect={{
          rotate: 50,            // Rotation angle
          stretch: -100,         // How much the slides stretch
          depth: 100,            // Depth perspective
          modifier: 1,           // Effect intensity
          slideShadows: false    // Disables shadow on slides
        }}
        pagination={{ clickable: true }} // Enables clickable dots
        className={styles.swiperContainer} // Custom styling
        breakpoints={{
          // Responsive breakpoints
          320: {
            slidesPerView: 1.5,
            spaceBetween: -50,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: -80,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -100,
          }
        }}
      >
        {/* Render each project as a slide */}
        {projects.map((project: Project) => (
          <SwiperSlide key={project.id} className={styles.swiperSlide}>
            <div className={styles.card}>
              <img src={project.img} alt={project.title} />
              <p className={styles.caption}>{project.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}