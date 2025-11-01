import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import AddTodo from '../pages/AddTodo'
import List from '../pages/List'
import TodoDetail from '../pages/TodoDetail'
import useTodoStore from '../store/store'

const AppRouter = () => {
	const { todos } = useTodoStore()

	return (
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
	)
}

export default AppRouter
