import { Link } from 'react-router-dom'
import Logo from './logo.png'
import bars from './bars.png'
import { StyledHeader } from './style'
import { useEffect, useState } from 'react'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { localAPI } from '../../services/index'
import { useAuth } from '../../contexts/auth.context'

interface TokenData extends JwtPayload{
  type: string
  email: string
  iat: number
  exp: number
  sub: string
}

function Header() {
  const [showContainer, setShowContainer] = useState(false)

  const openContainer = () => {
    setShowContainer(!showContainer)
  }

  const [showUser, setShowUser] = useState(false)
  const {user, setUser} = useAuth()
  const [nameInitial, setNameInitial] = useState('')

  async function getUserData(id: number) {
    try {
      const response = await localAPI.get(`users/${id}`)
      setUser(response.data)
      getNameInitial(response.data.name)
    } catch(error) {
      console.log(error)
    }
  }

  function getNameInitial(name: string) {
    const initial = name.split(' ').map(word => word.charAt(0))
    const initialString = initial.join('').toUpperCase()
    setNameInitial(initialString)
  }

  useEffect(() => {
    const token = localStorage.getItem('@kars_login')
    if(token){
      const decodedToken: TokenData = jwtDecode(token)
      if(decodedToken) {
        setShowUser(true)
        getUserData(+decodedToken.sub)
      }
    }
  }, [])

  return (
    <StyledHeader showContainer={showContainer}>
      {showUser &&
      <div className='container'>
        <Link to={'/'}><img src={Logo} alt="" /></Link>
        <div className='container-go-login'>
          {user && (<button className='user-button'><div>{nameInitial}</div>{user.name}</button>)}
        </div>
        <button onClick={openContainer} className='more-button'><img src={bars}/></button>
      </div>
      ||
      <div className='container'>
        <Link to={'/'}><img src={Logo} alt="" /></Link>
        <div className='container-go-login'>
          <Link to={'/login'} className='link-login'>Fazer Login</Link>
          <Link to={'/register'}>Cadastrar</Link>
        </div>
        <button onClick={openContainer} className='more-button'><img src={bars}/></button>
      </div>}
    </StyledHeader>
  )
}

export default Header