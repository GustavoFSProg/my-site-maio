import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/index'
import SieBarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import styled from 'styled-components'

function Register() {
  const [count, setCount] = useState(0)

  return (
  
  <>
  <div >

    <Menu />

        <SieBarLeft  />
     <div style={{display: 'flex', width: '100%', marginRight: '-9px',  
    justifyContent: 'right', marginTop: '-910px'}} >
    
         
    <SidebarRight />

      </div>  
      </div>  
  </>

          )
}

          export default Register
