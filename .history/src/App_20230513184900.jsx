import Menu from './components/Menu/index'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import SieBarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'

function App() {

  return (
  
    <>
    <Menu />
    <div style={{display: 'flex', width: '100vw', }} >
        <SieBarLeft  />
    <div style={{display: 'flex', width: '90vw', marginRight:'-50px', justifyContent: 'right'}} >

    <SidebarRight />

      </div>  
      </div>  
      <p style={{color: 'blue'}}>
        App Page
      </p>
          </>
          )
}

          export default App
