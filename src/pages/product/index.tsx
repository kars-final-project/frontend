import Comments from "../../components/Comments/index";
import Footer from "../../components/footer/index";
import Header from "../../components/header/index";
import { StyledProduct } from "./style";
import MockProduct from './product.png'
import SmallImg from './smallcar.png'
import UserImg from './userImg.png'

function Product() {
  return (
    <StyledProduct>
      <Header />
      <section className="container-product">
        <div className="upperDiv">
          <div className="product-container">
            <div className="product-main-img-container">
              <img src={MockProduct} alt="" />
            </div>
            <div className="product-info">
              <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
              <div className="buttons-price">
                <div className="car-buttons">
                  <div>
                    <button>2013</button>
                    <button>0 KM</button>
                  </div>
                  <button className="buy-button">Comprar</button>
                </div>
                <p>R$ 00.000,00</p>
              </div>
            </div>
            <div className="description-product">
              <h2>Descrição</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className="pictures-user">
            <div className="car-pictures">
              <h2>Fotos</h2>
              <div>
                <img src={SmallImg} alt="" />
                <img src={SmallImg} alt="" />
                <img src={SmallImg} alt="" />
                <img src={SmallImg} alt="" />
                <img src={SmallImg} alt="" />
                <img src={SmallImg} alt="" />
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
