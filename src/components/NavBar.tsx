import { FaRegCheckSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav className="flex h-15 items-center p-5 border-2 border-slate-400">
			<Link to="/" className="flex items-center gap-2">
				<FaRegCheckSquare className="size-10 text-red-500" />
				<p className="text-3xl font-bold">Todo List</p>
			</Link>
		</nav>
	)
}

export default NavBar
