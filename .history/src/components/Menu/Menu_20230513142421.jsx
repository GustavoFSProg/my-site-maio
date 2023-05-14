import { Link } from 'react-router-dom'
import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
      <p>
          <Link to="/home" >
          HOME
          </Link>

          <Link to="/" >
          APP
          </Link>
      </p>
    </Container>  )
}

export default Menu