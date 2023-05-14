import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routeres from './routes.jsx'
import Menu from './components/Menu/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Routeres />
  </React.StrictMode>,
)
