import {ReactComponent as ArrowR} from '../../assets/right_arrow.svg'
import {ReactComponent as ArrowL} from '../../assets/left_arrow.svg'


const Botao=({position,onPress,page})=>{
    if(position=='left'){
        if(page==0){
            return(<div className='w-16 h-screen'></div>)
        }
        else{
            return(
                <div onClick={onPress} className='w-16 h-screen'>
                    <ArrowL className='text-white opacity-20 hover:cursor-pointer hover:opacity-40 duration-200 w-full h-full'/>
                </div>
            )
        }
    }
    else if(position=='right'){
        if(page==3){
            return(<div className='w-16 h-screen'></div>)
        }
        else{
            return(
                <div onClick={onPress} className='w-16 h-screen'>
                    <ArrowR  className='text-white opacity-20 hover:cursor-pointer hover:opacity-40 duration-200 w-full h-full'/>
                </div>
            )
        }
    }

}
export default Botao