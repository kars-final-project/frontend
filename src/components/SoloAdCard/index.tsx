import { iAd } from 'interfaces/ads.interfaces'
import UpdateAdvertisementModal from '../modals/modalUpdateAdvertisement'
import { useState } from 'react'
import { useContext } from 'react'
import { AdsContext } from '../../contexts/ads.context'

export const SoloAdCard = ({ ad }: any) => {
	const { setShowModalEditAd, showModalEditAd, setAdData, adData } =
		useContext(AdsContext)

	return (
		<>
			<li>
				<img
					className='car-image'
					src={ad.cover_image}
				></img>
				<h3>
					{ad.brand} - {ad.model}
				</h3>
				<p className='car-description'>{ad.description}</p>
				<div className='user-info'>
					<img
						src='user-image'
						alt=''
					/>
					<h4>{ 'Samuel Leão' }</h4>
				</div>
				<div className='more-info'>
					<div>
						<span>{ad.mileage} KM</span>
						<span>{ad.year} </span>
					</div>
					<p>
						{Number(ad.price).toLocaleString('pt-br', {
							style: 'currency',
							currency: 'BRL',
						})}
					</p>
				</div>
				<div className='edit-details-button'>
					<button
						onClick={() => {
							setShowModalEditAd(true)
							setAdData(ad)
						}}
					>
						Editar
					</button>
					<button>Ver detalhes</button>
				</div>
			</li>
		</>
	)
}
