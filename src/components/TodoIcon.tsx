import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import useTodoStore, { type Todo } from '../store/store'
import { FaBarsProgress } from 'react-icons/fa6'
import { IoMdCheckboxOutline } from 'react-icons/io'

interface ToggleIconProps {
	todo: Todo
}

const TodoIcon = ({ todo }: ToggleIconProps) => {
	if (todo.status === 'To Do')
		return <FaCheck className="text-green-500 size-5" />
	if (todo.status === 'In Progress')
		return <FaBarsProgress className="text-slate-500 size-5" />
	if (todo.status === 'Done')
		return <IoMdCheckboxOutline className="text-red-500 size-5" />
}

export default TodoIcon
