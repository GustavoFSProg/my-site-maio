import React, {Link} from 'react'
import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
      <div >
          <Link to="/home" >
          HOME
          </Link>
        </div>    {/* 
          <Link to="/" >
          APP
          </Link> */}
    </Container>  )
}

export default Menu