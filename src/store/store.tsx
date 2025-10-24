import { create } from 'zustand'

export interface Todo {
	id: number
	task: string
	completed: boolean
}
interface TodoStore {
	todos: Todo[]
	addTodo: (newTodo: Todo) => void
	removeTodo: (id: number) => void
	toggleTodo: (id: number) => void
	updateTodo: (updatedTodo: Todo) => void
}

const useTodoStore = create<TodoStore>((set) => ({
	todos: [
		{ id: 1, task: 'Read the project brief', completed: true },
		{ id: 2, task: 'Create a project repository', completed: false },
		{ id: 3, task: 'Create React application using Vite', completed: false },
		{ id: 4, task: 'Finish Day 1 Development Tasks', completed: false },
		{ id: 5, task: 'Finish Day 1 Research Tasks', completed: false },
		{ id: 6, task: 'Finish Day 2 Development Tasks', completed: false },
		{ id: 7, task: 'Finish Day 2 Research Tasks', completed: false },
	],

	addTodo: (newTodo: Todo) =>
		set((state) => ({ todos: [...state.todos, newTodo] })),
	removeTodo: (id: number) =>
		set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
	toggleTodo: (id: number) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		})),
	updateTodo: (updatedTodo: Todo) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === updatedTodo.id ? updatedTodo : todo
			),
		})),
}))

export default useTodoStore
