import htmlIcon from '../assets/icons/html-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import jsIcon from '../assets/icons/js-icon.png';
import reactIcon from '../assets/icons/react-icon.png';
import tsIcon from '../assets/icons/typescript-icon.png';
import bulmaIcon from '../assets/icons/bulma-icon.png';
import picoIcon from '../assets/icons/pico-icon.png';
import tailwindIcon from '../assets/icons/tailwind-icon.png';
import bootStrapIcon from '../assets/icons/bootstrap-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';
import ejsIcon from '../assets/icons/ejs-icon.png';
import viteIcon from '../assets/icons/vite-icon.png';

import jsWhiteIcon from '../assets/icons/js-white-icon.png';
import nodeIcon from '../assets/icons/nodejs-icon.png';
import postgresIcon from '../assets/icons/postgres-icon.png';
import sequelizeIcon from '../assets/icons/sequelize-icon.png';
import expressIcon from '../assets/icons/express-icon.png';
import apiIcon from '../assets/icons/api-icon.png';
import swaggerIcon from '../assets/icons/swagger-icon.png';

import gitWhiteIcon from '../assets/icons/git-white-icon.png';
import githubWhiteIcon from '../assets/icons/github-white-icon.png';
import gitLabIcon from '../assets/icons/gitlab-icon.png';
import dockerIcon from '../assets/icons/docker-icon.png';
import nginxIcon from '../assets/icons/nginx-icon.png';
import macIcon from '../assets/icons/mac-icon.png';
import linuxIcon from '../assets/icons/linux-icon.png';
import bashIcon from '../assets/icons/bash-icon.png';

import vscodeIcon from '../assets/icons/vscode-icon.png';
import figmaIcon from '../assets/icons/figma-icon.png';
import discordIcon from '../assets/icons/discord-icon.png';
import slackIcon from '../assets/icons/slack-icon.png';
import trelloIcon from '../assets/icons/trello-icon.png';
import notionIcon from '../assets/icons/notion-icon.png';
import InsomniaIcon from '../assets/icons/insomnia-icon.png';
import eslintIcon from '../assets/icons/estlint-icon.png';
import jestIcon from '../assets/icons/jest-icon.png';
import cypressIcon from '../assets/icons/cypress-icon.png';

/*
  SkillIcon represents a single technology with:
  - icon: path to the image file
  - label: the display name (also used for the HTML alt attribute)
*/
export type SkillIcon = {
  icon: string;
  label: string; // proper noun, not translated
};

/*
  SkillCategory groups multiple SkillIcons under a category:
  - category: visible section title (fallback only; i18n provides the final label)
  - color: modifier used for styling variants and for i18n key mapping
  - icons: array of SkillIcon entries
*/
export type SkillCategory = {
  category: string; // fallback text; your component reads i18n first
  color: 'frontend' | 'backend' | 'devops' | 'tools';
  icons: SkillIcon[];
};

// Data array defining all skill categories and their icons
export const skillsData: SkillCategory[] = [
  {
    category: 'Front-End',
    color: 'frontend',
    icons: [
      { icon: htmlIcon, label: 'HTML' },
      { icon: cssIcon, label: 'CSS' },
      { icon: jsIcon, label: 'JavaScript' },
      { icon: reactIcon, label: 'React' },
      { icon: tsIcon, label: 'TypeScript' },
      { icon: bulmaIcon, label: 'Bulma' },
      { icon: picoIcon, label: 'Pico CSS' },
      { icon: tailwindIcon, label: 'Tailwind CSS' },
      { icon: bootStrapIcon, label: 'Bootstrap' },
      { icon: sassIcon, label: 'Sass' },
      { icon: ejsIcon, label: 'EJS' },
      { icon: viteIcon, label: 'Vite' },
    ],
  },
  {
    category: 'Back-End',
    color: 'backend',
    icons: [
      { icon: jsWhiteIcon, label: 'JavaScript' },
      { icon: nodeIcon, label: 'Node.js' },
      { icon: postgresIcon, label: 'PostgreSQL' },
      { icon: sequelizeIcon, label: 'Sequelize' },
      { icon: expressIcon, label: 'Express.js' },
      { icon: apiIcon, label: 'API REST' },
      { icon: swaggerIcon, label: 'Swagger' },
    ],
  },
  {
    category: 'DevOps',
    color: 'devops',
    icons: [
      { icon: gitWhiteIcon, label: 'Git' },
      { icon: githubWhiteIcon, label: 'GitHub' },
      { icon: gitLabIcon, label: 'GitLab' },
      { icon: dockerIcon, label: 'Docker' },
      { icon: nginxIcon, label: 'Nginx' },
      { icon: macIcon, label: 'MacOS' },
      { icon: linuxIcon, label: 'Linux' },
      { icon: bashIcon, label: 'Bash' },
    ],
  },
  {
    category: 'Outils', 
    color: 'tools',
    icons: [
      { icon: vscodeIcon, label: 'VS Code' },
      { icon: figmaIcon, label: 'Figma' },
      { icon: discordIcon, label: 'Discord' },
      { icon: slackIcon, label: 'Slack' },
      { icon: trelloIcon, label: 'Trello' },
      { icon: notionIcon, label: 'Notion' },
      { icon: InsomniaIcon, label: 'Insomnia' },
      { icon: eslintIcon, label: 'ESLint' },
      { icon: jestIcon, label: 'Jest' },
      { icon: cypressIcon, label: 'Cypress' },
    ],
  },
];