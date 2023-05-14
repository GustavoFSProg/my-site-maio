import React from 'react'
import {Container} from './styled-menu'
import { Link } from 'react-router-dom'

function Menu(){
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

        <div style={{ marginLeft: '35px' }}>
          <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            to="/register"
          >
            REGISTER
          </Link>
        </div>

        <div style={{ marginLeft: '35px' }}>
          <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            to="/login"
          >
            LOGIN
          </Link>
        </div>

        <div style={{ marginLeft: '35px' }}>
          <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
          >
            LOGOUT
          </Link>
        </div> 
    </Container>
    </div> 
      )
}

export default Menu