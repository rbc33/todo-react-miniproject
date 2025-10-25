import React from 'react'
import useTodoStore from '../store/store'
import { type Todo } from '../store/store'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

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
