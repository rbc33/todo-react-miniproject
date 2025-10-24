import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import List from './components/List'
import useTodoStore from './store/store'
import TodoDetail from './components/TodoDetail'
import { FaRegCheckSquare } from 'react-icons/fa'
import AddTodo from './components/AddTodo'

function App() {
	const { todos } = useTodoStore()

	return (
		<>
			<nav className="flex h-15 items-center p-5">
				<Link to="/" className="flex items-center gap-2">
					<FaRegCheckSquare className="size-10" />
					<p className="text-3xl font-bold">Todo List</p>
				</Link>
			</nav>
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
				<Route path="/*" element={<h1 className="p-5">Error 404</h1>} />
			</Routes>
		</>
	)
}

export default App
