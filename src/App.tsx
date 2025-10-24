import './App.css'
import List from './components/List'
import useTodoStore from './store/store'

function App() {
	const { todos } = useTodoStore()

	return (
		<>
			<List todos={todos} />
		</>
	)
}

export default App
