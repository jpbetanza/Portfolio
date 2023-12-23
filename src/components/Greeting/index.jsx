import { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";

export default function Greeting(){
    const {t} = useTranslation()
    
    const [init,setInit] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setInit((init) => true);
          }, 1);
    })

    return(
        <div className="h-full flex items-center">
            <h1 className={`${init ? 'opacity-100':'opacity-5'} select-none font-medium text-6xl text-white duration-[2000ms]`}>{t('greeting')}</h1>
        </div>
    )
}