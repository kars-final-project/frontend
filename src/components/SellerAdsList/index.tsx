import { iAd } from 'interfaces/ads.interfaces'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { localAPI } from '../../services'
import { AdsContext } from '../../contexts/ads.context'
import { SoloAdCard } from '../SoloAdCard'
import { StyledList } from './style'

export const SellerAdsList = () => {
	const [ publicAds, setPublicAds ] = useState([])

	const params = useParams()

	const userId = params.id

	useEffect(() => {
		getPublicSellerAds(userId)
	}, [])

	const getPublicSellerAds = async (id: any) => {
		try {
			console.log(id)
			const response = await localAPI.get(`advertisements/byUserId/${id}`)
			setPublicAds(response.data)
		}
		catch (error){
			console.error('Erro ao obter anúncios', error)
		}
	}

	return (
		<StyledList>
			{publicAds.map((ad: any, index: number) => {
				return <SoloAdCard ad={ad} key={index}/>
			})}
		</StyledList>
	)
}
