import { useTranslation } from "react-i18next"
import { useState } from "react";
import { projectFilterText } from "../Projects/DB";

const ProjectFilter = ({cate,cateSelect}) => {
    const { i18n } = useTranslation();
    return(
        <div className="flex gap-3 pb-5">
            {i18n.language=='pt'? 
                projectFilterText.map((x) => (
                    <button onClick={()=>cateSelect(x.cat)} className={`${x.cat==cate ?'bg-black bg-opacity-50':'bg-white'}  bg-opacity-10  flex items-center rounded-md hover:bg-black hover:bg-opacity-40 px-3 py-1 sm:px-5 duration-300`}>
                        <b className="text-center text-white text-nowrap text-sm sm:text-base">{x.categoria}</b>
                    </button>
                ))
                :projectFilterText.map((x) => (
                    <button onClick={()=>cateSelect(x.cat)} className={`${x.cat==cate ?'bg-black bg-opacity-50':'bg-white'} bg-opacity-10 flex items-center rounded-md hover:bg-black hover:bg-opacity-40 px-3 py-1 sm:px-5 duration-300`}>
                        <b className="text-center text-white text-nowrap text-sm sm:text-base">{x.category}</b>
                    </button>
                ))}
        </div>
    )
}
export default ProjectFilter