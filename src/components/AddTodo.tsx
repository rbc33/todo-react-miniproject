import { useState } from 'react'
import useTodoStore from '../store/store'
import { useNavigate } from 'react-router-dom'
// import List from './List'

const AddTodo = () => {
	const { todos, addTodo } = useTodoStore()
	const [title, setTitle] = useState<string>()
	const [description, setDescription] = useState<string>()
	const [assignee, setAssignee] = useState<string | undefined>()
	const [dueDate, setDueDate] = useState<string | undefined>()
	const [status, setStatus] = useState<'To Do' | 'In Progress' | 'Done'>(
		'To Do'
	)
	const [priority, setPriority] = useState<
		'Low' | 'Medium' | 'High' | undefined
	>()
	const newId = Math.max(...todos.map((t) => parseInt(t.id))) + 1
	const navigate = useNavigate()

	const handleClick = () => {
		if (title && description) {
			const today = new Date().toLocaleDateString('es-ES')

			addTodo({
				id: newId.toString(),
				title: title,
				status: status,
				description: description,
				assignee: assignee,
				createdDate: today,
				dueDate: dueDate,
				priority: priority,
			})
			navigate('/')
		}
	}
	const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault()
		if (
			e.target.value === 'To Do' ||
			e.target.value === 'In Progress' ||
			e.target.value === 'Done'
		)
			setStatus(e!.target!.value!)
	}
	const handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault()
		if (
			e.target.value === 'Low' ||
			e.target.value === 'Medium' ||
			e.target.value === 'High'
		)
			setPriority(e!.target!.value!)
	}
	return (
		<div className="text-2xl space-x-2  space-y-5 p-5">
			<label>Title: </label>
			<br />
			<input
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				type="text"
				placeholder={' title'}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<label>Description: </label>
			<br />
			<textarea
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				placeholder={' Descrption...'}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<label htmlFor={'newTodo'}>Status:</label>
			<select
				className="mt-2 border-2 border-slate-400 w-[12vw]"
				id="NewTodo"
				name="status"
				onChange={(e) => handleStatus(e)}
			>
				<option value="To Do">To Do</option>
				<option value="In Progress">In Progress</option>
				<option value="Done">Done</option>
			</select>
			<br />
			<label htmlFor={'newTodo'}>Priority:</label>
			<select
				className="mt-2 border-2 border-slate-400 w-[12vw]"
				id="NewTodo"
				name="status"
				onChange={(e) => handlePriority(e)}
			>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>
			<br />
			<label htmlFor="author">Assignee: </label>
			<br />
			<input
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				id="author"
				type="text"
				placeholder={'assignee...'}
				onChange={(e) => setAssignee(e.target.value)}
			/>
			<br />
			<label htmlFor="due">Due Date: </label>
			<input
				className="mt-2 border-2 border-slate-400 w-[13vw] h-10"
				type="date"
				value={dueDate}
				onChange={(e) => setDueDate(e.target.value)}
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
