import { NavLink } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const Aside = () => {
	// const location = useLocation()
	return (
		<aside className="w-35 -mt-0.5 flex flex-col gap-4 border-r-2 border-slate-400 min-h-screen p-5 font-bold text-xl">
			<NavLink
				className={({ isActive }) =>
					isActive ? 'text-slate-400' : 'hover:text-slate-400!'
				}
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? 'whitespace-nowrap text-slate-400'
						: 'whitespace-nowrap hover:text-slate-400!'
				}
				to="/addtodo"
			>
				New Todo
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? 'whitespace-nowrap text-slate-400'
						: 'whitespace-nowrap hover:text-slate-400!'
				}
				to="/list"
			>
				List
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? 'text-slate-400' : 'hover:text-slate-400!'
				}
				to="/about"
			>
				About
			</NavLink>
		</aside>
	)
}

export default Aside
