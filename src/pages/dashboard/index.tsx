import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import { StyledSection, StyledBack, StyledUser, StyledImgCircle, StyledRow, StyledH2, StyledH3, StyledP, StyledAddAdBtn } from './styles'
import { useContext } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { NewAdModal } from '../../components/modals/newAdModal'
import UpdateUserModal from '../../components/modals/modalUpdateUser'
import { SellerAdsList } from '../../components/SellerAdsList/index'

const Dashboard = () => {
	const { sellerAds, getSellerAds, showNewAdForm, setShowNewAdState } =
		useContext(AdsContext)

	getSellerAds()
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
					<StyledP> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </StyledP>
					<StyledAddAdBtn onClick={setShowNewAdState}> Criar anúncio </StyledAddAdBtn>
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
			{showNewAdForm && <NewAdModal />}
			<Footer />
			< UpdateUserModal/>
		</StyledSection>
	)
}

export default Dashboard
