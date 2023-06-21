import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import { StyledSection } from './styles'
import { useContext, useEffect } from 'react'
import { AdsContext } from '../../contexts/ads.context'

const Dashboard = () => {
	const { sellerAds, showNewAdForm } =
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
			<Footer />
			{showNewAdForm}
		</StyledSection>
	)
}
export default Dashboard
