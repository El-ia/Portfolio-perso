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

/* ---- Dark variants ---- */
import apiDarkIcon from '../assets/icons/api-dark-icon.png';
import bashDarkIcon from '../assets/icons/bash-dark-icon.png';
import boostrapDarkIcon from '../assets/icons/bootstrap-dark-icon.png';
import dockerDarkIcon from '../assets/icons/docker-dark-icon.png';
import expressDarkIcon from '../assets/icons/express-dark-icon.png';
import gitDarkIcon from '../assets/icons/git-dark-icon.png';
import githubDarkIcon from '../assets/icons/github-dark-icon.png';
import gitlabDarkIcon from '../assets/icons/gitlab-dark-icon.png';
import htmlDarkIcon from '../assets/icons/html-dark-icon.png';
import jsDarkIcon from '../assets/icons/js-dark-icon.png';
import jsDarkIcon2 from '../assets/icons/js-dark2-icon.png';
import macDarkIcon from '../assets/icons/mac-dark-icon.png';
import nginxDarkIcon from '../assets/icons/nginx-dark-icon.png';
import nodeDarkIcon from '../assets/icons/node-dark-icon.png';
import postgreDarkIcon from '../assets/icons/postgresql-dark-icon.png';
import sequelizeDarkIcon from '../assets/icons/sequelize-dark-icon.png';
import swaggerDarkIcon from '../assets/icons/swagger-dark-icon.png';
import linuxDarkIcon from '../assets/icons/linux-dark-icon.png';

/*
  SkillIcon represents a single technology with:
  - icon: default (light) icon path
  - darkIcon?: optional dark-mode icon path
  - label: visible name (not translated)
*/
export type SkillIcon = {
  icon: string;
  darkIcon?: string;
  label: string;
};

/*
  SkillCategory groups multiple SkillIcons under a category:
  - category: fallback label (i18n provides the final one)
  - color: visual variant key
  - icons: list of SkillIcon
*/
export type SkillCategory = {
  category: string;
  color: 'frontend' | 'backend' | 'devops' | 'tools';
  icons: SkillIcon[];
};

// Data array defining all skill categories and their icons
export const skillsData: SkillCategory[] = [
  {
    category: 'Front-End',
    color: 'frontend',
    icons: [
      { icon: htmlIcon,      darkIcon: htmlDarkIcon, label: 'HTML' },
      { icon: cssIcon,                            label: 'CSS' },
      { icon: jsIcon,        darkIcon: jsDarkIcon, label: 'JavaScript' },
      { icon: reactIcon,                          label: 'React' },
      { icon: tsIcon,                             label: 'TypeScript' },
      { icon: bulmaIcon,                          label: 'Bulma' },
      { icon: picoIcon,                           label: 'Pico CSS' },
      { icon: tailwindIcon,                       label: 'Tailwind CSS' },
      { icon: bootStrapIcon, darkIcon: boostrapDarkIcon, label: 'Bootstrap' },
      { icon: sassIcon,                           label: 'Sass' },
      { icon: ejsIcon,                            label: 'EJS' },
      { icon: viteIcon,                           label: 'Vite' },
    ],
  },
  {
    category: 'Back-End',
    color: 'backend',
    icons: [
      { icon: jsWhiteIcon,   darkIcon: jsDarkIcon2,     label: 'JavaScript' },
      { icon: nodeIcon,      darkIcon: nodeDarkIcon,    label: 'Node.js' },
      { icon: postgresIcon,  darkIcon: postgreDarkIcon, label: 'PostgreSQL' },
      { icon: sequelizeIcon, darkIcon: sequelizeDarkIcon, label: 'Sequelize' },
      { icon: expressIcon,   darkIcon: expressDarkIcon, label: 'Express.js' },
      { icon: apiIcon,       darkIcon: apiDarkIcon,     label: 'API REST' },
      { icon: swaggerIcon,   darkIcon: swaggerDarkIcon, label: 'Swagger' },
    ],
  },
  {
    category: 'DevOps',
    color: 'devops',
    icons: [
      { icon: gitWhiteIcon,     darkIcon: gitDarkIcon,     label: 'Git' },
      { icon: githubWhiteIcon,  darkIcon: githubDarkIcon,  label: 'GitHub' },
      { icon: gitLabIcon,       darkIcon: gitlabDarkIcon,  label: 'GitLab' },
      { icon: dockerIcon,       darkIcon: dockerDarkIcon,  label: 'Docker' },
      { icon: nginxIcon,        darkIcon: nginxDarkIcon,   label: 'Nginx' },
      { icon: macIcon,          darkIcon: macDarkIcon,     label: 'MacOS' },
      { icon: linuxIcon,        darkIcon: linuxDarkIcon,   label: 'Linux' },
      { icon: bashIcon,         darkIcon: bashDarkIcon,    label: 'Bash' },
    ],
  },
  {
    category: 'Outils',
    color: 'tools',
    icons: [
      { icon: vscodeIcon,   label: 'VS Code' },
      { icon: figmaIcon,    label: 'Figma' },
      { icon: discordIcon,  label: 'Discord' },
      { icon: slackIcon,    label: 'Slack' },
      { icon: trelloIcon,   label: 'Trello' },
      { icon: notionIcon,   label: 'Notion' },
      { icon: InsomniaIcon, label: 'Insomnia' },
      { icon: eslintIcon,   label: 'ESLint' },
      { icon: jestIcon,     label: 'Jest' },
      { icon: cypressIcon,  label: 'Cypress' },
    ],
  },
];