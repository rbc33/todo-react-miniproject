import { RiDeleteBin6Line } from 'react-icons/ri'
import useTodoStore, { type Todo } from '../store/store'
import TodoIcon from './TodoIcon'

export interface Props {
	todos: Todo[]
}

const List = ({ todos }: Props) => {
	const { removeTodo } = useTodoStore()
	return (
		<>
			{todos && (
				<div className="font-roboto">
					<div className="relative overflow-x-auto">
						<table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										Task
									</th>
									<th scope="col" className="px-6 py-3">
										Status
									</th>
									<th scope="col" className="px-6 py-3">
										Delete
									</th>
								</tr>
							</thead>
							<tbody>
								{todos.map((t) => (
									<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											<a className="text-dec" href={`/todo/${t.id}`}>
												{t.task}
											</a>
										</th>
										<td className="px-6 py-4">
											<TodoIcon todo={t} />
										</td>

										<td className="px-6 py-4">
											<RiDeleteBin6Line
												className="justify-self-end

"
												onClick={() => removeTodo(t.id)}
											/>
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
