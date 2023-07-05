import AuthProvider from './contexts/auth.context'
import { AdsProvider } from './contexts/ads.context'
import RoutesMotor from './routes'
import { FilterProvider } from './contexts/filter.context'

function App() {
	return (
		<>
			<AuthProvider>
				<AdsProvider>
					<FilterProvider>
						<RoutesMotor />
					</FilterProvider>
				</AdsProvider>
			</AuthProvider>
		</>
	)
}

export default App
