import React from 'react'
import type { Todo } from '../store/store'

interface Props {
	todo?: Todo
	setTitle: (s: string) => void
	handleState: (e: React.ChangeEvent<HTMLSelectElement>) => void
	handlePriority: (e: React.ChangeEvent<HTMLSelectElement>) => void
	setDescription: (s: string) => void
	setAssignee: (s?: string | undefined) => void
	setDueDate: (s?: string) => void
}

const EditCreate = ({
	todo,
	setTitle,
	handleState,
	handlePriority,
	setDescription,
	setAssignee,
	setDueDate,
}: Props) => {
	return (
		<div className="text-2xl space-x-2 space-y-3.5 p-5">
			<label>Title: </label>
			<br />
			<input
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				type="text"
				placeholder={todo ? todo.title : ' title...'}
				value={todo ? todo.title : ''}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<label htmlFor={'NewTodo'}>Status:</label>
			<select
				className="mt-2 border-2 border-slate-400 w-fit"
				id="NewTodo"
				name="status"
				defaultValue={'To Do'}
				value={todo ? todo.status : 'To Do'}
				onChange={(e) => handleState(e)}
			>
				<option value="To Do">To Do</option>
				<option value="In Progress">In Progress</option>
				<option value="Done">Done</option>
			</select>
			<br />
			<label htmlFor={'newTodo'}>Priority:</label>

			<select
				className="mt-2 border-2 border-slate-400 w-fit"
				id="NewTodo"
				name="status"
				value={todo ? todo.priority : 'undefided'}
				onChange={(e) => handlePriority(e)}
			>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>
			<br />
			<label htmlFor="descrption">Description:</label>
			<br />
			<textarea
				id="description"
				className="mt-2 border-2 border-slate-400 w-[40vw]"
				placeholder={' Descrption...'}
				value={todo ? todo.description : ''}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<label htmlFor="author">Assignee: </label>
			<br />
			<input
				className="mt-2 border-2 border-slate-400 w-[20vw]"
				id="author"
				type="text"
				placeholder={' assignee...'}
				value={todo ? todo.assignee : undefined}
				onChange={(e) => setAssignee(e.target.value)}
			/>
			<br />
			<label htmlFor="due">Due Date: </label>
			<input
				className="mt-2 border-2 border-slate-400 w-fit text-ecnter h-10"
				type="date"
				value={todo ? todo.dueDate : undefined}
				onChange={(e) => setDueDate(e.target.value)}
			/>
			<br />
			{todo?.createdDate && (
				<p className="mt-2">Created at: {todo!.createdDate}</p>
			)}
		</div>
	)
}

export default EditCreate
