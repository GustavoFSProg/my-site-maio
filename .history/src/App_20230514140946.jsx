import Menu from './components/Menu/index'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import SieBarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import flores from './assets/flores.jpg'

function App() {

  return (
  
    <>
    <Menu />
    <div style={{display: 'flex', width: '98vw', }} >
        <SieBarLeft  />
    <div style={{display: 'flex', width: '100%', marginRight: '-9px',  justifyContent: 'right'}} >

      <img src={flores} alt="imagem"/>
    <SidebarRight />

      </div>  
      </div>  
     
          </>
          )
}

          export default App
