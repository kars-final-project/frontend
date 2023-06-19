import { Link } from 'react-router-dom'
import Logo from './logo.png'
import bars from './bars.png'
import { StyledHeader } from './style'
import { useState } from 'react'

function Header() {
  const [showContainer, setShowContainer] = useState(false)

  const openContainer = () => {
    setShowContainer(!showContainer)
  }

  return (
    <StyledHeader showContainer={showContainer}>
        <div className='container'>
            <Link to={'/'}><img src={Logo} alt="" /></Link>
            <div className='container-go-login'>
                <Link to={'/login'} className='link-login'>Fazer Login</Link>
                <Link to={'/register'}>Cadastrar</Link>
            </div>
            <button onClick={openContainer} className='more-button'><img src={bars}/></button>
        </div>
    </StyledHeader>
  )
}

export default Header