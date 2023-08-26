import ameLogo from '../../assets/ameLogo.png'
import mara from '../../assets/mara.png'
import subtraiame from '../../assets/subtraiame.png'

import bootstrap from '../../assets/bootstrap.png'
import django from '../../assets/django.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'

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
        nome:'Programa AME',
        desc:'Website produzido em colaboração com o projeto de Doutorado de alunos do departamento de Saúde Coletiva, na UFRN',
        vercel: '',
        url:'https://github.com/jpbetanza/Programa-AME',
        src: ameLogo,
        imgautor:'',
        utils: [bootstrap,html,js,python,django],
    },
    {
        nome:'Mara',
        desc:'Mara é um teclado virtual de controle ocular para pessoas com esclerose lateral amiotrófica',
        vercel: '',
        url:'https://github.com/jpbetanza/Mara',
        src: mara,
        imgautor: 'https://www.instagram.com/caro_peppe',
        utils: [bootstrap,html,js],
    },
    {
        nome:'Subtraia-me',
        desc:'Um simpático jogo matemático. Criado por diversão, seria você capaz de ganhar?',
        vercel: 'https://subtraia-me.vercel.app/',
        url:'https://github.com/jpbetanza/Subtraia.me',
        src: subtraiame,
        imgautor:'',
        utils: [tailwind,html,js],
    },
]