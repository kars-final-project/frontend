import Comments from "../../components/Comments/index";
import Footer from "../../components/footer/index";
import Header from "../../components/header/index";
import { StyledProduct } from "./style";
import MockProduct from './product.png'
import SmallImg from './smallcar.png'
import UserImg from './userImg.png'
import { AdsContext } from "../../contexts/ads.context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { localAPI } from "../../services/index";
import { iAd, iSellerAd } from "interfaces/ads.interfaces";

function Product() {
  
  const {adsById, getAdsById, setAdsById } = useContext(AdsContext)
  const {id} = useParams()
  useEffect(()=> {
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
    getAdsById(id!)
    console.log(id)
  
  
      }, [])
  
      console.log(adsById)
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
                  <a target="_blank" href={`https://api.whatsapp.com/send?phone=+5585987016737&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`} className="buy-button">Comprar</a>
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
              <img src={UserImg} alt="" />
              <h3>Samuel Leão</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
              <button>Ver todos anuncios</button>
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
