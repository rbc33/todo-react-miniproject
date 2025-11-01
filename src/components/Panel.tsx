import React from 'react'
import { className, tailCont } from '../utils/todoUtils'
import LinkTodo from './LinkTodo'
import type { Todo } from '../store/store'

interface PanelProps {
	todos: Todo[]
	status: Todo['status']
	handleDrop: (e: React.DragEvent, status: Todo['status']) => void
	handleDragOver: (e: React.DragEvent) => void
	handleDragStart: (e: React.DragEvent, todoId: string) => void
}

const Panel = ({
	todos,
	status,
	handleDrop,
	handleDragOver,
	handleDragStart,
}: PanelProps) => {
	const name = (status: Todo['status']) => {
		if (status === 'To Do') return 'Pending'
		if (status === 'In Progress') return 'In Progress'
		if (status === 'Done') return 'Completed'
	}
	return (
		<div
			className={tailCont}
			onDrop={(e) => handleDrop(e, status)}
			onDragOver={handleDragOver}
		>
			<p className="text-xl font-bold mb-4">{name(status)}</p>
			<ul className="space-y-2">
				{todos
					.filter((t) => t.status === status)
					.map((todo) => (
						<li
							key={todo.id}
							draggable
							onDragStart={(e) => handleDragStart(e, todo.id)}
							className={className(todo)}
						>
							<LinkTodo todo={todo} />
						</li>
					))}
			</ul>
		</div>
	)
}

export default Panel
