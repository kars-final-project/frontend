import Comments from "../../components/CommentsList/index";
import Footer from "../../components/footer/index";
import Header from "../../components/header/index";
import { StyledProduct } from "./style";
<<<<<<< HEAD
import UserImg from './userImg.png'
import { AdsContext } from "../../contexts/ads.context";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TokenData } from "interfaces/user.interface";
import jwtDecode from "jwt-decode";
import { useAuth } from "../../contexts/auth.context";

function Product() {
  
  const {adsById, getAdsById } = useContext(AdsContext)
  const {id} = useParams()
  const {getUserData, user, nameInitial} = useAuth()
const navigate = useNavigate()

  useEffect(()=> {
    const token = localStorage.getItem("@kars_login");
    if (token) {
      const decodedToken: TokenData = jwtDecode(token);
      if (decodedToken) {
        getUserData(+decodedToken.sub);
      }
    }
    getAdsById(id!)
    console.log(id)
  
  
      }, [])
  
      console.log(adsById)
=======
import UserImg from "./userImg.png";
import { AdsContext } from "../../contexts/ads.context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { localAPI } from "../../services/index";
import { iSellerAd } from "interfaces/ads.interfaces";
import { useAuth } from "../../contexts/auth.context";

function Product() {
  const { adsById, getAdsById, setAdsById } = useContext(AdsContext);
  const { user, userAd, setUserAd } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    const getAdsById = async (id: string | undefined) => {
      try {
        const jwtToken = localStorage.getItem("@kars_login");
        if (!jwtToken) return;

        const response = await localAPI.get<iSellerAd>(`advertisements/${id}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setAdsById(response.data);
      } catch (error) {
        console.error("Erro ao obter o anúncio", error);
      }
    };

    getAdsById(id!);
  }, []);

  useEffect(() => {
    async function getUserByIdAd(id: number | string ) {
      try {
        const response = await localAPI.get(`users/${id}`);
        setUserAd(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getUserByIdAd(adsById.user_id);
  }, [adsById]);

>>>>>>> 538ac58eb4ed8715a1f5846754e4794b1e409984
  return (
    <StyledProduct>
      <Header />
      <section className="container-product">
        <div className="upperDiv">
          <div className="product-container">
            <div className="product-main-img-container">
              <img src={adsById.cover_image} alt="" />
            </div>
            <div className="product-info">
              <h2>{adsById.model} </h2>
              <div className="buttons-price">
                <div className="car-buttons">
                  <div>
                    <button>{adsById.year}</button>
                    <button>{`${adsById.mileage} KM`}</button>
                  </div>
                  {user && (
                    <a
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=+5585${userAd.phone}&text=Vi seu anuncio e tenho interesse em comprar seu carro`}
                      className="buy-button"
                    >
                      Comprar
                    </a>
                  )}
                </div>
                <p>{`R$ ${adsById.price}`}</p>
              </div>
            </div>
            <div className="description-product">
              <h2>Descrição</h2>
              <p>{adsById.description}</p>
            </div>
          </div>
          <div className="pictures-user">
            <div className="car-pictures">
              <h2>Fotos</h2>
              <div>
                <img src={adsById.gallery_image_1} alt="" />
                <img src={adsById.gallery_image_2} alt="" />
              </div>
            </div>
            <div className="user-info">
<<<<<<< HEAD
              <div>{nameInitial}</div>
              <h3>{user?.name}</h3>
              <p>{user?.description}</p>
              <button onClick={()=> navigate('/dashboard')}>Ver todos anuncios</button>
=======
              <img src={UserImg} alt="" />
              <h3>Samuel Leão</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <button>Ver todos anuncios</button>
>>>>>>> 538ac58eb4ed8715a1f5846754e4794b1e409984
            </div>
          </div>
        </div>
        <Comments />
      </section>
      <Footer />
    </StyledProduct>
  );
}

export default Product;
