import NavBar          from '../NavBar/NavBar';
import FloatingMenu     from '../FloatingMenu/FloatingMenu';
import Hero             from '../Hero/Hero';
import About            from '../About/About';
import Skills           from '../Skills/Skills';
import ProjectsCarousel from '../ProjectsCarousel/ProjectsCarousel';
import ProjectModal     from '../ProjectModal/ProjectModal';
import Timeline         from '../Timeline/Timeline';
import Contact          from '../Contact/Contact';
import Footer           from '../Footer/Footer';

export default function App() {
  
  return (
    <>
      <Hero />
      <NavBar />
      <FloatingMenu />
      <About />
      <Skills />
      <ProjectsCarousel />
      <ProjectModal />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
