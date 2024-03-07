import { useTranslation } from "react-i18next"
import { navBarText } from "../Projects/DB";

const LangButton = ({page,pageChange}) => {
    const { i18n } = useTranslation();

    return(
        <div className="select-none absolute flex gap-1 md:mt-5 mt-3 right-3 md:right-auto md:left-1/2 md:transform md:-translate-x-1/2 sm:gap-3 ">
            {i18n.language=='pt'? 
                navBarText.map((x) => (
                    <button onClick={()=>pageChange(x.page)} className={`${page==x.page?'bg-black bg-opacity-50':'bg-white'}  bg-opacity-10  flex rounded-xl hover:bg-black hover:bg-opacity-40 px-2 sm:px-5 py-1 duration-300`}>
                        <b className="text-center text-white text-nowrap text-sm sm:text-base">{x.nome}</b>
                    </button>
                ))
                :navBarText.map((x) => (
                    <button onClick={()=>pageChange(x.page)} className={`${page==x.page?'bg-black bg-opacity-50':'bg-white'} bg-opacity-10 flex rounded-xl hover:bg-black hover:bg-opacity-40 px-2 sm:px-5 py-1 duration-300`}>
                        <b className="text-center text-white text-nowrap text-sm sm:text-base">{x.name}</b>
                    </button>
                ))}
        </div>
    )
}
export default LangButton