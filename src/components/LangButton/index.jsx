import { useTranslation } from "react-i18next"

const LangButton = () => {
    const {t} = useTranslation()
    const { i18n } = useTranslation();
    

    const changeLanguage = () => {
        if(i18n.language=='pt'){
            i18n.changeLanguage('en');
        }
        else{
            i18n.changeLanguage('pt');
        }
    };

    return(
        <div className="select-none absolute flex md:mt-5 -ml-5 md:ml-3 mt-2 shadow-xl">
            <button onClick={()=>changeLanguage()} className=" flex opacity-40 rounded-xl bg-slate-200 px-2 py-1">
            
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise self-center mx-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>

                <b className="mr-1 hidden sm:block">{t('langButton')}</b>
                <b className="mr-1 block sm:hidden"></b>
            
            </button>
        </div>
    )
}
export default LangButton