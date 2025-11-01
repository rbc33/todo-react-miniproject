import { Link } from 'react-router-dom'
import useTodoStore, { type Todo } from '../store/store'
import Legend from './Legend'

export interface Props {
	todos: Todo[]
}

const List = ({ todos }: Props) => {
	const { updateTodo } = useTodoStore()

	const handleDragStart = (e: React.DragEvent, todoId: string) => {
		e.dataTransfer.setData('todoId', todoId)
	}

	const handleDrop = (e: React.DragEvent, status: Todo['status']) => {
		e.preventDefault()
		const todoId = e.dataTransfer.getData('todoId')
		const todo = todos.find((t) => t.id === todoId)
		if (todo) {
			const updatedTodo = { ...todo, status: status }
			updateTodo(updatedTodo)
		}
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
	}

	const className = (todo: Todo) => {
		if (!todo.priority)
			return 'p-2 bg-slate-700 rounded cursor-move hover:bg-slate-900'
		if (todo.priority === 'Low')
			return 'p-2 bg-green-600/80 rounded cursor-move hover:bg-green-700'
		if (todo.priority === 'Medium')
			return 'p-2 bg-orange-600/80 rounded cursor-move hover:bg-orange-400'
		if (todo.priority === 'High')
			return 'p-2 bg-red-700/80 rounded cursor-move hover:bg-red-600'
	}

	return (
		<div className="flex flex-col">
			<div className="flex gap-8 p-5">
				<div
					className="flex flex-col min-h-96 w-[25vw] p-4 border-2 border-gray-300"
					onDrop={(e) => handleDrop(e, 'To Do')}
					onDragOver={handleDragOver}
				>
					<p className="text-xl font-bold mb-4">Open</p>
					<ul className="space-y-2">
						{todos
							.filter((t) => t.status == 'To Do')
							.map((todo) => (
								<li
									key={todo.id}
									draggable
									onDragStart={(e) => handleDragStart(e, todo.id)}
									className={className(todo)}
								>
									<Link to={`/todo/${todo.id}`}>
										<p>{todo.title}</p>
									</Link>
								</li>
							))}
					</ul>
				</div>
				<div
					className="flex flex-col min-h-96 w-[25vw] p-4 border-2 border-gray-300"
					onDrop={(e) => handleDrop(e, 'In Progress')}
					onDragOver={handleDragOver}
				>
					<p className="text-xl font-bold mb-4">Pending</p>
					<ul className="space-y-2">
						{todos
							.filter((t) => t.status == 'In Progress')
							.map((todo) => (
								<li
									key={todo.id}
									draggable
									onDragStart={(e) => handleDragStart(e, todo.id)}
									className={className(todo)}
								>
									<Link to={`/todo/${todo.id}`}>
										<p>{todo.title}</p>
									</Link>
								</li>
							))}
					</ul>
				</div>

				<div
					className="flex flex-col min-h-96 w-[25vw] p-4 border-2 border-gray-300"
					onDrop={(e) => handleDrop(e, 'Done')}
					onDragOver={handleDragOver}
				>
					<p className="text-xl font-bold mb-4">Completed</p>
					<ul className="space-y-2">
						{todos
							.filter((t) => t.status === 'Done')
							.map((todo) => (
								<li
									key={todo.id}
									draggable
									onDragStart={(e) => handleDragStart(e, todo.id)}
									className={className(todo)}
								>
									<Link to={`/todo/${todo.id}`}>
										<p>{todo.title}</p>
									</Link>
								</li>
							))}
					</ul>
				</div>
			</div>
			<Legend />
		</div>
	)
}

export default List
