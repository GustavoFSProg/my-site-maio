import Menu from './components/Menu/index'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
  
    <>
   <div style={{ marginLeft: '40px' }}>
          <Link 
          style={{ textDecoration: 'none', fontFamily: 'Roboto',
           color: 'black' }} to="/">
            HOME
          </Link>
        </div>

      <p >
        App Page
      </p>
                
          </>
          )
}

          export default App
