import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/index'

function Home() {
  const [count, setCount] = useState(0)

  return (
  
  <div >

    <Menu />
    <div style={{display: 'flex', width: '98vw', }} >
        <SieBarLeft  />
    <div style={{display: 'flex', width: '100%', marginRight: '-9px',  justifyContent: 'right'}} >

    <SidebarRight />

      </div>  
      </div>  
                
      </div>
          )
}

          export default Home
