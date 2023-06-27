import { iAd } from "interfaces/ads.interfaces"
import { number } from "zod"

export const SoloAdCard = ({brand, price, fuel, model, description, cover_image, mileage, year}: iAd) => {
    return(
        <>
            <li>
                <img className="car-image" src={cover_image}></img>
                <h3>{brand} - {model}</h3>
                <p className="car-description">{description}</p>
                <div className="user-info">
                    <img src="user-image" alt="" />
                    <h4>Samuel Leão</h4>
                </div>
                <div className="more-info">
                    <div>
                        <span>{mileage} KM</span>
                        <span>{year} </span>
                    </div>
                    <p>R$ {price.toFixed(2)}</p>
                </div>
                <p>{fuel}</p>
            </li>
        </>
    )
}