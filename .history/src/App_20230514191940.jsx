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
    <div style={{display: 'flex', width: '98%', }} >
        <SieBarLeft  />
    <div style={{display: 'flex', width: '100%', marginRight: '-9px',  
    justifyContent: 'right'}} >
    
          <div style={{display: 'flex', marginTop: '3px', width: '100%', 
    justifyContent: 'center', clolor: 'black'}} >
      <div style={{display: 'flex', alignItems: 'center', flexDirection:'column' }}>

          <h2 style={{color: 'green'}}>
            Plantação de Flores                      </h2>
      <img width="770" height="450" src={flores} alt="imagem"/>

      <div style={{display: 'flex', marginTop: '3px', width: '90%', 
    justifyContent: 'space-between', clolor: 'black'}} >
      <p style={{color:'black'}}>
        Autor:  Vera Sanches   
        </p> 
        <p style={{color:'black'}}>
        Views:   55  
        </p>
      </div>
       </div>  
      </div>  

    <SidebarRight />

      </div>  
      </div>  

     
          </>
          )
}

          export default App
