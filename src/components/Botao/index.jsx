import {ReactComponent as ArrowR} from '../../assets/right_arrow.svg'
import {ReactComponent as ArrowL} from '../../assets/left_arrow.svg'


const Botao=({position,onPress,page})=>{
    if(position=='left'){
        if(page==0){
            return(<div className='w-16'></div>)
        }
        else{
            return(
                <ArrowL onClick={onPress} className='text-white opacity-20 w-16 h-16 hover:cursor-pointer hover:opacity-40 duration-200'/>
            )
        }
    }
    else if(position=='right'){
        if(page==3){
            return(<div className='w-16'></div>)
        }
        else{
            return(
                <ArrowR onClick={onPress} className='text-white opacity-20 w-16 h-16 hover:cursor-pointer hover:opacity-40 duration-200'/>
            )
        }
    }

}
export default Botao