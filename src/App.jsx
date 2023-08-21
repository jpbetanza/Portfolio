import { useState } from 'react'
import AppContainer from './components/AppContainer'
import Botao from './components/Botao'
import './App.css'
import MainFrame from './components/MainFrame'

function App(){
  return(
    <AppContainer>
        <Botao position=''/>
        <MainFrame/>
        <Botao position='right'/>
    </AppContainer>
  )

}

export default App
