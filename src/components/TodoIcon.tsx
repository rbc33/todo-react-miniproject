import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import useTodoStore, { type Todo } from '../store/store'

interface ToggleIconProps {
	todo: Todo
}

const TodoIcon = ({ todo }: ToggleIconProps) => {
	const { toggleTodo } = useTodoStore()
	return (
		<div onClick={() => toggleTodo(todo.id)}>
			{todo.completed ? (
				<FaCheck className="text-green-500 size-5" />
			) : (
				<ImCross className="text-red-500 size-5" />
			)}
		</div>
	)
}

export default TodoIcon
