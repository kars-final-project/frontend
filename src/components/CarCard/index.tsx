import { useState, useEffect, useContext } from "react"
import StyledCards from "./style";
import { localAPI } from "../../services";
import { AdsContext } from "../../contexts/ads.context";

function CarCard({ ads }: any) {
  const [users, setUsers] = useState<any>([]);
  const {getAdsById } = useContext(AdsContext)

  useEffect(() => {
    async function getUsers() {
      try {
        const userIds = ads.map((ad: any) =>
          localAPI.get(`/users/${ad.user_id}`)
        );

        const responses = await Promise.all(userIds);
        const usersData = responses.map((response) => response.data);

        setUsers(usersData);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }, [ads]);

  return (
    <StyledCards>
      {ads.map((ad: any, index: number) => {
        const user = users.find((user: any) => user.id === ad.user_id);

        const fipeListPrice = Number(ad.fipe_list_price);
        const valueBuy = fipeListPrice - fipeListPrice * 0.05;

        return (
          <a href={`/product/${ad.id}`} onClick={() => {
            getAdsById(ad.id)
          }}>
            <li >
              <img className="car-image" src={ad.cover_image} alt="Imagem do carro" />
              <h3>{ad.model}</h3>
              <p className="car-description">
                {ad.description}
              </p>
              <div className="user-info">
                <img className="user-image" src="" alt="" />
                <h4>{user?.name}</h4>
              </div>
              <div className="more-info">
                <div>
                  <span>{ad.mileage} KM</span>
                  <span>{ad.year}</span>
                </div>
                <p>{Number(ad.price).toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
              </div>
            </li>
          </a>
        )
      })}
    </StyledCards>
  );
}

export default CarCard;
