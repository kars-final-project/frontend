import { iAd } from 'interfaces/ads.interfaces'
import { useContext } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { SoloAdCard } from '../SoloAdCard'
import { StyledList } from './style'

export const SellerAdsList = () => {
	const { sellerAds, getSellerAds } = useContext(AdsContext)

	getSellerAds()
	return (
		<StyledList>
			{sellerAds.map((ad: any) => {
				return <SoloAdCard ad={ad}/>
			})}
		</StyledList>
	)
}
