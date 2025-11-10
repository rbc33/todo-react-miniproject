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
		return (
			<div role="status" className="w-[80vw] animate-pulse">
				<div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-700 w-[80vw] mb-4"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80vw] mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80vw] mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80vw] mb-2.5"></div>
				<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80vw]"></div>
				<span className="sr-only">Loading...</span>
			</div>
		)
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
										className={className(t) + ' border-2 border-slate-900'}
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
