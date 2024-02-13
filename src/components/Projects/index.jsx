import ProjectCard from "../ProjectCard"
import { db } from "./DB"
import {useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const Projects = () => {
    const {t}= useTranslation()
    const {i18n} = useTranslation()

    const [init,setInit] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setInit(true);
          }, 1);
    })
    return(
        <div className={`${init ? 'opacity-100':'opacity-0'} duration-1000 flex flex-col h-full sm:justify-center items-center pt-10`}>
            <h1 className="sm:text-6xl text-4xl text-white mt-5 md:mb-10 mb-5 drop-shadow-2xl "> {t('projectsTitle')} </h1>
            <div className="w-full gap-1 px-5 sm:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {i18n.language=='pt'? 
                db.map((x) => (
                    <ProjectCard titulo={x.nomePt} desc={x.descPt} vercel={x.vercel} url={x.url} src={x.src} imgautor={x.imgautor} utils={x.utils} cat={x.catPt} />
                ))
                :db.map((x) => (
                    <ProjectCard titulo={x.nomeEn} desc={x.descEn} vercel={x.vercel} url={x.url} src={x.src} imgautor={x.imgautor} utils={x.utils} cat={x.catEn} />
                ))}
            </div>
        </div>
    )
}


export default Projects