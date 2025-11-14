import type Todo from '../types/todo'

const BASE_URL = 'http://158.179.219.166:5500/todos'

export const getTodos = async () => {
	try {
		const res = await fetch(BASE_URL)
		const data = await res.json()
		return data
	} catch (err) {
		return err
	}
}

export const postTodo = async (newTodo: Todo) => {
	try {
		const res = await fetch(BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTodo),
		})
		const data = await res.json()
		return data
	} catch (err) {
		return err
	}
}

export const deleteTodo = async (id: number) => {
	try {
		const res = await fetch(BASE_URL + `/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const deleted = await res.json()
		return deleted
	} catch (err) {
		return err
	}
}

export const putTodo = async (updateTodo: Todo) => {
	try {
		await fetch(BASE_URL + `/${updateTodo.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updateTodo),
		})
	} catch (err) {
		return err
	}
}
