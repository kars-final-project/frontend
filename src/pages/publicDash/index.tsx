import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import {
	StyledSection,
	StyledBack,
	StyledUser,
	StyledImgCircle,
	StyledRow,
	StyledH2,
	StyledH3,
	StyledP,
} from './styles'
import { useContext, useEffect } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { SellerAdsList } from '../../components/SellerAdsList'
import { useParams } from 'react-router-dom'
import ModalEditAddress from '../../components/modals/modalEditAddress/index'
import { localAPI } from '../../services'
import { useState } from 'react'

const PublicDashboard = () => {
	const { showEditAddressModal } = useContext(AdsContext)
	const [ publicAds, setPublicAds ] = useState([])

	const params = useParams()

	const userId = params.id

	useEffect(() => {
		getPublicSellerAds(userId)
	}, [])

	const getPublicSellerAds = async (id: any) => {
		try {
			const response = await localAPI.get(`advertisements/byUserId/${id}`)
			setPublicAds(response.data)
		}
		catch (error){
			console.error('Erro ao obter anúncios', error)
		}
	}

	return (
		<StyledSection>
			<div>
				<Header />
				<StyledBack />
				<StyledUser>
					<StyledImgCircle />
					<StyledRow>
						<StyledH2> Samuel Leão </StyledH2>
						<StyledH3> Anunciante </StyledH3>
					</StyledRow>
					<StyledP>
						{' '}
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s{' '}
					</StyledP>
				</StyledUser>
			</div>
			<main>
				<div className='divAdvertisement'>
					{publicAds.length === 0 ? (
						<StyledRow>
							<h3> Esta conta ainda não criou anúncios </h3>
						</StyledRow>
					) : (
						<SellerAdsList />
					)}
				</div>
			</main>
			{showEditAddressModal && <ModalEditAddress/>}
			<Footer />
		</StyledSection>
	)
}

export default PublicDashboard
