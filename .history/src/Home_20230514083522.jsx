import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/index'
import SieBarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import styled from 'styled-components'

function Home() {
  const [count, setCount] = useState(0)

  return (
  
  <>
  <div >

    <Menu />

        <SieBarLeft  />
    <div style={{display: 'flex', width: '100%', marginRight: '-9px',  justifyContent: 'right'}} >

    <SidebarRight />

      </div>  
      </div>  
      <h1  style={{color: 'black'}}>
        Home
      </h1>
  </>

          )
}

          export default Home
