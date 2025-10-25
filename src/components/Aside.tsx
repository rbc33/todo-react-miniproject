import { Link } from 'react-router-dom'

const Aside = () => {
	return (
		<aside className="w-35 flex flex-col gap-4 border-2 border-slate-400 h-screen p-5 font-bold text-xl">
			<Link to="/">Home</Link>
			<Link className="whitespace-nowrap" to="/addtodo">
				New Todo
			</Link>
			<Link to="/about">About</Link>
		</aside>
	)
}

export default Aside
