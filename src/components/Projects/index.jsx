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
        <div className={`${init ? 'opacity-100':'opacity-0'} duration-1000 flex flex-col items-center `}>
            <h1 className="sm:text-6xl text-4xl text-white mb-14 drop-shadow-2xl ">Meus Projetos</h1>
            <div className="w-3/4 p-5 grid grid-rows-1 grid-cols-2 gap-10 md:gap-1 xl:gap-10 md:grid-cols-3">
                {db.map((x) => (
                    <ProjectCard titulo={x.nome} desc={x.desc} url={x.url} src={x.src} imgautor={x.imgautor} utils={x.utils} />
                ))}
            </div>
        </div>
    )
}

export default Projects