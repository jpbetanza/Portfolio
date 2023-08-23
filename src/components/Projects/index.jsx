import ProjectCard from "../ProjectCard"
import { db } from "./DB"
import {useEffect, useState } from "react"

const Projects = () => {
    const [init,setInit] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setInit(true);
          }, 1);
    })
    return(
        <div className={`${init ? 'opacity-100':'opacity-0'} duration-1000 flex flex-col h-full sm:h-screen sm:justify-center items-center pt-10`}>
            <h1 className="sm:text-6xl text-4xl text-white md:mb-14 mb-5 drop-shadow-2xl ">Meus Projetos</h1>
            <div className="w-full gap-5 p-5 grid sm:grid-rows-1 sm:grid-cols-2 md:grid-cols-3">
                {db.map((x) => (
                    <ProjectCard titulo={x.nome} desc={x.desc} url={x.url} src={x.src} imgautor={x.imgautor} utils={x.utils} />
                ))}
            </div>
        </div>
    )
}

export default Projects