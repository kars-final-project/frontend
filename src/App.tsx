import { AdsProvider } from './contexts/ads.context'
import RoutesMotor from './routes'

function App() {
	return (
		<>
			<AdsProvider>
				<RoutesMotor />
			</AdsProvider>
		</>
	)
}

export default App
