import LinkTodo from '../components/LinkTodo'
import type { Todo } from '../store/store'
import { className } from '../utils/todoUtils'

interface Props {
	todos: Todo[]
}

const List = ({ todos }: Props) => {
	return (
		<div className="flex flex-col max-w-[40vw] p-5">
			<ul className="space-y-2">
				{todos.map((todo) => (
					<li key={todo.id} className={className(todo)}>
						<p className="inline">
							<LinkTodo todo={todo} /> Status: {todo.status},{' '}
							{todo.assignee && 'Assignee: ' + todo.assignee}{' '}
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default List
