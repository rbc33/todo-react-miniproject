import { Link, useNavigate, useParams } from 'react-router-dom'
import useTodoStore from '../store/store'

import { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const TodoDetail = () => {
	const { id } = useParams()
	const { todos, loading, fetchTodos, removeTodo } = useTodoStore()
	const navigate = useNavigate()
	const todo = todos.find((t) => t.id === id!)

	useEffect(() => {
		if (todos.length === 0) {
			fetchTodos()
		}
	}, [])

	const handleDelete = () => {
		removeTodo(parseInt(todo!.id))
		navigate('/', {
			state: { showToast: true, message: `${todo!.title} deleted!` },
		})
	}
	
	if (loading) return <div>Loading...</div>
	if (!todo) return <div>Todo not found</div>
	return (
		<div className='flex gap-20'>
		<div className="text-2xl space-x-2 space-y-3.5 p-5">
			<p>Title: {todo!.title} </p>
			
			<p>Status: {todo!.status}</p>
			
			<p>Priority: {todo!.priority?? "not setted"}</p>

			
			<p>Description: {todo!.description}</p> 
			
			<p>Assignee: {todo!.assignee?? "not assigned"}</p>
			
			<p>Due Date: {todo!.dueDate?? "not due date"}</p>
			
			<p>Created at: {todo!.createdDate}</p>
		</div>
		<div className="mt-5">
			<button className='h-16 mt-'><Link to={`/todo/${id}/edit`}>Edit</Link></button>
				<button
					className="bg-red-500/80! mt-5 flex items-center justify-center"
					onClick={handleDelete}
				>
					<FaTrashAlt className="" />
				</button>
			</div>
		</div>
	)
}

export default TodoDetail
