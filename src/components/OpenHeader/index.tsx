import { StyledOpenHeader } from "./style";
import { useAuth } from "../../contexts/auth.context";
import { Link, useNavigate } from "react-router-dom";

function OpenHeader () {
    const navigate = useNavigate()
    const { setModalUpdateUser, setModalUpdateAddress, setUser } = useAuth()

    const logout = () => {
        localStorage.clear()
        setUser(null)
    }

    return (
        <StyledOpenHeader>
            <div className="div-buttons">
                <Link to={'/dashboard'} className="button">Minha Página</Link>
                <Link to={'/'} className="button">Página Inicial</Link>
                <button onClick={() => setModalUpdateUser(true)} >Editar perfil</button>
                <button onClick={() => setModalUpdateAddress(true)} >Editar endereço</button>
                <button onClick={logout}>Sair</button>
            </div>
            
        </StyledOpenHeader>
    )
}

export default OpenHeader