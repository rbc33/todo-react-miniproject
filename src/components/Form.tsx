import React from 'react'
import type { Todo } from '../store/store'

interface Props {
	title?: string
	description?: string
	assignee?: string
	dueDate?: string
	status: Todo['status']
	priority?: Todo['priority']
	createdAt?: string
	setTitle: (s: string) => void
	handleState: (e: React.ChangeEvent<HTMLSelectElement>) => void
	handlePriority: (e: React.ChangeEvent<HTMLSelectElement>) => void
	setDescription: (s: string) => void
	setAssignee: (s?: string | undefined) => void
	setDueDate: (s?: string) => void
}

const EditCreate = ({
	title,
	description,
	assignee,
	dueDate,
	status,
	priority,
	createdAt,
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
				placeholder={title ? title : ' title...'}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<label htmlFor={'NewTodo'}>Status:</label>
			<select
				className="mt-2 border-2 border-slate-400 w-fit"
				id="NewTodo"
				name="status"
				defaultValue={'To Do'}
				value={status}
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
				value={priority}
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
				placeholder={' Description...'}
				value={description}
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
				value={assignee}
				onChange={(e) => setAssignee(e.target.value)}
			/>
			<br />
			<label htmlFor="due">Due Date: </label>
			<input
				className="mt-2 border-2 border-slate-400 w-fit text-ecnter h-10"
				type="date"
				value={dueDate}
				onChange={(e) => setDueDate(e.target.value)}
			/>
			<br />
			{createdAt && <p className="mt-2">Created at: {createdAt}</p>}
		</div>
	)
}

export default EditCreate
