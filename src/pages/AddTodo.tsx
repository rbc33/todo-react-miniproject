import { useState } from 'react'
import useTodoStore, { type Todo } from '../store/store'
import { useNavigate } from 'react-router-dom'
import EditCreate from '../components/Form'

const AddTodo = () => {
	const { todos, addTodo } = useTodoStore()
	const [title, setTitle] = useState<string>()
	const [description, setDescription] = useState<string>()
	const [assignee, setAssignee] = useState<string | undefined>()
	const [dueDate, setDueDate] = useState<string | undefined>()
	const [status, setStatus] = useState<Todo['status']>('To Do')
	const [priority, setPriority] = useState<Todo['priority'] | undefined>()
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
			navigate('/', {
				state: { showToast: true, message: 'Todo added successfully!' },
			})
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
	return (
		<div className="flex">
			<EditCreate
				status={status}
				setTitle={setTitle}
				handlePriority={handlePriority}
				handleState={handleState}
				setDescription={setDescription}
				setAssignee={setAssignee}
				setDueDate={setDueDate}
			/>
			<div>
				<button className="mt-5" onClick={handleClick}>
					Add Todo
				</button>
			</div>
		</div>
	)
}

export default AddTodo
