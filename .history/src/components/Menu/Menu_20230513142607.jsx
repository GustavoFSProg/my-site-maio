import { Link, NavLink } from 'react-router-dom'
import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
          <NavLink to={` ${home}`}>
          HOME
          </NavLink>

          <NavLink to="/" >
          APP
          </NavLink>
    </Container>  )
}

export default Menu