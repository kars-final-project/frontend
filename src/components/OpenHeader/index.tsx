import { StyledOpenHeader } from "./style";
import { useAuth } from "../../contexts/auth.context";

function OpenHeader () {
    const { setModalUpdateUser, setModalUpdateAddress, setUser } = useAuth()

    const logout = () => {
        localStorage.clear()
        setUser(null)
    }

    return (
        <StyledOpenHeader>
            <div className="div-buttons">
                <button onClick={() => setModalUpdateUser(true)} >Editar perfil</button>
                <button onClick={() => setModalUpdateAddress(true)} >Editar endereço</button>
                <button onClick={logout}>Sair</button>
            </div>
            
        </StyledOpenHeader>
    )
}

export default OpenHeader