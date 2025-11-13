import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'
import Legend from '../components/Legend'
import Panel from '../components/Panel'
import useTodoStore, { type Todo } from '../store/store'
import Skeleton from '../components/Skeleton'

const Kanban = () => {
	const location = useLocation()
	const toastShown = useRef(false)

	const { todos, loading, error, updateTodo, fetchTodos } = useTodoStore()
	useEffect(() => {
		fetchTodos()
	}, [fetchTodos])

	useEffect(() => {
		if (location.state?.showToast && !toastShown.current) {
			toast.success(location.state.message)
			toastShown.current = true
			window.history.replaceState({}, document.title)
		}
	}, [location.state])

	const handleDragStart = (e: React.DragEvent, todoId: string) => {
		e.dataTransfer.setData('todoId', todoId)
	}

	const handleDrop = async (e: React.DragEvent, status: Todo['status']) => {
		e.preventDefault()
		const todoId = e.dataTransfer.getData('todoId')
		const todo = todos.find((t) => t.id === todoId)
		if (todo) {
			await updateTodo({ ...todo, status: status })
		}
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
	}
	if (loading) {
		return <Skeleton />
	}

	if (error) {
		return <div className="p-5 text-red-500">Error: {error.message}</div>
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
