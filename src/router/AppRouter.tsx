import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../components/List'
import TodoDetail from '../components/TodoDetail'
import AddTodo from '../components/AddTodo'
import About from '../components/About'
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
