export default interface Todo {
	id: string
	title: string
	description: string
	assignee?: string
	priority?: 'Low' | 'Medium' | 'High'
	status: 'To Do' | 'In Progress' | 'Done'
	createdDate?: string
	dueDate?: string
}
