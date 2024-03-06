import { useState } from 'react'
import AppContainer from './components/AppContainer'
import Botao from './components/Botao'
import MainFrame from './components/MainFrame'
import LangButton from './components/LangButton';
import TabNav from './components/TabNav';


function App(){
  const [page,setPage] = useState(0);

  return(
    <AppContainer>

        <Botao position='left' page={page} onPress={()=>{setPage(page-1)}}/>
        <LangButton/>
        <TabNav page={page} pageChange={setPage}/>
        <MainFrame page={page}/>
        
        <Botao position='right' page={page} onPress={()=>{setPage(page+1)}}/>
    </AppContainer>
  )
}

export default App
