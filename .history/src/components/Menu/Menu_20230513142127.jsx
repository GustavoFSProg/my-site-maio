import { Link } from 'react-router-dom'
import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
      <p>
        <h3>
          <Link to="/home" >

          HOME
          </Link>
        </h3>

        <h3>
          <Link to="/" >
          APP
          </Link>
        </h3>
      </p>
    </Container>  )
}

export default Menu