import LinkIcon from "../LinkIcon"
import linkedinIcon from '../../assets/linkedinicon.png'
import githubIcon from '../../assets/githubicon.png'
import emailIcon from  '../../assets/emailicon.png'
import { useState, useEffect } from "react"

const Contact = ()=>{
    const [init,setInit] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setInit(true);
          }, 1);
    })
    return(
        <div className={`${init ? 'opacity-100':'opacity-0'} flex flex-col items-center justify-center gap-10 p-5 duration-1000`}>
            <div className="flex flex-col items-center text-white text-center gap-5">
                <h1 className="text-6xl">Trabalhe comigo</h1>
                <p className="md:text-xl">Você pode conhecer mais sobre mim nos links abaixo</p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
                <LinkIcon icon={githubIcon} url="https://github.com/jpbetanza" css={"w-20 md:w-32"}/>
                <LinkIcon icon={linkedinIcon} url="https://br.linkedin.com/in/jo%C3%A3o-pedro-betanza-dal-caro-6b7625163" css={"w-20 md:w-32"}/>
                <LinkIcon icon={emailIcon} url="mailto:jpbetanza@gmail.com?subject=Prazer em conhecê-lo" css={"w-20 md:w-32"}/>
            </div>
        </div>
    )
}
export default Contact