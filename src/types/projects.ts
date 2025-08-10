import studiolabCloud from '../assets/studiolab-cloud-preview.png';
import incoming      from '../assets/incoming-website.png';
import cssIcon    from '../assets/icons/css-icon.png';
import htmlIcon    from '../assets/icons/html-icon.png';
import jsIcon    from '../assets/icons/js-icon.png';
import watheringCan   from '../assets/icons/watering-can-icon.png';
import portfolio from '../assets/portfolio-preview.png';
import reactIcon from '../assets/icons/react-icon.png';
import typescriptIcon from '../assets/icons/typescript-icon.png';
import viteIcon from '../assets/icons/vite-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';

// Defines the shape of a project item for the carousel and modal
export interface Project {
  id: number;
  title: string;
  img: string;
  alt?: string;
  year: number;
  description: string[];
  techIcons: string[];
  githubUrl?: string;
  liveUrl?: string;
}
// List of all projects to display in the carousel and modals
export const projects: Project[] = [
  {
    id: 1,
    title: 'PORTFOLIO • 2025',
    img: portfolio,
    alt: 'Aperçu du portfolio d’Elia',
    year: 2025,
    description: [
      "Portfolio interactif et immersif, alliant fluidité, animations soignées et design responsive. Conçu avec React, TypeScript et Vite pour des performances optimales, et structuré en SCSS Modules avec données typées. Inclut un carrousel dynamique avec modales, ainsi que des options pratiques : contact direct, partage natif et téléchargement du CV."
    ],
    techIcons: [reactIcon, typescriptIcon, viteIcon, sassIcon],
    githubUrl: 'https://github.com/El-ia/Portfolio-perso',
    liveUrl: 'https://ton-domaine-ou-vercel.app'
  },
  {
    id: 2,
    title: 'STUDIOLAB CLOUD • 2025',
    img: studiolabCloud,
    alt: 'StudioLab Cloud preview',
    year: 2025,
    description: [
      "Une plateforme web imaginée par l’agence Studiolab pour offrir aux entreprises une solution clé en main d’hébergement et de gestion d’infrastructures cloud.",
      "Durant mon stage, à l’issue de ma formation de développeuse web full stack, j’ai pris en charge la quasi-intégralité du front-end : de la phase de maquettage sur Figma à l’intégration des pages en JavaScript (avec un soupçon de vanilla pour les interactions).",
      "Mon rôle consistait à traduire les prototypes en interfaces réactives et accessibles, en veillant à la cohérence visuelle et à la performance.",
    ],
    techIcons: [htmlIcon, cssIcon, jsIcon],
    liveUrl: 'https://studiolabcloud.com/'
  },
  {
    id: 3,
    title: 'COMING SOON',
    img: incoming,
    alt: 'Browser mockup',
    year: 2025,
    description: ["C’est pas encore prêt, mais c’est bio."],
    techIcons: [watheringCan],
  },
];