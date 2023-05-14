import { Link, NavLink } from 'react-router-dom'
import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
      <p>
          <NavLink to="/home" >
          HOME
          </NavLink>

          <NavLink to="/" >
          APP
          </NavLink>
      </p>
    </Container>  )
}

export default Menu