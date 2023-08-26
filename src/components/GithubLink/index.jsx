import githubIcon from "../../assets/githubicon.png"

const GithubLink = ({github})=>{
    return(
        <a href={github} target="_blank" className= {`bg-slate-200 
        bg-opacity-10 
        absolute
        right-0 
        bottom-0
        rounded-full 
        px-1
        py-1 
        m-1 
        w-7
        z-10
        text-white 
        text-sm 
        hover:cursor-pointer 
        hover:bg-opacity-20 
        duration-200`}>
        <img src={githubIcon}></img>
        </a>
    )
}

export default GithubLink