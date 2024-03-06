import ToolCard from "../ToolCard"
import { useTranslation } from "react-i18next";

import { tools } from "../Projects/DB"

const ToolsUsed = ()=>{
    const {t} = useTranslation()

    return(
        <div className="bg-opacity-20 p-5 sm:p-2 bg-black rounded-xl sm:w-3/4 md:w-2/3 xl:w-4/5 shadow-2xl duration-200">
            <h1 className="text-white md:text-2xl text-xl text-center mb-2 md:mt-5 mt-3">{t('toolsTitle')}</h1>
            <div className="bg-white h-[1px] grow mx-auto w-4/5 opacity-60"></div>
            <div className="items-center grid grid-rows-2 grid-cols-3 md:grid-rows-2 md:grid-cols-5 xl:grid-cols-8 xl:grid-rows-1 md:gap-5 md:p-5 gap-1 p-1">
                {tools.map((x) => <ToolCard name={x.nome} logo={x.img} />)}
            </div>
        </div>
    )
}
export default ToolsUsed