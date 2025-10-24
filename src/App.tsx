import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import List from './components/List'
import useTodoStore from './store/store'
import TodoDetail from './components/TodoDetail'
import { FaRegCheckSquare } from 'react-icons/fa'
import AddTodo from './components/AddTodo'
import About from './components/About'

function App() {
	const { todos } = useTodoStore()

	return (
		<>
			<nav className="flex h-15 items-center p-5 border-2 border-white">
				<Link to="/" className="flex items-center gap-2">
					<FaRegCheckSquare className="size-10" />
					<p className="text-3xl font-bold">Todo List</p>
				</Link>
			</nav>
			<div className="flex">
				<aside className="w-35 flex flex-col gap-4 border-2 border-white h-screen p-5 font-bold text-xl">
					<Link to="/">Home</Link>
					<Link to="/addtodo">New Todo</Link>
					<Link to="/about">About</Link>
				</aside>
				<Routes>
					<Route path="/" element={<List todos={todos} />} />

					<Route
						path="/todo/:id"
						element={
							<TodoDetail
							// todos={todos}
							/>
						}
					/>
					<Route path="/addtodo" element={<AddTodo />} />
					<Route path="/about" element={<About />} />
					<Route path="/*" element={<h1 className="p-5">Error 404</h1>} />
				</Routes>
			</div>
		</>
	)
}

export default App
