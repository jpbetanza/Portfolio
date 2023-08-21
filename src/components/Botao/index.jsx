import {ReactComponent as ArrowR} from '../../assets/right_arrow.svg'
import {ReactComponent as ArrowL} from '../../assets/left_arrow.svg'


const Botao=({position})=>{
    if(position=='right'){
        return(
            <ArrowR className='text-white opacity-20 w-16 h-16 hover:cursor-pointer hover:opacity-40 duration-200'/>
        )
    }
    else if(position=='left'){
        return(
            <ArrowL className='text-white opacity-20 w-16 h-16 hover:cursor-pointer hover:opacity-40 duration-200'/>
        )
    }
    else{
        return(<div className='w-16'></div>)
    }

}
export default Botao