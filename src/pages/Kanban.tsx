import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'
import Legend from '../components/Legend'
import Panel from '../components/Panel'
import useTodoStore, { type Todo } from '../store/store'

interface Props {
	todos: Todo[]
}

const Kanban = ({ todos }: Props) => {
	const location = useLocation()
	const toastShown = useRef(false)

	useEffect(() => {
		if (location.state?.showToast && !toastShown.current) {
			toast.success(location.state.message)
			toastShown.current = true
			window.history.replaceState({}, document.title)
		}
	}, [location.state])

	const { updateTodo } = useTodoStore()

	const handleDragStart = (e: React.DragEvent, todoId: string) => {
		e.dataTransfer.setData('todoId', todoId)
	}

	const handleDrop = (e: React.DragEvent, status: Todo['status']) => {
		e.preventDefault()
		const todoId = e.dataTransfer.getData('todoId')
		const todo = todos.find((t) => t.id === todoId)
		if (todo) {
			updateTodo({ ...todo, status: status })
		}
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
	}

	return (
		<div className="flex flex-col">
			<div className="flex gap-8 ml-3 mt-3 p-5">
				<Panel
					todos={todos}
					status="To Do"
					handleDrop={handleDrop}
					handleDragOver={handleDragOver}
					handleDragStart={handleDragStart}
				/>
				<Panel
					todos={todos}
					status="In Progress"
					handleDrop={handleDrop}
					handleDragOver={handleDragOver}
					handleDragStart={handleDragStart}
				/>
				<Panel
					todos={todos}
					status="Done"
					handleDrop={handleDrop}
					handleDragOver={handleDragOver}
					handleDragStart={handleDragStart}
				/>
			</div>
			<Legend />
		</div>
	)
}

export default Kanban
