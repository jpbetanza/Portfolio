import Greeting from "../Greeting"
import Introduction from "../Introduction"
import Projects from "../Projects"
import Contact from "../Contact"


const MainFrame = ({page})=>{
    const pages = [<Projects/>,<Introduction/>,<Contact/>]

    return(
        <div className="select-none w-full min-h-screen flex justify-center">{pages[page]}</div>
    )
}
export default MainFrame