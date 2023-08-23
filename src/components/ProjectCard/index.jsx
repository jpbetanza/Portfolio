const ProjectCard = ({titulo, desc, url, src, imgautor, utils}) => {
    const regex = new RegExp('/\.com\/(.*)/')
    return(
        <a href={url} target="_blank" className="group relative bg-black flex flex-col justify-between bg-opacity-50 rounded-lg m-5 duration-200 hover:m-3 shadow-2xl">
            {imgautor!='' && <a href={imgautor} target="_blank" className="bg-slate-200 bg-opacity-10 absolute right-0 rounded-xl px-2 py-1 m-1 text-white text-sm hover:cursor-pointer hover:bg-opacity-20 duration-200">@peppe</a>}
            
            <div className="text-left">
                <img src={src} className="rounded-t-lg w-auto p-px"></img>

                <div className="text-white px-5 py-3 group-hover:px-7 duration-200">
                    <h1 className="select-none text-xl font-bold">{titulo}</h1>
                    <p className="select-none text-xs md:text-sm">{desc}</p>
                </div>

            </div>

            <div className="flex justify-center pt-1 pb-3 px-1 gap-2 bottom-0 relative">
                {utils.map((x)=>(
                    <div>
                        <img className="w-7" src={x}/>
                    </div>
                ))}
            </div>
        </a>
    )
}

export default ProjectCard