# 🌐 Portfolio — Elia Berthier

![Aperçu du portfolio](docs/preview-readme.png)

[![Déployé sur Vercel](https://img.shields.io/badge/Vercel-Live-black?logo=vercel)](https://elia-berthier.vercel.app)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)

---

## 📌 Présentation

Portfolio moderne et responsive en **React + TypeScript** permettant de présenter mes projets, compétences et parcours.

🚀 **Live demo** : [https://elia-berthier-peach.vercel.app/](https://elia-berthier-peach.vercel.app/)

---

## ✨ Fonctionnalités

- **Section Hero** : Accroche visuelle et nom
- **À propos** : Présentation personnelle
- **Carrousel de projets** : Navigation fluide (Swiper.js)
- **Compétences** : Liste visuelle et typée
- **Parcours** : Timeline animée
- **Contact** : Formulaire ou liens directs
- **Mode responsive** : Sidebar mobile avec animation
- **Mode nuit** : Thème sombre pour plus de confort visuel
- **Changement de langue** : Interface disponible en plusieurs langues
- 
## 🛠️ Stack technique

- **Framework** : [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build tool** : [Vite](https://vitejs.dev/)
- **Styles** : SCSS Modules + variables
- **Carrousel** : [Swiper.js](https://swiperjs.com/)
- **Déploiement** : [Vercel](https://vercel.com/)

---


## 📦 Installation

```bash
# 1. Cloner le repo
git clone https://github.com/El-ia/Portfolio-perso.git
cd mon-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le projet en développement
npm run dev
```

---

## 🏗️ Build & déploiement

Déploiement sur Vercel :

1.	Pousser les modifications sur main
2.	Vercel détecte et déploie automatiquement

```bash
npm run build
```

---

## 📂 Structure du projet

```plaintext

mon-portfolio/
│
├── public/                               # Fichiers statiques
│
├── src/
│   ├── assets/                           # Ressources
│   │   ├── fonts/                        # Polices
│   │   └── icons/                        # Icônes
│   │
│   ├── components/                       # Composants réutilisables
│   │   ├── About/
│   │   ├── App/
│   │   ├── Contact/
│   │   ├── FloatingMenu/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── NavBar/
│   │   ├── ProjectModal/
│   │   ├── ProjectsCarousel/
│   │   ├── Skills/
│   │   └── Timeline/
│   │
│   ├── context/                          # Contexte global React
│   │   ├── LanguageContext.ts            # Création du contexte
│   │   ├── LanguageProvider.tsx          # Provider global pour wrapper l'app
│   │   └── useLang.ts                    # Hook custom pour accéder facilement au contexte
│   │
│   ├── i18n/                             # Gestion de l'internationalisation
│   │   └── i18n.ts                       # Configuration et dictionnaires de traduction
│   │
│   ├── styles/                           # Styles globaux
│   │   ├── _reset.scss
│   │   ├── _variables.scss
│   │   └── main.scss
│   │
│   ├── types/                            # Types TypeScript
│   │   ├── global.d.ts                   # Types globaux
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── timelines.ts
│   │
│   └── main.tsx                          # Point d'entrée React
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tsconfig.tsbuildinfo
├── vite.config.d.ts
├── vite.config.js
└── vite.config.ts
```

## 📄 Licence

Ce projet est protégé — utilisation personnelle uniquement.
Pour toute demande ou collaboration, merci de me contacter.
