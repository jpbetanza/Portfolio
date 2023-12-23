// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  // configuration options
  resources: {
    en: {
        translation: {
            langButton:'Português',
            greeting: "I'm João Pedro",
            introductionTitle: "I'm a Web Developer",
            introductionText: 'With a bachelors in Biomedical Engineering, I fell in love with the programming field during my undergraduate studies. Many of my coursework projects were focused on web development, and I enjoy creating responsive and visually appealing applications. While I am more involved with Front-End development, using skills in React, Tailwind, and Bootstrap, I also have familiarity with Back-End development, utilizing Django and NodeJS.',
            toolsTitle:'Tools I use',
            projectsTitle:'My Projects',
            contactTitle:'Work with me',
            contactText:'You can get to know me more on the links below',
        },
    },
    pt: {
        translation: {
            langButton:'English',
            greeting: 'Me chamo João Pedro!',
            introductionTitle: 'Sou Desenvolvedor Web',
            introductionText: "Formado em Engenharia Biomédica, me apaixonei pela área da programação ainda na graduação, onde diversos dos meus projetos de curso foram feitos com foco em desenvolvimento web. Gosto de criar aplicações responsivas e agradáveis ao olhar. Apesar de me envolver mais com o Front-End, utilizando conhecimentos em React, Tailwind e Bootstrap, eu também tenho familiaridade com o Back-End, com o uso do Django e NodeJS.",
            toolsTitle:'Ferramentas que utilizo',
            projectsTitle:'Meus Projetos',
            contactTitle:'Trabalhe comigo',
            contactText:'Você pode conhecer mais sobre mim nos links abaixo',
        },
    },
  },
  lng: 'pt', // default language
  fallbackLng: 'en', // fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
