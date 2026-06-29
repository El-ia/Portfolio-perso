import studiolabCloud from '../assets/studiolab-cloud-preview.png';
import incoming from '../assets/incoming-website.png';
import watheringCan from '../assets/icons/watering-can-icon.png';
import portfolio from '../assets/portfolio-preview.png';
import adoptAPlant from '../assets/adopt-a-plant-preview.png';
import jessicaRozycka from '../assets/jessica-rozycka-preview.png';

import reactIcon from '../assets/icons/react-icon.png';
import typescriptIcon from '../assets/icons/typescript-icon.png';
import viteIcon from '../assets/icons/vite-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';
import htmlIcon from '../assets/icons/html-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import jsIcon from '../assets/icons/js-icon.png';
import angularIcon from '../assets/icons/angular-icon.png';
import firebaseGreenIcon from '../assets/icons/firebase-green-icon.png';
import tailwindIcon from '../assets/icons/tailwind-icon.png';
import nextjsIcon from '../assets/icons/nextjs-icon.png';
import sanityGreenIcon from '../assets/icons/sanity-green-icon.png';

// Shape of a project item
export interface Project {
  id: number;
  img: string;
  year: number;
  techIcons: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Only static, non-translatable data
export const projects: Project[] = [
  {
    id: 5,
    img: jessicaRozycka,
    year: 2026,
    techIcons: [nextjsIcon, typescriptIcon, sanityGreenIcon],
    liveUrl: 'https://jessicarozyckaphoto.fr'
  },
  {
    id: 3,
    img: adoptAPlant,
    year: 2026,
    techIcons: [angularIcon, typescriptIcon, tailwindIcon, firebaseGreenIcon],
    githubUrl: 'https://github.com/El-ia/adopt-a-plant-app',
    liveUrl: 'https://adopt-a-plant-app.web.app/'
  },
  {
    id: 2,
    img: studiolabCloud,
    year: 2025,
    techIcons: [htmlIcon, cssIcon, jsIcon],
    liveUrl: 'https://studiolabcloud.com/'
  },
  {
    id: 1,
    img: portfolio,
    year: 2025,
    techIcons: [reactIcon, typescriptIcon, viteIcon, sassIcon],
    githubUrl: 'https://github.com/El-ia/Portfolio-perso',
    liveUrl: 'https://elia-berthier-peach.vercel.app/'
  },
  {
    id: 4,
    img: incoming,
    year: 2025,
    techIcons: [watheringCan]
  }
];