import { useTranslation } from "react-i18next"
import { navBarText } from "../Projects/DB";

const LangButton = ({page,pageChange}) => {
    const { i18n } = useTranslation();

    return(
        <div className="select-none absolute flex md:mt-5 mt-2 right-3 sm:right-auto sm:left-1/2 sm:transform sm:-translate-x-1/2 gap-3 sm:text-nowrap">
            {i18n.language=='pt'? 
                navBarText.map((x) => (
                    <button onClick={()=>pageChange(x.page)} className={`${page==x.page?'bg-black bg-opacity-40':''}  flex rounded-xl hover:bg-black hover:bg-opacity-40 px-2 py-1 duration-300`}>
                        <b className="text-center text-white text-nowrap">{x.nome}</b>
                    </button>
                ))
                :navBarText.map((x) => (
                    <button onClick={()=>pageChange(x.page)} className={`${page==x.page?'bg-black bg-opacity-40':''}  flex rounded-xl hover:bg-black hover:bg-opacity-40 px-2 py-1 duration-300`}>
                        <b className="text-center text-white text-nowrap">{x.name}</b>
                    </button>
                ))}
        </div>
    )
}
export default LangButton