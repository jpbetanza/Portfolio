import ameLogo from '../../assets/ameLogo.png'
import maraIris from '../../assets/maraIris.png'
import maraWink from '../../assets/maraWink.png'
import subtraiame from '../../assets/subtraiame.png'
import tcc from '../../assets/tcc.png'
import ytanalisys from '../../assets/AnaliseYt.png'
import financeDash from '../../assets/DashBoardFinanceiro.png'
import atliq from '../../assets/atliq.png'

import bootstrap from '../../assets/bootstrap.png'
import django from '../../assets/django.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import matlab from '../../assets/matlab.png'
import pandas from '../../assets/pandas.png'
import powerbi from '../../assets/powerbi.png'
import sql from '../../assets/sql.png'
import excel from '../../assets/excel.png'

// Isso da erro, sei lá o pq
// import { ameLogo, mara, subtraiame, django, js, bootstrap, python, react, html, tailwind  } from "../../assets"

export const tools = [
    {nome: 'React',img: react},
    {nome: 'Tailwind',img: tailwind},
    {nome: 'Javascript',img: js},
    {nome: 'HTML',img: html},
    {nome: 'Python',img: python},
    {nome: 'Django',img: django},
    {nome: 'Power BI',img: powerbi},
    {nome: 'Excel', img: excel},
    {nome: 'Pandas', img: pandas},
]

export const db = [
    {
        nomePt:'Dashboard de Vendas da AtliQ',
        descPt:'Um dashboard do Power BI feito com o intuito de analisar dados de vendas da AtliQ, famosa empresa de hardware eletrônico localizada na Índia.',
        nomeEn:'AtliQ Sales Dashboard',
        descEn:'A Power BI dashBoard made with intention of analyzing sales data from AtliQ, a famous eletronics hardware company located on India.',
        vercel: 'https://github.com/jpbetanza/AtliQ-Sales-Dashboard',
        url: 'https://github.com/jpbetanza/AtliQ-Sales-Dashboard',
        src: atliq,
        imgautor:'',
        utils: [powerbi,sql],
        catPt:['Pesquisa','Dados','Análise','Financeiro','Projeto Pessoal'],
        catEn: ['Research','Data','Analysis','Finances','Personal Project'],
    },
    {
        nomePt:'Dashboard Financeiro',
        descPt:'Dashboard financeiro que coleta ajusta todos os dados dos meus extratos bancários e os exibe em um Dashboard Power BI',
        nomeEn:'Finance Dashboard',
        descEn:'Finance dashboard that collects and adjusts all data from my bank statements and displays them on a Power BI Dashboard.',
        vercel: 'https://github.com/jpbetanza/FinanceDashBoard',
        url: 'https://github.com/jpbetanza/FinanceDashBoard',
        src: financeDash,
        imgautor:'',
        utils: [powerbi,python, pandas],
        catPt:['Pesquisa','Dados','Análise','Financeiro','Projeto Pessoal'],
        catEn: ['Research','Data','Analysis','Finances','Personal Project'],
    },
    {
        nomePt:'Análise de Categorias do Youtube',
        descPt:'Um projeto de análise de dados para entender a melhor categoria para criar um canal no YouTube neste momento.',
        nomeEn:'Youtube Category Analysis',
        descEn:'A data analysis project to understand the best category to make a channel on youtube right now',
        vercel: 'https://www.kaggle.com/code/jpbetanza/youtube-category-analysis',
        url: 'https://www.kaggle.com/code/jpbetanza/youtube-category-analysis',
        src: ytanalisys,
        imgautor:'',
        utils: [python, pandas],
        catPt:['Pesquisa','Dados','Análise','Projeto Pessoal'],
        catEn: ['Research','Data','Personal Project'],
    },
    {
        nomePt:'Mara Iris',
        descPt:'Mara Iris é um teclado virtual de controle por rastreio de íris para pessoas com esclerose lateral amiotrófica',
        nomeEn:'Mara Iris',
        descEn:'Mara Iris is a virtual keyboard that helps individuals with amyotrophic lateral schlerosis communicate with eye movements',
        vercel: 'https://mara2.vercel.app',
        url:'https://github.com/jpbetanza/Mara2',
        src: maraIris,
        imgautor: '',
        utils: [react,tailwind,html,js],
        catPt:['FrontEnd','Web','Comissionado'],
        catEn:['FrontEnd','Web','Comissioned'],
    },
    {
        nomePt:'Mara Wink',
        descPt:'Mara Wink é um teclado virtual de controle por detecção de piscadas de olho para pessoas com esclerose lateral amiotrófica',
        nomeEn:'Mara Wink',
        descEn:'Mara Wink is a virtual keyboard that helps individuals with amyotrophic lateral schlerosis communicate with eye blinking',
        vercel: 'https://mara3.vercel.app',
        url:'https://github.com/jpbetanza/Mara3',
        src: maraWink,
        imgautor: '',
        utils: [react,tailwind,html,js],
        catPt:['FrontEnd','Web','Projeto Pessoal'],
        catEn:['FrontEnd','Web','Personal Project'],
    },
    {
        nomePt:'Segmentação de COVID-19',
        descPt:'Meu trabalho de conclusão de curso, voltado para processamento digital de imagens. Segmentação da pneumonia causada por COVID-19 em imagens tomográficas',
        nomeEn:'COVID-19 Segmentation',
        descEn:'My final undergraduate paper focused on digital image processing. It involved the segmentation of COVID-19 pneumonia in tomographic images.',
        vercel: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS/blob/main/Segmenta%C3%A7%C3%A3odaPneumonia_Caro_2022.pdf',
        url: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS',
        src: tcc,
        imgautor:'',
        utils: [matlab, excel],
        catPt:['Imagens','Pesquisa','Dados','Projeto Pessoal'],
        catEn: ['Images','Research','Data','Personal Project'],
    },
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
        catPt: ['FullStack','Web','Comissionado'],
        catEn: ['FullStack','Web','Comissioned'],
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
        catPt:['FrontEnd','Web','Projeto Pessoal'],
        catEn:['FrontEnd','Web','Personal Project'],
    },
]