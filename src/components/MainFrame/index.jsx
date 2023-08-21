import Greeting from "../Greeting"
import Introduction from "../Introduction"
import Projects from "../Projects"
import Contact from "../Contact"


const MainFrame = ({page})=>{
    const pages = [<Greeting/>,<Introduction/>,<Projects/>,<Contact/>]

    return(
        <div className={`mx-auto md:p-10`}>{pages[page]}</div>
    )
}
export default MainFrame