import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/index'
import SieBarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import styled from 'styled-components'

const ContainerSieBars = styled `
display: flex;

@media screen and (max-width: 800px){
  display: none
  }
`
function Home() {
  const [count, setCount] = useState(0)

  return (
  
  <>
  <div >

    <Menu />
    <ContainerSieBars >

        <SieBarLeft  />
    <div style={{display: 'flex', width: '100%', marginRight: '-9px',  justifyContent: 'right'}} >

    <SidebarRight />

      </div>  
      </ContainerSieBars>
      </div>  
      <h1  style={{color: 'black'}}>
        Home
      </h1>
  </>

          )
}

          export default Home
