import { type Todo } from '../store/store'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useTodoStore from '../store/store'

interface Props {
	todos: Todo[]
}

const List = ({ todos }: Props) => {
	const { removeTodo } = useTodoStore()
	return (
		<>
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
					{t.task}{' '}
					{t.completed ? (
						<FaCheck className="text-green-500 size-5" />
					) : (
						<ImCross className="text-red-500 size-5" />
					)}
				</p>
			))}
		</>
	)
}

export default List
