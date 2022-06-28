import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/mainHeader';
import ProductDetail from './pages/ProductDetail';
function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Routes>
					<Route path='/' element={<Navigate to='/wecome' />} />
					<Route path='/welcome/*' element={<Welcome />}>
						<Route path='new-user' element={<p>welcome, New User</p>} />
					</Route>
					<Route path='/products' element={<Products />} />
					<Route path='/products/:id' element={<ProductDetail />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
