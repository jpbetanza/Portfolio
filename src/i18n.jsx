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
            introductionTitle: "I'm Developer and Analyst",
            introductionText1: 'With a bachelors in Biomedical Engineering, I fell in love with the programming field during my undergraduate studies. Many of my coursework projects were focused on web development, and I enjoy creating responsive and visually appealing applications. While I am more involved with Front-End development, using skills in React, Tailwind, and Bootstrap, I also have familiarity with Back-End development, utilizing Django and NodeJS.',
            introductionText2: "I also have an desire to explore data and obtain valious information about any topic that grabs my interest. I have data analysis experience through a variety of undergraduate projects (including my final undergraduate project with Digital Image Processing), my last position as Clinical Engineering Manager, and some recent autonomous DB analysis",
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
            introductionTitle: 'Sou Desenvolvedor e Analista',
            introductionText1: "Formado em Engenharia Biomédica, me apaixonei pela área da programação ainda na graduação, onde diversos dos meus projetos de curso foram feitos com foco em desenvolvimento web. Gosto de criar aplicações responsivas e agradáveis ao olhar. Apesar de me envolver mais com o Front-End, utilizando conhecimentos em React, Tailwind e Bootstrap, eu também tenho familiaridade com o Back-End, com o uso do Django e NodeJS.",
            introductionText2: "Também tenho o desejo de explorar dados e obter informações valiosas sobre qualquer tópico que desperte meu interesse. Possuo experiência em análise de dados por meio de uma variedade de projetos de graduação (incluindo meu projeto de graduação final em Processamento de Imagens Digitais), minha última posição como Gerente de Engenharia Clínica e algumas análises recentes de bancos de dados de forma autônoma.",
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
