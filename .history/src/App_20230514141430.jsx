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
    <div style={{display: 'flex', width: '100%', marginRight: '-9px',  
    justifyContent: 'right'}} >
          <div style={{display: 'flex', width: '100%', marginRight: '-9px',  
    justifyContent: 'right'}} ></div>
      <img width="770" height="450" src={flores} alt="imagem"/>
      </div>  
    <SidebarRight />

      </div>  
      </div>  
     
          </>
          )
}

          export default App
