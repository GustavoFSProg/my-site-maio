import Header from './components/header/Header'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import SieBarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import flores from './assets/flores.jpg'
import styled  from 'styled-components'

 const ContainerImg = styled.img`
 display:flex;

 @media screen and  (max-width: 950px ){
  width: 100%;
  height: 15rem;
  display: flex;  
 }

 `

 function App() {

  return (
  
    <>
    <Header />
    <div style={{display: 'flex', width: '98vw', alignItems: 'center',
  justifyContent: 'center' }} >
        <SieBarLeft  />
    <div style={{display: 'flex', width: '100%', marginRight: '-9px',  
    justifyContent: 'right'}} >
    
          <div style={{display: 'flex', marginTop: '3px', width: '100%', 
    justifyContent: 'center', clolor: 'black'}} >
      <div style={{display: 'flex', alignItems: 'center', flexDirection:'column' }}>

          <h2 style={{color: 'green'}}>
            Plantação de Flores                      </h2>

                <ContainerImg width="770" height="450" src={flores} alt="imagem"/>

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
