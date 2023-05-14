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

   

      <p style={{color: 'blue'}}>
        HOME Page
      </p>
                
      </div>
          )
}

          export default Home
