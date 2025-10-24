import { useParams } from 'react-router-dom'
import useTodoStore from '../store/store'

const TodoDetail = () => {
	const { id } = useParams()
	const { todos, toggleTodo, updateTodo } = useTodoStore()
	const todo = todos.find((t) => t.id === parseInt(id!))
	return (
		<>
			<input
				type="text"
				placeholder={todo?.task}
				defaultValue={todo?.task}
				onChange={(e) => updateTodo(todo!.id, e.target.value)}
			/>
			<label htmlFor={todo!.id.toString()}>Completed:</label>
			<input
				className="size-3 ml-2"
				type="checkbox"
				checked={todo!.completed}
				onClick={() => toggleTodo(todo!.id)}
				id={todo!.id.toString()}
			/>
		</>
	)
}

export default TodoDetail
