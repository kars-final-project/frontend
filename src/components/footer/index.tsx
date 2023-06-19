import { StyledFooter } from './style'
import LogoFooter from './logoWhite.png'

function Footer() {
  return (
    <StyledFooter>
        <div className='container'>
            <img src={LogoFooter} alt="" />
            <p>© 2022 -  Todos os direitos reservados.</p>
            <div className='up'>
                <a href='#'>^</a>
            </div>
        </div>
    </StyledFooter>
  )
}

export default Footer