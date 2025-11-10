import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'
import Legend from '../components/Legend'
import Panel from '../components/Panel'
import useTodoStore, { type Todo } from '../store/store'

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
		return (
			<div className="flex flex-col">
			<div className="flex gap-8 ml-3 mt-3 p-5">
				<div className='border-2 border-gray-400 p-5'>
				<div role="status" className="w-[22vw] animate-pulse">
				<div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-700  mb-4"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				<span className="sr-only">Loading...</span>
					</div></div>
				<div className='border-2 border-gray-400 p-5'>
				<div role="status" className="w-[22vw] animate-pulse">
				<div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-700  mb-4"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				<span className="sr-only">Loading...</span>
					</div>
					</div>
				<div className='border-2 border-gray-400 p-5'>
				<div role="status" className="w-[22vw] animate-pulse">
				<div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-700  mb-4"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				<span className="sr-only">Loading...</span>
					</div>
					</div>
					</div>
				<Legend />
			</div>
		)
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
