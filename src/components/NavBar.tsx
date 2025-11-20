// import { BsKanban } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import kanbanImg from '../assets/kanban.png'


const NavBar = () => {
	return (
		<nav className="flex h-15 items-center p-5 border-b-2 border-slate-400">
			<Link to="/" className="flex items-center gap-2">
				{/* <BsKanban className="size-10 text-red-500" /> */}
				<img src={kanbanImg} className='size-10' />
				<p className="text-3xl font-bold">Kanban Board</p>
			</Link>
		</nav>
	)
}

export default NavBar
