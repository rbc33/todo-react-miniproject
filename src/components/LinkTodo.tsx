import React from 'react'
import type { Todo } from '../store/store'
import { Link } from 'react-router-dom'

interface Props {
	todo: Todo
}

const LinkTodo = ({ todo }: Props) => {
	return (
		<Link to={`/todo/${todo.id}`}>
			<p>{todo.title}</p>
		</Link>
	)
}

export default LinkTodo
