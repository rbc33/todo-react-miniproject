import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTodoStore from '../store/store'

const TodoDetail = () => {
	const { id } = useParams()
	const { todos, updateTodo, removeTodo } = useTodoStore()
	const todo = todos.find((t) => t.id === id!)

	const [title, setTitle] = useState<string>(todo!.title)
	const [description, setDescription] = useState<string>(todo!.description)
	const [assignee, setAssignee] = useState<string | undefined>(todo!.assignee)
	const [dueDate, setDueDate] = useState(todo!.dueDate)
	const [status, setStatus] = useState<'To Do' | 'In Progress' | 'Done'>(
		todo!.status
	)
	const [priority, setPriority] = useState<
		'Low' | 'Medium' | 'High' | undefined
	>(todo!.priority)

	const navigate = useNavigate()

	const handleClick = () => {
		if (title && description) {
			updateTodo({
				...todo,
				id: todo!.id.toString(),
				title: title,
				status: status,
				description: description,
				assignee: assignee,
				dueDate: dueDate,
				priority: priority,
			})
			navigate('/')
		}
	}
	const handleState = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

	const handleDelete = () => {
		removeTodo(parseInt(todo!.id))
		navigate('/')
	}

	return (
		<div className="flex">
			<div className="text-2xl space-x-2 space-y-3.5 p-5">
				<label>Title: </label>
				<br />
				<input
					className="mt-2 border-2 border-slate-400 w-[40vw]"
					type="text"
					placeholder={todo?.title}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<br />
				<label htmlFor={todo!.id.toString()}>Status:</label>
				<select
					className="mt-2 border-2 border-slate-400 w-[12vw]"
					id="NewTodo"
					name="status"
					value={status}
					onChange={(e) => handleState(e)}
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
					value={priority}
					onChange={(e) => handlePriority(e)}
				>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</select>
				<br />
				<label htmlFor="descrption">Description:</label>
				<br />
				<textarea
					id="description"
					className="mt-2 border-2 border-slate-400 w-[40vw]"
					placeholder={' Descrption...'}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<br />
				<label htmlFor="author">Assignee: </label>
				<br />
				<input
					className="mt-2 border-2 border-slate-400 w-[40vw]"
					id="author"
					type="text"
					placeholder={'assignee...'}
					value={assignee}
					onChange={(e) => setAssignee(e.target.value)}
				/>
				{todo?.createdDate && (
					<p className="mt-2">Created at: {todo!.createdDate}</p>
				)}
				<label htmlFor="due">Due Date: </label>
				<input
					className="mt-2 border-2 border-slate-400 w-[13vw] h-10"
					type="date"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
				/>
				<br />
			</div>
			<div className="mt-5">
				<button onClick={handleClick}>Update Todo</button>
				<button className="bg-red-500/80! ml-5" onClick={handleDelete}>
					Delete Todo
				</button>
			</div>
		</div>
	)
}

export default TodoDetail
