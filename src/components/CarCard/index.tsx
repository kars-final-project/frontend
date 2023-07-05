import { useAuth } from "../../contexts/auth.context";
import { useState, useEffect, useContext } from "react"
import StyledCards from "./style";
import { localAPI } from "../../services";
import { AdsContext } from "../../contexts/ads.context"
import { iAd } from "interfaces/ads.interfaces";
import { useNavigate } from "react-router-dom";

function CarCard({ ads }: any) {
  const [users, setUsers] = useState<any>([])
  const { getAdsById } = useContext(AdsContext)
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        const userIds = ads.map((ad: any) => localAPI.get(`/users/${ad.user_id}`));
  
        const responses = await Promise.all(userIds);
        const usersData = responses.map(response => response.data);
  
        setUsers(usersData);
      } catch (error) {
        console.log(error);
      }
    }
  
    getUsers();
  },[ads])

  return (
    <StyledCards>
 {ads.map((ad: any, index: number) => {
        const user = users.find((user: any) => user.id === ad.user_id)

        return (
          <li key={index}>
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
        )
      })}
    </StyledCards>
  );
}

export default CarCard;
