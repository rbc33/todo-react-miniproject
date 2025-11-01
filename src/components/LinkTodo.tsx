import { Link } from 'react-router-dom'
import type { Todo } from '../store/store'

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
