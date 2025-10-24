import React, { useState } from 'react'
import useTodoStore from '../store/store'

const AddTodo = () => {
	const { todos, addTodo } = useTodoStore()
	const [task, setTask] = useState<string>()
	const [completed, setCompleted] = useState<boolean>(false)
	const newId = Math.max(...todos.map((t) => t.id))

	const handleClick = () => {
		if (task) addTodo({ id: newId, task: task, completed: completed })
	}
	return (
		<div className="text-3xl space-x-2">
			<label>Task: </label>
			<input
				type="text"
				placeholder={'task'}
				onChange={(e) => setTask(e.target.value)}
			/>
			<label htmlFor={'newTodo'}>Completed:</label>
			<input
				className="size-6 ml-2"
				type="checkbox"
				checked={false}
				onClick={() => setCompleted(!completed)}
				id={'newTodo'}
			/>
			<button onClick={() => handleClick} />
		</div>
	)
}

export default AddTodo
