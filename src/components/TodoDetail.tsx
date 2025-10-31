import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTodoStore from '../store/store'

const TodoDetail = () => {
	const { id } = useParams()
	const { updateTodo } = useTodoStore()
	const todo = useTodoStore((state) => state.todos.find((t) => t.id === id!))

	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [status, setStatus] = useState<'To Do' | 'In Progress' | 'Done'>(
		'To Do'
	)

	const navigate = useNavigate()

	const handleClick = () => {
		if (title && description) {
			updateTodo({
				...todo,
				id: todo!.id.toString(),
				title: title,
				status: status,
				description: description,
			})
			navigate('/')
		}
	}
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault()
		if (
			e.target.value === 'To Do' ||
			e.target.value === 'In Progress' ||
			e.target.value === 'Done'
		)
			setStatus(e!.target!.value!)
	}

	return (
		<div className="text-3xl space-x-2 space-y-3.5 p-5">
			<label>Task: </label>
			<br />
			<input
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				type="text"
				placeholder={todo?.title}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<label htmlFor={todo!.id.toString()}>Completed:</label>
			<select
				id="NewTodo"
				name="status"
				value={status}
				onChange={(e) => handleChange(e)}
			>
				<option value="To Do">To Do</option>
				<option value="In Progress">In Progress</option>
				<option value="Done">Done</option>
			</select>
			<br />
			<textarea
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				placeholder={' Descrption...'}
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button onClick={handleClick}>Update Todo</button>
		</div>
	)
}

export default TodoDetail
