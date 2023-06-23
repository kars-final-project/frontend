import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import { StyledSection } from './styles'
import { useContext, useEffect } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { NewAdModal } from '../../components/modals/newAdModal'

const Dashboard = () => {
	const { sellerAds, showNewAdForm, setShowNewAdState } =
		useContext(AdsContext)

	return (
		<StyledSection>
			<Header />
			<main>
				<div className='divAdvertisement'>
					{sellerAds.length === 0 ? (
						<div />
					) : (
						<section />
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
