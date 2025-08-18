# 🌐 Portfolio — Elia Berthier

![Portfolio preview](docs/preview-readme.png)

[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Live-black?logo=vercel)](https://elia-berthier.vercel.app)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)

---

## 📌 Overview

A modern, responsive portfolio built with **React + TypeScript**, showcasing projects, skills, and career path.  
Includes smooth animations, dynamic components, and multi-language support for an interactive experience.  

🚀 **Live demo**: [https://elia-berthier-peach.vercel.app/](https://elia-berthier-peach.vercel.app/)

---

## ✨ Features

- **Hero section**: Visual intro with name
- **About**: Personal presentation
- **Projects carousel**: Smooth navigation (Swiper.js)
- **Skills**: Typed and visual list
- **Timeline**: Animated career path
- **Contact**: Form or direct links
- **Responsive mode**: Mobile sidebar with animation
- **Dark mode**: Toggleable theme for better comfort
- **Language switch**: Interface available in multiple languages  

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build tool**: [Vite](https://vitejs.dev/)
- **Styles**: SCSS Modules + variables
- **Carousel**: [Swiper.js](https://swiperjs.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/El-ia/Portfolio-perso.git
cd mon-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

---

## 🏗️ Build & Deployment

Deployed with Vercel:
1.	Push changes to main
2.	Vercel automatically detects and deploys

```bash
npm run build
```

---

## 📂 Structure du projet

```plaintext

mon-portfolio/
│
├── public/                               # Static files
│
├── src/
│   ├── assets/                           # Assets
│   │   ├── fonts/                        # Fonts
│   │   └── icons/                        # Icons
│   │
│   ├── components/                       # Reusable components
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
│   ├── context/                          # React global context
│   │   ├── LanguageContext.ts            # Context creation
│   │   ├── LanguageProvider.tsx          # Global provider wrapping the app
│   │   └── useLang.ts                    # Custom hook for easy access
│   │
│   ├── i18n/                             # Internationalization
│   │   └── i18n.ts                       # Config & translation dictionaries
│   │
│   ├── styles/                           # Global styles
│   │   ├── _reset.scss
│   │   ├── _variables.scss
│   │   └── main.scss
│   │
│   ├── types/                            # TypeScript types
│   │   ├── global.d.ts                   # Global types
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── timelines.ts
│   │
│   └── main.tsx                          # React entry point
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

This project is protected — personal use only.
For any request or collaboration, feel free to contact me.
