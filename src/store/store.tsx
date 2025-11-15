import { create } from 'zustand'
import { deleteTodo, getTodos, postTodo, putTodo } from '../api/apiClient'
// import { persist, createJSONStorage } from 'zustand/middleware'
export interface Todo {
	id: string
	title: string
	description: string
	assignee?: string
	priority?: 'Low' | 'Medium' | 'High'
	status: 'To Do' | 'In Progress' | 'Done'
	createdDate?: string
	dueDate?: string
}
interface TodoStore {
	todos: Todo[]
	loading?: boolean
	error?: Error | null
	fetchTodos: () => Promise<void>
	addTodo: (newTodo: Todo) => Promise<void>
	removeTodo: (id: number) => void
	updateTodo: (updateTodo: Todo) => void
}

const useTodoStore = create<TodoStore>()(
	// persist(
	(set) => ({
		todos: [],
		fetchTodos: async () => {
			set({ loading: true, error: null })
			try {
				const data = await getTodos()
				set({ todos: data, loading: false })
			} catch (err) {
				const error = err instanceof Error ? err : new Error(String(err))
				set({ error: error, loading: false })
			}
		},
		addTodo: async (newTodo: Todo) => {
			try {
				const created = await postTodo(newTodo)
				set((state) => ({ todos: [...state.todos, created] }))
			} catch (err) {
				const error = err instanceof Error ? err : new Error(String(err))
				set({ error: error, loading: false })
			}
		},

		removeTodo: async (id: number) => {
			try {
				const deleted = await deleteTodo(id)
				set((state) => ({
					todos: state.todos.filter(
						(todo) => todo.id !== deleted.id
					),
				}))
			} catch (err) {
				const error = err instanceof Error ? err : new Error(String(err))
				set({ error: error, loading: false })
			}
		},

		updateTodo: async (updateTodo: Todo) => {
			const originalTodos = useTodoStore.getState().todos
			const originalTodo = originalTodos.find((t) => t.id === updateTodo.id)
			try {
				set((state) => ({
					todos: state.todos.map((todo) =>
						todo.id === updateTodo.id ? updateTodo : todo
					),
				}))
				await putTodo(updateTodo)
			} catch (err) {
				if (originalTodo) {
					set((state) => ({
						todos: state.todos.map((todo) =>
							todo.id === updateTodo.id ? originalTodo : todo
						),
					}))
				}

				const error = err instanceof Error ? err : new Error(String(err))
				set({ error: error, loading: false })
			}
		},
	})
	// {
	// 	name: 'todo-storage',
	// 	storage: createJSONStorage(() => localStorage),
	// // }
	// )
)

export default useTodoStore
