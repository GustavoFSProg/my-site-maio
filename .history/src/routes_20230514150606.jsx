import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Home from './Home'

function Routeres(){
  return (
    <BrowserRouter >
     <Routes >
       <Route path="/" exact element={<App />}/>
       <Route path="/register"  element={<Home />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default Routeres