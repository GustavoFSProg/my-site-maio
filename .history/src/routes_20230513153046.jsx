import {BrowserRouter, Router, Route} from 'react-router-dom'
import App from './App'
import Home from './Home'

function Routeres(){
  return (
    <BrowserRouter >
     <Router >
       <Route path="/" exact element={<App />}/>
       <Route path="/home"  element={<Home />}/>

     </Router>
    </BrowserRouter>
  )
}

export default Routeres