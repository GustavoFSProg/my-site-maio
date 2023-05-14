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
    <div style={{display: 'flex', width: '100vw', justifyContent: 'right'}} >
        <SieBarLeft  />
    <SidebarRight />

      </div>  
      <p style={{color: 'blue'}}>
        App Page
      </p>
          </>
          )
}

          export default App
