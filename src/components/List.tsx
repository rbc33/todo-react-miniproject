import { type Todo } from '../store/store'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useTodoStore from '../store/store'

interface Props {
	todos: Todo[]
}

const List = ({ todos }: Props) => {
	const { removeTodo, toggleTodo } = useTodoStore()
	return (
		<div className="p-5">
			{todos.map((t) => (
				<p
					className="text-3xl flex gap-5 items-center w-200"
					key={`todo-${t.id}`}
				>
					<RiDeleteBin6Line
						className="justify-self-end

"
						onClick={() => removeTodo(t.id)}
					/>
					<a className="text-dec" href={`/todo/${t.id}`}>
						{t.task}
					</a>

					<div onClick={() => toggleTodo(t.id)}>
						{t.completed ? (
							<FaCheck className="text-green-500 size-5" />
						) : (
							<ImCross className="text-red-500 size-5" />
						)}
					</div>
				</p>
			))}
		</div>
	)
}

export default List
