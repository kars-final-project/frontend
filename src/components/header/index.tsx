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
            <img src={Logo} alt="" />
            <div className='container-go-login'>
                <Link to={''} className='link-login'>Fazer Login</Link>
                <button>Cadastrar</button>
            </div>
            <button onClick={openContainer} className='more-button'><img src={bars}/></button>
        </div>
    </StyledHeader>
  )
}

export default Header