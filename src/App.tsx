import AuthProvider from './contexts/auth.context'
import { AdsProvider } from './contexts/ads.context'
import RoutesMotor from './routes'

function App() {
	return (
		<>
			<AuthProvider>
				<AdsProvider>
					<RoutesMotor />
				</AdsProvider>
			</AuthProvider>
		</>
	)
}

export default App
