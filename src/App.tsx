import { Routes, Route } from 'react-router-dom'
import './App.css'
import List from './components/List'
import useTodoStore from './store/store'
import TodoDetail from './components/TodoDetail'

function App() {
	const { todos } = useTodoStore()

	return (
		<Routes>
			<Route path="/" element={<List todos={todos} />} />
			<Route path="/todo/:id" element={<TodoDetail />} />
		</Routes>
	)
}

export default App
