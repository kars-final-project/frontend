import Footer from "../../components/footer/index";
import Header from "../../components/header/index";
import {
  StyledSection,
  StyledBack,
  StyledUser,
  StyledImgCircle,
  StyledRow,
  StyledH2,
  StyledH3,
  StyledP,
  StyledAddAdBtn,
} from "./styles";
import { useContext, useEffect } from "react";
import { AdsContext } from "../../contexts/ads.context";
import { NewAdModal } from "../../components/modals/newAdModal";
import UpdateUserModal from "../../components/modals/modalUpdateUser";
import { SellerAdsList } from "../../components/SellerAdsList";
import UpdateAdvertisementModal from "../../components/modals/modalUpdateAdvertisement";
import { useAuth } from "../../contexts/auth.context";
import { TokenData } from "../../interfaces/user.interface";
import jwtDecode, { JwtPayload } from "jwt-decode";

const Dashboard = () => {
  const {
    sellerAds,
    getSellerAds,
    showNewAdForm,
    setShowNewAdState,
    showModalEditAd,
    adData,
  } = useContext(AdsContext);

  const { user, getUserData } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("@kars_login");
    if (token) {
      const decodedToken: TokenData = jwtDecode(token);
      if (decodedToken) {
        getUserData(+decodedToken.sub);
      }
    }
    getSellerAds()
  }, []);
  
  return (
    <StyledSection>
      <div>
        <Header />
        <StyledBack />
        <StyledUser>
          <StyledImgCircle />
          <StyledRow>
            <StyledH2> {user?.name} </StyledH2>
            <StyledH3> {user?.type} </StyledH3>
          </StyledRow>
          <StyledP>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </StyledP>
          <StyledAddAdBtn onClick={setShowNewAdState}>
            {" "}
            Criar anúncio{" "}
          </StyledAddAdBtn>
        </StyledUser>
      </div>
      <main>
        <div className="divAdvertisement">
          {sellerAds.length === 0 ? (
            <StyledRow>
              <h3> Esta conta ainda não criou anúncios </h3>
            </StyledRow>
          ) : (
            <SellerAdsList />
          )}
        </div>
      </main>
      {showNewAdForm && <NewAdModal />}
      <Footer />
      {showModalEditAd && <UpdateAdvertisementModal advertisement={adData} />}
    </StyledSection>
  );
};

export default Dashboard;