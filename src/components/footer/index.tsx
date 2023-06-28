import { StyledFooter } from './style'
import LogoFooter from './logoWhite.png'

function Footer() {
  const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}
  return (
    <StyledFooter>
        <div className='footer-container'>
            <img src={LogoFooter} alt="" />
            <p>© 2022 -  Todos os direitos reservados.</p>
            <div className='up' onClick={handleClick}>
                <a href='#'>^</a>
            </div>
        </div>
    </StyledFooter>
  )
}

export default Footer