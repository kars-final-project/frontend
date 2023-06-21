import { iAd } from 'interfaces/ads.interfaces'
import { useContext } from 'react'
import { AdsContext } from '../../contexts/ads.context'

export const SellerAdsList = () => {
    const { sellerAds } = useContext(AdsContext)

    return(
        <>
            {sellerAds.map((ad: iAd) => {
                <div>
                    <p>{ad.brand}</p>
                    <p>{ad.price}</p>
                    <p>{ad.fuel}</p>
                    <p>{ad.model}</p>
                    <p>{ad.description}</p>
                    <p>{ad.cover_image}</p>
                </div>
            })}
        </>
    )
}