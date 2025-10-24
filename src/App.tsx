import './App.css'
import useStore from './store/store'

function App() {
	const { todos } = useStore()

	return (
		<>
			{todos.map((t) => (
				<p key={`todo-${t.id}`}>{t.task}</p>
			))}
		</>
	)
}

export default App
