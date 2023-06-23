import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import { StyledSection, StyledBack } from './styles'
import { useContext, useEffect } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { NewAdModal } from '../../components/modals/newAdModal'
import { SellerAdsList } from '../../components/SellerAdsList'

const Dashboard = () => {
	const { sellerAds, getSellerAds, showNewAdForm, setShowNewAdState } =
		useContext(AdsContext)

	getSellerAds()
	return (
		<StyledSection>
			<div>
				<Header />
				<StyledBack/>
			</div>
			<main>
				<div className='divAdvertisement'>
					{sellerAds.length === 0 ? (
						<div>
							<h3> Esta conta ainda não criou anúncios </h3>
						</div>
					) : (
						<SellerAdsList />
					)}
				</div>
			</main>
			<button onClick={setShowNewAdState}> Criar anúncio </button>
			{showNewAdForm && <NewAdModal />}
			<Footer />
		</StyledSection>
	)
}

export default Dashboard
