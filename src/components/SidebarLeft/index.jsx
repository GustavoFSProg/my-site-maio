import React from 'react'
import {Container} from './styled-menu'
import { Link } from 'react-router-dom'


function SieBarLeft(){
  return (
    <div>
       <Container >
         <div style={{ marginLeft: '40px' }}>
          <Link 
          style={{ textDecoration: 'none', fontFamily: 'Roboto',
           color: 'black' }} to="/">
          </Link>
        </div>       
    </Container>
    </div> 
      )
}

export default SieBarLeft