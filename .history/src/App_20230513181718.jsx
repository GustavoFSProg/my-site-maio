import Menu from './components/Menu/index'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import SieBarLeft from './components/SidebarLeft'

function App() {

  return (
  
    <>
    <Menu />
    <SieBarLeft  />

      <p style={{color: 'blue'}}>
        App Page
      </p>
                
          </>
          )
}

          export default App
