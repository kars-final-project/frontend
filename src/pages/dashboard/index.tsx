import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import { StyledSection } from './styles'
import { useContext, useEffect } from 'react'
import { AdsContext } from '../../contexts/ads.context'
import { NewAdModal } from '../../components/modals/newAdModal'
import UpdateUserModal from '../../components/modals/modalUpdateUser'

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
			< UpdateUserModal/>
		</StyledSection>
	)
}

export default Dashboard
