import { Link, NavLink } from 'react-router-dom'
import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
          <Link to="/" >
          HOME
          </Link>
{/* 
          <Link to="/" >
          APP
          </Link> */}
    </Container>  )
}

export default Menu