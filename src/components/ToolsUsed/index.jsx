import ToolCard from "../ToolCard"

import djangoLogo from '../../assets/django.png'
import reactLogo from '../../assets/react.png'
import jsLogo from '../../assets/js.png'
import pythonLogo from '../../assets/python.png'
import htmlLogo from '../../assets/html.png'
import tailwindLogo from '../../assets/tailwind.png'

const ToolsUsed = ()=>{
    const logos = [reactLogo,tailwindLogo,jsLogo,htmlLogo,pythonLogo,djangoLogo,]
    const nomes = ["React",'Tailwind',"Javascript","HTML",'Python','Django',]
    return(
        <div className="bg-opacity-30 bg-slate-400 rounded-xl w-3/4 md:w-1/2 xl:w-1/3 drop-shadow-lg duration-200">
            <h1 className="text-white md:text-2xl text-xl text-center md:mt-5 mt-3">Ferramentas que utilizo</h1>
            <div className="items-center  grid grid-rows-2 grid-cols-3 md:gap-5 md:p-5 gap-1 p-1">
                {logos.map((x,i) => <ToolCard logo={x} name={nomes[i]}/>)}
            </div>
        </div>
    )
}
export default ToolsUsed