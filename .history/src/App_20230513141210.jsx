import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
    <Menu />
    
      <p className="read-the-docs">
        App Page
      </p>
                
          </>
          )
}

          export default App
