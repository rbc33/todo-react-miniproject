import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import AddTodo from '../pages/AddTodo'
import Kanban from '../pages/Kanban'
import List from '../pages/List'
import TodoDetail from '../pages/TodoDetail'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Kanban />} />
			<Route path="/list" element={<List />} />

			<Route path="/todo/:id" element={<TodoDetail />} />
			<Route path="/addtodo" element={<AddTodo />} />
			<Route path="/about" element={<About />} />
			<Route path="/*" element={<h1 className="p-5">Error 404</h1>} />
		</Routes>
	)
}

export default AppRouter
