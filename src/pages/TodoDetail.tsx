import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTodoStore from '../store/store'
import EditCreate from '../components/Form'

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
			<EditCreate
				todo={todo}
				setTitle={setTitle}
				handlePriority={handlePriority}
				handleState={handleState}
				setDescription={setDescription}
				setAssignee={setAssignee}
				setDueDate={setDueDate}
			/>
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
