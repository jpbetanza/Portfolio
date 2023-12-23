import ameLogo from '../../assets/ameLogo.png'
import maraIris from '../../assets/maraIris.png'
import maraWink from '../../assets/maraWink.png'
import subtraiame from '../../assets/subtraiame.png'
import tcc from '../../assets/tcc.png'

import bootstrap from '../../assets/bootstrap.png'
import django from '../../assets/django.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import matlab from '../../assets/matlab.png'

// Isso da erro, sei lá o pq
// import { ameLogo, mara, subtraiame, django, js, bootstrap, python, react, html, tailwind  } from "../../assets"

export const tools = [
    {nome: 'React',img: react},
    {nome: 'Tailwind',img: tailwind},
    {nome: 'Javascript',img: js},
    {nome: 'HTML',img: html},
    {nome: 'Python',img: python},
    {nome: 'Django',img: django},
]

export const db = [
    {
        nomePt:'Programa AME',
        descPt:'Website produzido em colaboração com o projeto de Doutorado de alunos do departamento de Saúde Coletiva, na UFRN',
        nomeEn:'Programa AME',
        descEn:'A website designed to support a project by doctorate students from the Department of Collective Health at the Federal University of Rio Grande do Norte (UFRN)',
        vercel: 'https://programa-ame.vercel.app/',
        url:'https://github.com/jpbetanza/Programa-AME',
        src: ameLogo,
        imgautor:'',
        utils: [django,python,bootstrap,html,js],
    },
    {
        nomePt:'Mara Iris',
        descPt:'Mara Iris é um teclado virtual de controle por rastreio de íris para pessoas com esclerose lateral amiotrófica',
        nomeEn:'Mara Iris',
        descEn:'Mara is a virtual keyboard that helps individuals with amyotrophic lateral schlerosis communicate with eye movements',
        vercel: 'https://mara2.vercel.app',
        url:'https://github.com/jpbetanza/Mara2',
        src: maraIris,
        imgautor: 'https://www.instagram.com/caro_peppe',
        utils: [react,tailwind,html,js],
    },
    {
        nomePt:'Mara Wink',
        descPt:'Mara Wink é um teclado virtual de controle por detecção de piscadas de olho para pessoas com esclerose lateral amiotrófica',
        nomeEn:'Mara Wink',
        descEn:'Mara is a virtual keyboard that helps individuals with amyotrophic lateral schlerosis communicate with eye blinking',
        vercel: 'https://mara3.vercel.app',
        url:'https://github.com/jpbetanza/Mara3',
        src: maraWink,
        imgautor: 'https://www.instagram.com/caro_peppe',
        utils: [react,tailwind,html,js],
    },
    {
        nomePt:'Subtraia-me',
        descPt:'Um simpático jogo matemático, criado por diversão. Seria você capaz de ganhar?',
        nomeEn:'Subtraia-me',
        descEn:'A friendly math game, made for fun. Are you able to win?',
        vercel: 'https://subtraia-me.vercel.app/',
        url:'https://github.com/jpbetanza/Subtraia.me',
        src: subtraiame,
        imgautor:'',
        utils: [react,tailwind,html,js],
    },
    {
        nomePt:'Segmentação de Pneumonia',
        descPt:'Meu trabalho de conclusão de curso, voltado para processamento digital de imagens. Segmentação da pneumonia causada por COVID-19 em imagens tomográficas',
        nomeEn:'Pneumonia segmentation',
        descEn:'My final undergraduate project focused on digital image processing. It involved the segmentation of COVID-19 pneumonia in tomographic images.',
        vercel: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS/blob/main/Segmenta%C3%A7%C3%A3odaPneumonia_Caro_2022.pdf',
        url: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS',
        src: tcc,
        imgautor:'',
        utils: [matlab]
    }
]