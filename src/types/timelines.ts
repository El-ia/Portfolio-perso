/**
 * TimelineItem represents a single step in the Timeline section:
 * - title: the heading text shown for this entry
 * - description: an array of paragraphs, each rendered on its own line
 * - date: the abbreviated date string displayed beside the entry on hover/focus
 */
export interface TimelineItem {
    title: string;
    description: string[];
    date: string;
}
  
/**
 * timelineData is the ordered list of all parcours entries.
 */
export const timelineData: TimelineItem[] = [
    {
      title: 'OBTENTION DU TITRE PROFESSIONNEL • DÉVELOPPEUR WEB ET WEB MOBILE',
      description: [
        'À l’issue de ma formation chez O’Clock, j’ai obtenu ce diplôme reconnu par l’État (niveau bac +2).'
      ],
      date: 'Juin 25',
    },
    {
      title: 'DÉVELOPPEUSE FULL STACK • STAGE STUDIOLAB',
      description: [
        'J’ai contribué à la création du site Studiolab Cloud, une plateforme permettant aux clients de gérer leurs abonnements, effectuer des achats, consulter leurs factures et accéder à différents services web à partir d’un tableau de bord unique.',
        'Ce projet visait à simplifier l’expérience utilisateur et à centraliser l’ensemble des services proposés par l’entreprise dans un espace en ligne moderne et accessible.'
      ],
      date: 'Fév.–Mai 25',
    },
    {
      title: 'FORMATION DÉVELOPPEUR WEB ET WEB MOBILE • O’CLOCK',
      description: [
        'Une formation intensive de 8 mois qui prépare à concevoir, développer et maintenir des sites et applications web complets, en maîtrisant le front-end et le back-end.',
        'Cette expérience m’a permis de maîtriser le développement complet de sites et applications web (front-end et back-end), la gestion de bases de données et les bonnes pratiques professionnelles.'
      ],
      date: 'Sept. 24–Fév. 25',
    },
    {
      title: 'PERMIS VACANCES TRAVAIL • AUSTRALIE',
      description: [
        'Durant mon voyage en Australie, j’ai travaillé dans divers emplois, ce qui m’a permis d’acquérir un excellent niveau d’anglais.',
        'Cette expérience m’a également appris à m’adapter et à évoluer dans des environnements variés, des atouts que j’applique aujourd’hui dans mes projets web.'
      ],
      date: 'Déc. 22–Juin 23',
    },
    {
      title: 'EXPÉRIENCES DANS LA RESTAURATION • À TRAVERS LA FRANCE',
      description: [
        'J’ai longtemps travaillé en tant que serveuse, cheffe de rang et parfois responsable dans ce domaine. Au fil des saisons et des expériences, j’ai développé une grande capacité d’adaptation, de polyvalence et de patience.',
        'Ces postes m’ont aussi appris à gérer le stress, à travailler efficacement en équipe et à entretenir un sens aigu du service et de la relation client. Ces précieuses années m’ont forgée et continuent d’alimenter ma motivation et ma détermination au quotidien, dans tous mes projets.'
      ],
      date: '2017–23',
    },
    {
      title: 'MASTER TOURISME ET DÉVELOPPEMENT • UNIVERSITÉ DE TOULOUSE JEAN JAURÈS',
      description: [
        'J’ai suivi ce master orienté vers la conception et la gestion de projets touristiques, avec une approche pluridisciplinaire mêlant aménagement, marketing et développement territorial.',
        'Cette formation m’a permis d’acquérir des compétences en gestion de projet, en communication et en méthodologie, ainsi qu’une solide capacité à analyser les besoins, planifier efficacement et collaborer avec différents interlocuteurs.'
      ],
      date: '2016–17',
    },
    {
      title: 'LICENCE MÉDIA CULTURE ET COMMUNICATION • LA CATHOLIQUE DE LILLE',
      description: [
        'Cette licence est centrée sur l’analyse des médias, les stratégies de communication et la compréhension des enjeux culturels contemporains.',
        'Cette formation m’a permis de développer des compétences en rédaction, en veille informationnelle et en conception de contenus. J’ai également acquis une sensibilité particulière aux questions d’image et de transmission des messages.'
      ],
      date: '2013–16',
    },
];