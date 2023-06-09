import { Link } from "react-router-dom";
import Logo from "./logo.png";
import bars from "./bars.png";
import { StyledHeader } from "./style";
import { useEffect, useState } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { localAPI } from "../../services/index";
import { useAuth } from "../../contexts/auth.context";
import OpenHeader from "../OpenHeader";
import UpdateUserModal from "../modals/modalUpdateUser";
import ModalEditAddress from "../modals/modalEditAddress";
import { TokenData } from "../../interfaces/user.interface";


function Header() {
  const [showContainer, setShowContainer] = useState(false);

  const openContainer = () => {
    setShowContainer(!showContainer);
  };

  const { modalUpdateUser, modalUpdateAddress } = useAuth();
  const [showUser, setShowUser] = useState(false);
  const { user, setUser, getUserData, nameInitial } = useAuth();
  const [showOpenHeader, setShowOpenHeader] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kars_login");
    if (token) {
      const decodedToken: TokenData = jwtDecode(token);
      if (decodedToken) {
        setShowUser(true);
        getUserData(+decodedToken.sub);
      }
    }
  }, []);

  return (
    <StyledHeader user={user} showContainer={showContainer}>
      {user ? (
        <div className="container">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          <div
            onClick={() => setShowOpenHeader(!showOpenHeader)}
            className="container-go-login"
          >
            {user && (
              <button className="user-button">
                <div>{nameInitial}</div>
                {user.name}
              </button>
            )}
          </div>
          {!user && (
            <button onClick={openContainer} className="more-button">
              <img src={bars} />
            </button>
          )}
          {showOpenHeader && <OpenHeader />}
          {modalUpdateUser && <UpdateUserModal />}
          {modalUpdateAddress && <ModalEditAddress />}
        </div>
      ) : (
        <div className="container">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          <div className="container-go-login">
            <Link to={"/login"} className="link-login">
              Fazer Login
            </Link>
            <Link to={"/register"}>Cadastrar</Link>
          </div>
          <button onClick={openContainer} className="more-button">
            <img src={bars} />
          </button>
        </div>
      )}
    </StyledHeader>
  );
}

export default Header;
