import React from 'react'
import {Container} from './styled-menu'
import { Link } from 'react-router-dom'

function SidebarRight(){
  return (
    <div>

       <Container >
         <div style={{ marginLeft: '40px' }}>
          <Link 
          style={{ textDecoration: 'none', fontFamily: 'Roboto',
           color: 'black' }} to="/">
            HOME
          </Link>
        </div>

       
    </Container>
    </div> 
      )
}

export default SidebarRight