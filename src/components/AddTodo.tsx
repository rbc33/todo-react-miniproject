import { useState } from 'react'
import useTodoStore from '../store/store'
import { useNavigate } from 'react-router-dom'
// import List from './List'

const AddTodo = () => {
	const { todos, addTodo } = useTodoStore()
	const [task, setTask] = useState<string>()
	const [completed, setCompleted] = useState<boolean>(false)
	const newId = Math.max(...todos.map((t) => t.id))
	const navigate = useNavigate()

	const handleClick = () => {
		if (task) {
			addTodo({ id: newId, task: task, completed: completed })
			navigate('/')
		}
	}
	return (
		<div className="text-3xl space-x-2  space-y-5 p-5">
			<label>Task: </label>
			<br />
			<input
				type="text"
				placeholder={'task'}
				onChange={(e) => setTask(e.target.value)}
			/>
			<br />
			<label htmlFor={'newTodo'}>Completed:</label>
			<input
				className="size-6 ml-2"
				type="checkbox"
				onClick={() => setCompleted(!completed)}
				id={'newTodo'}
			/>
			<br />
			<button className="mt-5" onClick={handleClick}>
				Add Todo
			</button>
			{/* <List todos={todos} /> */}
		</div>
	)
}

export default AddTodo
