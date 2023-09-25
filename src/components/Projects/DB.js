import ameLogo from '../../assets/ameLogo.png'
import mara from '../../assets/mara.png'
import subtraiame from '../../assets/subtraiame.png'
import tcc from '../../assets/tcc.png'
import ceac from '../../assets/ceac.png'

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
        nome:'CEAC',
        desc:'Um site institucional para o Centro Espírita Amigos de Chico, em Natal - RN',
        vercel: 'https://ceac.vercel.app/',
        url:'https://github.com/jpbetanza/CEAC',
        src: ceac,
        imgautor:'',
        utils: [react,tailwind,html,js],
    },
    {
        nome:'Programa AME',
        desc:'Website produzido em colaboração com o projeto de Doutorado de alunos do departamento de Saúde Coletiva, na UFRN',
        vercel: 'https://programa-ame.vercel.app/',
        url:'https://github.com/jpbetanza/Programa-AME',
        src: ameLogo,
        imgautor:'',
        utils: [django,python,bootstrap,html,js],
    },
    {
        nome:'Mara',
        desc:'Mara é um teclado virtual de controle ocular para pessoas com esclerose lateral amiotrófica',
        vercel: 'https://mara2.vercel.app',
        url:'https://github.com/jpbetanza/Mara2',
        src: mara,
        imgautor: 'https://www.instagram.com/caro_peppe',
        utils: [react,tailwind,html,js],
    },
    {
        nome:'Subtraia-me',
        desc:'Um simpático jogo matemático. Criado por diversão, seria você capaz de ganhar?',
        vercel: 'https://subtraia-me.vercel.app/',
        url:'https://github.com/jpbetanza/Subtraia.me',
        src: subtraiame,
        imgautor:'',
        utils: [react,tailwind,html,js],
    },
    {
        nome:'Segmentação de Pneumonia',
        desc:'Meu trabalho de conclusão de curso, voltado para processamento digital de imagens. Segmentação da pneumonia causada por COVID-19 em imagens tomográficas',
        vercel: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS/blob/main/Segmenta%C3%A7%C3%A3odaPneumonia_Caro_2022.pdf',
        url: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS',
        src: tcc,
        imgautor:'',
        utils: [matlab]
    }
]