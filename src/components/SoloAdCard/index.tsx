import { iAd } from "interfaces/ads.interfaces"

export const SoloAdCard = ({brand, price, fuel, model, description, cover_image}: iAd) => {
    return(
        <>
            <div>
                <p>{brand}</p>
                <p>{price}</p>
                <p>{fuel}</p>
                <p>{model}</p>
                <p>{description}</p>
                <p>{cover_image}</p>
            </div>
        </>
    )
}