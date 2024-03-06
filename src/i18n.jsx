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
            introductionTitle: "Aspiring Data Scientist",
            introductionText1: "With a Bachelor's degree in Biomedical Engineering, I discovered my passion for programming during my undergraduate studies. Many of my coursework projects were centered around web development, where I found joy in creating responsive and visually appealing applications. While I primarily focus on Front-End development, utilizing skills in React, Tailwind, and Bootstrap, I also possess familiarity with Back-End development, employing Django.",
            introductionText2: "I am driven by a strong desire to delve into the realm of data science and unearth valuable insights on topics that captivate my interest. I have gained experience in data analysis through various undergraduate projects, including my final project in Digital Image Processing. Additionally, my background as a Clinical Engineering Manager has equipped me with practical experience in leveraging data analysis to optimize processes. I am eager to transition into the role of a Data Scientist and continue my journey in exploring the vast possibilities of data.",            
            toolsTitle:'Tools I use',
            projectsTitle:'My Projects',
            contactTitle:'Work with me',
            contactText:'You can get to know me more on the links below',
        },
    },
    pt: {
        translation: {
            langButton:'English',
            greeting: 'Sou João Pedro',
            introductionTitle: 'Aspirante a Cientista de Dados',
            introductionText1: "Com um bacharelado em Engenharia Biomédica, descobri minha paixão pela programação durante meus estudos de graduação. Muitos dos meus projetos de curso foram focados no desenvolvimento web, onde encontrei prazer em criar aplicativos responsivos e visualmente atrativos. Embora eu me concentre principalmente no desenvolvimento Front-End, utilizando habilidades em React, Tailwind e Bootstrap, também tenho familiaridade com o desenvolvimento Back-End, utilizando Django.",
            introductionText2: "Sou impulsionado por um forte desejo de mergulhar no mundo da ciência de dados e descobrir insights valiosos sobre tópicos que me cativam. Adquiri experiência em análise de dados por meio de diversos projetos de graduação, incluindo meu projeto final em Processamento Digital de Imagens. Além disso, minha experiência como Gerente de Engenharia Clínica me proporcionou conhecimento prático na alavancagem da análise de dados para otimizar processos. Estou ansioso para fazer a transição para o papel de Cientista de Dados e continuar minha jornada explorando as vastas possibilidades dos dados.",
            toolsTitle:'Ferramentas que utilizo',
            projectsTitle:'Meus Projetos',
            contactTitle:'Trabalhe comigo',
            contactText:'Você pode conhecer mais sobre mim nos links abaixo',
        },
    },
  },
  lng: 'en', // default language
  fallbackLng: 'pt', // fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
