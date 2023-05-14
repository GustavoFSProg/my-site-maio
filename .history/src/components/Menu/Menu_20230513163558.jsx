import {Container} from './styled-menu'

function Menu(){
  return (
    <Container >
        {/* <div style={{ marginLeft: '40px' }}> */}
          <Link 
          style={{ textDecoration: 'none', fontFamily: 'Roboto',
           color: 'black' }} to="/">
            HOME
          </Link>
        {/* </div> */}

        <div style={{ marginLeft: '35px' }}>
          <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            to="/register"
          >
            CADASTRO
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
            onClick={handleLogout}
          >
            LOGOUT
          </Link>
        </div>
    </Container>  )
}

export default Menu