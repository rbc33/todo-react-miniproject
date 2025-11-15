import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTodoStore from '../store/store'
import EditCreate from '../components/Form'
// import { FaTrashAlt } from 'react-icons/fa'
import type Todo from '../types/todo'

const TodoEdit= () => {
	const { id } = useParams()
	console.log(id)
	const { todos, loading, updateTodo, fetchTodos } = useTodoStore()
	const todo = todos.find((t) => t.id == id!)

	console.log(todo)

	    const [title, setTitle] = useState<string| undefined>(todo?.title);
    const [description, setDescription] = useState<string| undefined>(todo?.description);
    const [assignee, setAssignee] = useState<string| undefined>(todo?.assignee);
    const [dueDate, setDueDate] = useState<string| undefined>(todo?.dueDate);
    const [status, setStatus] = useState<Todo['status']| undefined>(todo?.status);
    const [priority, setPriority] = useState<Todo['priority']>(todo?.priority);

    // Cargar los datos del todo cuando el componente se monta o cuando cambia el todo
    useEffect(() => {
		fetchTodos()
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
            setAssignee(todo.assignee);
            setDueDate(todo.dueDate);
            setStatus(todo.status);
            setPriority(todo.priority);
        }
    }, [todo?.title]);


	const navigate = useNavigate()

	const handleClick = () => {
		if (title &&  description && status) {
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
			navigate('/', {
				state: { showToast: true, message: `${title} updated` },
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

	// const handleDelete = () => {
	// 	removeTodo(parseInt(todo!.id))
	// 	navigate('/', {
	// 		state: { showToast: true, message: `${title} deleted!` },
	// 	})
	// }
	
	if (loading) return <div>Loading...</div>
	if (!todo) return <div>Todo not found</div>

	return (
		<div className="flex">
		{todo &&
			<EditCreate
				title={title}
				description={description}
				assignee={assignee}
				dueDate={dueDate}
				status={status!}
				priority={priority}
				createdAt={todo?.createdDate}
				setTitle={setTitle}
				handlePriority={handlePriority}
				handleState={handleState}
				setDescription={setDescription}
				setAssignee={setAssignee}
				setDueDate={setDueDate}
			/>
				}
			<div className="mt-5">
				<button onClick={handleClick}>Update Todo</button>
				{/* <button
					className="bg-red-500/80! mt-5 flex items-center justify-center"
					onClick={handleDelete}
				>
					<FaTrashAlt className="" />
				</button> */}
			</div>
		</div>
	)
}

export default TodoEdit
