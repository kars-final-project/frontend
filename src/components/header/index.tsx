import { Link } from 'react-router-dom'
import Logo from './logo.png'
import { StyledHeader } from './style'

function Header() {
  return (
    <StyledHeader>
        <div className='container'>
            <img src={Logo} alt="" />
            <div className='container-go-login'>
                <Link to={''} className='link-login'>Fazer Login</Link>
                <button>Cadastrar</button>
            </div>
        </div>
    </StyledHeader>
  )
}

export default Header