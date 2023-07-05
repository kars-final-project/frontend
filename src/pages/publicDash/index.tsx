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

const PublicDashboard = () => {
	const { sellerAds, getSellerAds, showEditAddressModal } = useContext(AdsContext)

	const params = useParams()

	const id = params.id

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
					{sellerAds.length === 0 ? (
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
