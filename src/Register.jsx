import { useState } from 'react'
import Menu from './components/Menu/menu'
import SieBarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import styled  from 'styled-components'
import { Input } from './components/Input'
import Header from './components/header/Header'

export const ContainerDiv = styled.div ` 
 display:flex;
 
@media screen and (max-width: 800px){
  display: flex;
  width: 100vw
    }
 `

function Register() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (

    <>
          <Header />

      <SieBarLeft />
      <div style={{
        display: 'flex', width: '100vw', marginRight: '-9px',
        justifyContent: 'right', marginTop: '-880px'
      }} >

        <div style={{
          display: 'flex', width: '50%', alignItems: 'center',
          justifyContent: 'center', marginRight: '115px',
        }} >

          <form style={{
            display: 'flex', width: '80%', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column', marginTop: '-250px'
          }}>

            <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        invalid={true}
        // errorMessage="Email inválido"

      />
               <Input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        invalid={true}
        // errorMessage="Email inválido"
      />
            <button style={{
              display: 'flex', marginTop: '-34px', height: '40px',
              borderRadius: '5px', border: 'none',background: 'lightblue',
               width: '33.5rem', marginLeft: '30px', alignItems: 'center',
              justifyContent: 'center'
            }} >
              Cadastrar
            </ button>
          </ form >
        </div>

        <SidebarRight />

      </div>
    </>

  )
}

export default Register
