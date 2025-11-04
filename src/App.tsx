import { Toaster } from 'react-hot-toast'
import './App.css'
import Aside from './components/Aside'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AppRouter from './router/AppRouter'

function App() {
	return (
		<>
			<NavBar />
			<div className="flex">
				<Aside />
				<div className="flex flex-col justify-between">
					<AppRouter />
					<Footer />
				</div>
				<Toaster position="top-right" />
			</div>
		</>
	)
}

export default App
