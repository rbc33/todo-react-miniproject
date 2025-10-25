import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTodoStore from '../store/store'
import TodoIcon from './TodoIcon'
// import useTodoStore, { type Todo } from '../store/store'

// interface Props {
// 	todos: Todo[]
// }

const TodoDetail = () => {
	// const TodoDetail = ({ todos }: Props) => {
	const { id } = useParams()
	const { todos, updateTodo } = useTodoStore()
	const todo = todos.find((t) => t.id === parseInt(id!))
	const [task, setTask] = useState<string>(todo!.task)
	// const [completed, setCompleted] = useState<boolean>(false)
	const navigate = useNavigate()

	const handleClick = () => {
		if (typeof task === 'string') {
			updateTodo({ id: todo!.id, task: task, completed: todo!.completed })
			navigate('/')
		}
	}

	return (
		<div className="text-3xl space-x-2 space-y-3.5 p-5">
			<label>Task: </label>
			<br />
			<input
				className="border-2 w-[40vw]"
				type="text"
				placeholder={todo?.task}
				defaultValue={todo?.task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<br />
			<div className="flex items-center space-x-3">
				<label htmlFor={todo!.id.toString()}>Completed:</label>
				{/* <input
				className="size-6 ml-2 border-slate-400"
				type="checkbox"
				onClick={() => setCompleted(!todo!.completed)}
				id={todo!.id.toString()}
			/> */}
				<TodoIcon todo={todo!} />
			</div>
			<br />
			<button onClick={handleClick}>Update Todo</button>
		</div>
	)
}

export default TodoDetail
