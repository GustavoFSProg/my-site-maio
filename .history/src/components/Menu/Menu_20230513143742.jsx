import { Link, NavLink } from 'react-router-dom'
import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
      <div >
        
          HOME
          </Link>
          <Link to="/home" >
        </div>    
{/* 
          <Link to="/" >
          APP
          </Link> */}
    </Container>  )
}

export default Menu