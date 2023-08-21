import Avatar from "../Avatar"
import IntroductionText from "../IntroductionText"
import ToolsUsed from "../ToolsUsed"

const Introduction = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center md:flex-row p-8">
                <Avatar/>
                <IntroductionText/>
            </div>
            <ToolsUsed/>
        </div>
    )
}

export default Introduction