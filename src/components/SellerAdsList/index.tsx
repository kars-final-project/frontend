import { iAd } from 'interfaces/ads.interfaces'
import { useContext } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { SoloAdCard } from '../SoloAdCard'

export const SellerAdsList = () => {
	const { sellerAds } = useContext(AdsContext)

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
					mileage={''}
					color={''}
					year={''}
					table_price={0}
					is_active={true}
				/>
			})}
		</>
	)
}
