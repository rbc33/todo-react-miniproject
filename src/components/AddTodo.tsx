import { useState } from 'react'
import useTodoStore from '../store/store'
import { useNavigate } from 'react-router-dom'
// import List from './List'

const AddTodo = () => {
	const { todos, addTodo } = useTodoStore()
	const [title, setTitle] = useState<string>()
	const [description, setDescription] = useState<string>()
	const [status, setStatus] = useState<'To Do' | 'In Progress' | 'Done'>(
		'To Do'
	)
	const newId = Math.max(...todos.map((t) => parseInt(t.id)))
	const navigate = useNavigate()

	const handleClick = () => {
		if (title && description) {
			addTodo({
				id: newId.toString(),
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
		<div className="text-3xl space-x-2  space-y-5 p-5">
			<label>Title: </label>
			<br />
			<input
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				type="text"
				placeholder={' task'}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<label>descrption: </label>
			<br />
			<textarea
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				placeholder={' Descrption...'}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<label htmlFor={'newTodo'}>Completed:</label>
			<select id="NewTodo" name="status" onChange={(e) => handleChange(e)}>
				<option value="To Do">To Do</option>
				<option value="In Progress">In Progress</option>
				<option value="Done">Done</option>
			</select>
			<br />
			<button className="mt-5" onClick={handleClick}>
				Add Todo
			</button>
			{/* <List todos={todos} /> */}
		</div>
	)
}

export default AddTodo
