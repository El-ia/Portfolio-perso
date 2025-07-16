import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsCarousel from './components/ProjectsCarousel';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <FloatingMenu />
      <Hero />
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

export default App;