import { useEffect } from 'react'
import LinkTodo from '../components/LinkTodo'
import useTodoStore from '../store/store'
import { className } from '../utils/todoUtils'

const List = () => {
	const { todos, loading, error, fetchTodos } = useTodoStore()

	useEffect(() => {
		fetchTodos()
	}, [])

	if (loading) {
		return <div className="p-5">Loading todos...</div>
	}

	if (error) {
		return <div className="p-5 text-red-500">Error: {error.message}</div>
	}
	return (
		<>
			{todos && (
				<div className="font-roboto">
					<div className="relative overflow-x-auto">
						<table className="w-[80vw] text-xl text-left rtl:text-right text-gray-500 dark:text-white">
							<thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
								<tr>
									<th scope="col" className="px-6 py-3">
										Task
									</th>
									<th scope="col" className="px-6 py-3">
										Status
									</th>
									<th scope="col" className="px-6 py-3">
										Assignee
									</th>
								</tr>
							</thead>
							<tbody>
								{todos.map((t) => (
									<tr
										className={className(t) + ' border-2 border-slate-700'}
										key={t.id}
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											<LinkTodo todo={t} />
										</th>
										<td className="px-6 py-4">{t.status}</td>

										<td className="px-6 py-4">
											{t.assignee ? t.assignee : 'Unassigned'}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	)
}

export default List
