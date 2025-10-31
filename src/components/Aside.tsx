import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Aside = () => {
	const location = useLocation()
	return (
		<aside className="w-35 -mt-0.5 flex flex-col gap-4 border-2 border-slate-400 h-screen p-5 font-bold text-xl">
			<Link
				className={
					location.pathname === '/' ? 'text-slate-400' : 'hover:text-slate-400!'
				}
				to="/"
			>
				Home
			</Link>
			<Link
				className={
					location.pathname === '/addtodo'
						? 'whitespace-nowrap text-slate-400'
						: 'whitespace-nowrap hover:text-slate-400!'
				}
				to="/addtodo"
			>
				New Todo
			</Link>
			<Link
				className={
					location.pathname === '/about'
						? 'text-slate-400'
						: 'hover:text-slate-400!'
				}
				to="/about"
			>
				About
			</Link>
		</aside>
	)
}

export default Aside
