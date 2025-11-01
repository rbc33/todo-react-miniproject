import type { Todo } from '../store/store'

export const tailCont =
	'flex flex-col min-h-96 w-[25vw] p-4 border-2 border-gray-400'

export const className = (todo: Todo) => {
	if (!todo.priority)
		return 'p-2 bg-slate-700 rounded cursor-move hover:bg-slate-900'
	if (todo.priority === 'Low')
		return 'p-2 bg-green-600/80 rounded cursor-move hover:bg-green-700'
	if (todo.priority === 'Medium')
		return 'p-2 bg-orange-600/80 rounded cursor-move hover:bg-orange-400'
	if (todo.priority === 'High')
		return 'p-2 bg-red-700/80 rounded cursor-move hover:bg-red-600'
}
