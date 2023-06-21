import Home from '../pages/home/index'
import { Routes, Route } from 'react-router-dom'
import Product from '../pages/product/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Dashboard from '../pages/dashboard/index'

function RoutesMotor() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/product'
				element={<Product />}
			/>
			<Route
				path='/login'
				element={<Login />}
			/>
			<Route
				path='/register'
				element={<Register />}
			/>
			<Route
				path='/dashboard'
				element={<Dashboard />}
			/>
		</Routes>
	)
}

export default RoutesMotor
