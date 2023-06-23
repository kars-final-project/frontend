import { iAd } from 'interfaces/ads.interfaces'
import { useContext } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { SoloAdCard } from '../SoloAdCard'

export const SellerAdsList = () => {
	const { sellerAds, getSellerAds } = useContext(AdsContext)

	getSellerAds()
	return (
		<>
			{sellerAds.map((ad: iAd) => {
				<SoloAdCard
					brand={ad.brand}
					price={ad.price}
					fuel={ad.fuel}
					model={ad.model}
					description={ad.description}
					cover_image={ad.cover_image}
					mileage={ad.mileage}
					color={ad.color}
					year={ad.year}
					fipe_list_price={ad.fipe_list_price}
					is_active={true}
				/>
			})}
		</>
	)
}
