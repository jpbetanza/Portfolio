import { useTranslation } from "react-i18next"
import Brazil from '../../assets/brazil.png'
import USA from '../../assets/usa.png'

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
        <div className="select-none absolute flex md:mt-5 -ml-5 md:ml-3 mt-3 shadow-xl">
            <button onClick={()=>changeLanguage()} className="flex">
                {i18n.language=='pt'?
                <div>
                    <img className='h-6' src={Brazil}></img>
                </div>
                :
                <div>
                    <img className='h-6' src={USA}></img>
                </div>
                }

            
            </button>
        </div>
    )
}
export default LangButton