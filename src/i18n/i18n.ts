export type Lang = 'fr' | 'en'

// Nested dictionary type (no `any`)
export type Dict =
  | string
  | number
  | null
  | undefined
  | Dict[]
  | { [k: string]: Dict }

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
export const messages: Record<Lang, Dict> = {
  fr: {
    nav: {
      about: 'À PROPOS',
      projects: 'PROJETS',
      skills: 'COMPÉTENCES',
      timeline: 'PARCOURS',
      contact: 'CONTACT',
      cv: 'CV',
    },
    hero: {
      cta: 'VOIR MES PROJETS',
      roleLine1: 'Développeuse web',
      roleLine2: 'full stack',
      portfolioWord: 'PORTFOLIO .',
    },
    sections: {
      about: 'À PROPOS',
      projects: 'PROJETS',
      skills: 'COMPÉTENCES',
      timeline: 'PARCOURS',
      contact: 'CONTACT',
    },
    a11y: {
      downloadCv: 'Télécharger mon CV (PDF)',
      menuOpen: 'Ouvrir le menu rapide',
      menuClose: 'Fermer le menu rapide',
      toEnglish: 'Passer le site en anglais',
      toFrench: 'Repasser le site en français',
      darkOn: 'Activer le mode nuit',
      darkOff: 'Revenir au mode jour',
      closeModal: 'Fermer la fenêtre',
      prev: 'Précédent',
      next: 'Suivant',
      sharePage: 'Partager cette page',
    },

    // ---------------- About ----------------
    about: {
      title: 'À PROPOS',
      loopText:
        'DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦ DISPONIBLE ✦',
      copy: [
        "Bonjour ! Je m'appelle Elia et j'aime créer des choses qui prennent vie sur le web. J'ai découvert le développement en 2022, en bidouillant des sites et en apprenant HTML et CSS par curiosité.",
        "Aujourd'hui, je suis développeuse web full stack, formée chez O'clock et diplômée d'un titre professionnel.",
        "Pendant mon stage chez Studiolab, j’ai participé à la création d’un site de services informatiques complet, en particulier sur la partie front-end, avec un tableau de bord client et un back-office. Ce projet concret m’a beaucoup appris.",
        "Je cherche une entreprise où je pourrai continuer à progresser, relever des défis utiles et m'investir pleinement. Je suis curieuse, rigoureuse et j'aime vraiment comprendre comment tout fonctionne.",
      ],
      location: 'Île de France • Full remote',
    },

    // ---------------- Skills ----------------
    skills: {
      title: 'COMPÉTENCES',
      categories: {
        frontend: 'Front-End',
        backend: 'Back-End',
        devops: 'DevOps',
        tools: 'Outils',
      },
    },

    // ---------------- Timeline ----------------
    timeline: {
      title: 'PARCOURS',
      byId: {
        1: {
          title:
            'OBTENTION DU TITRE PROFESSIONNEL • DÉVELOPPEUR WEB ET WEB MOBILE',
          description: [
            'À l’issue de ma formation chez O’Clock, j’ai obtenu ce diplôme reconnu par l’État (niveau bac +2).',
          ],
          date: 'Juin 25',
        },
        2: {
          title: 'DÉVELOPPEUSE FULL STACK • STAGE STUDIOLAB',
          description: [
            'J’ai contribué à la création du site Studiolab Cloud, une plateforme permettant aux clients de gérer leurs abonnements, effectuer des achats, consulter leurs factures et accéder à différents services web à partir d’un tableau de bord unique.',
            'Ce projet visait à simplifier l’expérience utilisateur et à centraliser l’ensemble des services proposés par l’entreprise dans un espace en ligne moderne et accessible.',
          ],
          date: 'Fév.–Mai 25',
        },
        3: {
          title: 'FORMATION DÉVELOPPEUR WEB ET WEB MOBILE • O’CLOCK',
          description: [
            'Une formation intensive de 8 mois qui prépare à concevoir, développer et maintenir des sites et applications web complets, en maîtrisant le front-end et le back-end.',
            'Cette expérience m’a permis de maîtriser le développement complet de sites et applications web (front-end et back-end), la gestion de bases de données et les bonnes pratiques professionnelles.',
          ],
          date: 'Sept. 24–Fév. 25',
        },
        4: {
          title: 'PERMIS VACANCES TRAVAIL • AUSTRALIE',
          description: [
            'Durant mon voyage en Australie, j’ai travaillé dans divers emplois, ce qui m’a permis d’acquérir un excellent niveau d’anglais.',
            'Cette expérience m’a également appris à m’adapter et à évoluer dans des environnements variés, des atouts que j’applique aujourd’hui dans mes projets web.',
          ],
          date: 'Déc. 22–Juin 23',
        },
        5: {
          title: 'EXPÉRIENCES DANS LA RESTAURATION • À TRAVERS LA FRANCE',
          description: [
            'J’ai longtemps travaillé en tant que serveuse, cheffe de rang et parfois responsable dans ce domaine. Au fil des saisons et des expériences, j’ai développé une grande capacité d’adaptation, de polyvalence et de patience.',
            'Ces postes m’ont aussi appris à gérer le stress, à travailler efficacement en équipe et à entretenir un sens aigu du service et de la relation client. Ces précieuses années m’ont forgée et continuent d’alimenter ma motivation et ma détermination au quotidien, dans tous mes projets.',
          ],
          date: '2017–23',
        },
        6: {
          title:
            'MASTER TOURISME ET DÉVELOPPEMENT • UNIVERSITÉ DE TOULOUSE JEAN JAURÈS',
          description: [
            'J’ai suivi ce master orienté vers la conception et la gestion de projets touristiques, avec une approche pluridisciplinaire mêlant aménagement, marketing et développement territorial.',
            'Cette formation m’a permis d’acquérir des compétences en gestion de projet, en communication et en méthodologie, ainsi qu’une solide capacité à analyser les besoins, planifier efficacement et collaborer avec différents interlocuteurs.',
          ],
          date: '2016–17',
        },
        7: {
          title:
            'LICENCE MÉDIA CULTURE ET COMMUNICATION • LA CATHOLIQUE DE LILLE',
          description: [
            'Cette licence est centrée sur l’analyse des médias, les stratégies de communication et la compréhension des enjeux culturels contemporains.',
            'Cette formation m’a permis de développer des compétences en rédaction, en veille informationnelle et en conception de contenus. J’ai également acquis une sensibilité particulière aux questions d’image et de transmission des messages.',
          ],
          date: '2013–16',
        },
      },
    },

    // ---------------- Contact ----------------
    contact: {
      title: 'CONTACT',
      downloadCta: 'Voir mon CV complet',
      info: {
        email: 'Email',
        phone: 'Téléphone',
        address: 'Adresse',
        links: 'Liens',
      },
      addressValue: 'Paris | 18ᵉ arrondissement, France',
      form: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer',
      },
      intro: [
        'Envie de travailler ensemble ou de me confier votre projet ?',
        'Je reste disponible et à l’écoute de nouvelles opportunités ou collaborations inspirantes.',
        'Si vous souhaitez me proposer un projet, échanger autour d’une idée ou simplement prendre contact, je serai ravie d’en discuter avec vous.',
      ],
    },

    // ---------------- Projects ----------------
    projects: {
      byId: {
        1: {
          title: 'PORTFOLIO • 2025',
          alt: 'Aperçu du portfolio d’Elia',
          year: 2025,
          description: [
            'Portfolio interactif et immersif, alliant fluidité, animations soignées et design responsive.',
            'Conçu avec React, TypeScript et Vite pour des performances optimales, et structuré en SCSS Modules avec données typées.',
            'Il intègre un mode nuit et un système multilingue, un carrousel dynamique avec modales, ainsi que des options pratiques : contact direct, partage natif et téléchargement du CV.',
          ],
          githubUrl: 'https://github.com/El-ia/Portfolio-perso',
          liveUrl: 'https://elia-berthier-peach.vercel.app/',
        },
        2: {
          title: 'STUDIOLAB CLOUD • 2025',
          alt: 'StudioLab Cloud preview',
          year: 2025,
          description: [
            "Une plateforme web imaginée par l’agence Studiolab pour offrir aux entreprises une solution clé en main d’hébergement et de gestion d’infrastructures cloud.",
            "Durant mon stage, à l’issue de ma formation de développeuse web full stack, j’ai pris en charge la quasi-intégralité du front-end : de la phase de maquettage sur Figma à l’intégration des pages en JavaScript (avec un soupçon de vanilla pour les interactions).",
            "Mon rôle consistait à traduire les prototypes en interfaces réactives et accessibles, en veillant à la cohérence visuelle et à la performance.",
          ],
          liveUrl: 'https://studiolabcloud.com/',
        },
        3: {
          title: 'EN PRÉPARATION',
          alt: 'Browser mockup',
          year: 2025,
          description: ["C’est pas encore prêt, mais c’est bio."],
        },
      },
      modal: {
        githubBtn: 'GitHub',
        liveBtn: 'Jetez un œil',
      },
    },

    // ---------------- Footer ----------------
    footer: {
      text: '© 2025 Elia Berthier. Tous droits réservés.',
    },
  },

  // ============================ EN ============================
  en: {
    nav: {
      about: 'ABOUT',
      projects: 'PROJECTS',
      skills: 'SKILLS',
      timeline: 'TIMELINE',
      contact: 'CONTACT',
      cv: 'CV',
    },
    hero: {
      cta: 'SEE MY PROJECTS',
      roleLine1: 'Web developer',
      roleLine2: 'full stack',
      portfolioWord: 'PORTFOLIO .',
    },
    sections: {
      about: 'ABOUT',
      projects: 'PROJECTS',
      skills: 'SKILLS',
      timeline: 'TIMELINE',
      contact: 'CONTACT',
    },
    a11y: {
      downloadCv: 'Download my CV (PDF)',
      menuOpen: 'Open quick menu',
      menuClose: 'Close quick menu',
      toEnglish: 'Switch site language to English',
      toFrench: 'Switch site language to French',
      darkOn: 'Enable dark mode',
      darkOff: 'Back to light mode',
      closeModal: 'Close dialog',
      prev: 'Previous',
      next: 'Next',
      sharePage: 'Share this page',
    },

    // ---------------- About ----------------
    about: {
      title: 'ABOUT',
      loopText:
        'AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦ AVAILABLE ✦',
      copy: [
        "Hi! I'm Elia and I love creating things that come to life on the web. I discovered development in 2022 by tinkering with websites and learning HTML and CSS out of curiosity.",
        "Today, I’m a full-stack web developer, trained at O’clock and holding a professional certification.",
        "During my internship at Studiolab, I contributed to the development of a full IT services website, including a client dashboard and back-office — a hands-on project that taught me a great deal.",
        "I’m looking for a company where I can keep learning, tackle meaningful challenges, and fully commit. I’m curious, thorough, and I genuinely enjoy understanding how everything works.",
      ],
      location: 'Île-de-France • Fully remote',
    },

    // ---------------- Skills ----------------
    skills: {
      title: 'SKILLS',
      categories: {
        frontend: 'Front-End',
        backend: 'Back-End',
        devops: 'DevOps',
        tools: 'Tools',
      },
    },

    // ---------------- Timeline ----------------
    timeline: {
      title: 'TIMELINE',
      byId: {
        1: {
          title:
            'PROFESSIONAL CERTIFICATION EARNED • WEB & MOBILE WEB DEVELOPER',
          description: [
            'After completing my training at O’Clock, I earned this state-recognized diploma (equivalent to 2-year higher education).',
          ],
          date: 'Jun 25',
        },
        2: {
          title: 'FULL-STACK DEVELOPER • STUDIOLAB INTERNSHIP',
          description: [
            'I contributed to the creation of the Studiolab Cloud website—a platform where clients can manage subscriptions, make purchases, view invoices, and access various web services from a single dashboard.',
            'The goal was to simplify the user experience and centralize all the company’s services in a modern, accessible online space.',
          ],
          date: 'Feb–May 25',
        },
        3: {
          title: 'WEB & MOBILE WEB DEVELOPER TRAINING • O’CLOCK',
          description: [
            'An intensive 8-month program to design, build, and maintain complete web sites and applications, mastering both front-end and back-end.',
            'This experience helped me master full-stack development (front-end and back-end), database management, and professional best practices.',
          ],
          date: 'Sep 24–Feb 25',
        },
        4: {
          title: 'WORKING HOLIDAY VISA • AUSTRALIA',
          description: [
            'During my trip to Australia, I worked in various jobs and reached an excellent level of English.',
            'This experience also taught me to adapt and thrive in different environments—skills I now apply to my web projects.',
          ],
          date: 'Dec 22–Jun 23',
        },
        5: {
          title: 'HOSPITALITY EXPERIENCE • ACROSS FRANCE',
          description: [
            'I worked for several years as a waitress, head waitress, and sometimes manager. Over the seasons and experiences, I developed strong adaptability, versatility, and patience.',
            'These roles also taught me to handle stress, work efficiently in a team, and maintain a keen sense of service and client relations. Those valuable years shaped me and still fuel my motivation and determination every day in all my projects.',
          ],
          date: '2017–23',
        },
        6: {
          title:
            'MASTER’S IN TOURISM & DEVELOPMENT • UNIVERSITY OF TOULOUSE—JEAN JAURÈS',
          description: [
            'A master’s program focused on designing and managing tourism projects, with a multidisciplinary approach combining planning, marketing, and territorial development.',
            'It taught me project management, communication, and methodology, as well as a solid ability to analyze needs, plan effectively, and collaborate with different stakeholders.',
          ],
          date: '2016–17',
        },
        7: {
          title:
            'BACHELOR’S IN MEDIA, CULTURE & COMMUNICATION • CATHOLIC UNIVERSITY OF LILLE',
          description: [
            'A bachelor’s degree centered on media analysis, communication strategies, and contemporary cultural issues.',
            'I developed skills in writing, information monitoring, and content design, plus a strong sensitivity to visual identity and message delivery.',
          ],
          date: '2013–16',
        },
      },
    },

    // ---------------- Contact ----------------
    contact: {
      title: 'CONTACT',
      downloadCta: 'View my full CV',
      info: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        links: 'Links',
      },
      addressValue: 'Paris | 18th arrondissement, France',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send',
      },
      intro: [
        'Interested in working together or sharing your project?',
        'I’m open to new opportunities and inspiring collaborations.',
        'If you’d like to propose a project, discuss an idea, or simply get in touch, I’d be happy to talk.',
      ],
    },

    // ---------------- Projects ----------------
    projects: {
      byId: {
        1: {
          title: 'PORTFOLIO • 2025',
          alt: 'Elia’s portfolio preview',
          year: 2025,
          description: [
            'Interactive and immersive portfolio combining smooth navigation, refined animations, and responsive design.',
            'Built with React, TypeScript, and Vite for optimal performance, and structured with SCSS Modules and typed data.',
            'It features a dark mode and multilingual support, a dynamic carousel with modals, as well as practical options such as direct contact, native sharing, and résumé download.',
          ],
          githubUrl: 'https://github.com/El-ia/Portfolio-perso',
          liveUrl: 'https://elia-berthier-peach.vercel.app/',
        },
        2: {
          title: 'STUDIOLAB CLOUD • 2025',
          alt: 'StudioLab Cloud preview',
          year: 2025,
          description: [
            'A web platform designed by the Studiolab agency to offer companies a turnkey solution for hosting and managing cloud infrastructures.',
            'During my internship, at the end of my full-stack web developer training, I handled almost the entire front-end: from Figma mockups to page integration in JavaScript (with a touch of vanilla for interactions).',
            'My role was to translate prototypes into responsive and accessible interfaces, ensuring visual consistency and performance.',
          ],
          liveUrl: 'https://studiolabcloud.com/',
        },
        3: {
          title: 'COMING SOON',
          alt: 'Browser mockup',
          year: 2025,
          description: ["It’s not ready yet, but it’s organic."],
        },
      },
      modal: {
        githubBtn: 'GitHub',
        liveBtn: 'Take a look',
      },
    },

    // ---------------- Footer ----------------
    footer: {
      text: '© 2025 Elia Berthier. All rights reserved.',
    },
  },
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Safe getter with "a.b.c" path. Returns the raw value as unknown. */
export function getRaw(obj: Dict, path: string): unknown {
  const parts = path.split('.')
  let cur: unknown = obj
  for (const key of parts) {
    if (cur && typeof cur === 'object' && !Array.isArray(cur) && key in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return cur
}

/** Create a translator bound to a language. Let callers choose the type. */
export function createTranslator(lang: Lang) {
  return function t<T = string>(path: string): T {
    return getRaw(messages[lang], path) as T
  }
}