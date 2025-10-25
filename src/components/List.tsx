import { type Todo } from '../store/store'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useTodoStore from '../store/store'

interface Props {
	todos: Todo[]
}

const List = ({ todos }: Props) => {
	const { removeTodo, toggleTodo } = useTodoStore()
	return (
		<div className="">
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
									<div onClick={() => toggleTodo(t.id)}>
										{t.completed ? (
											<FaCheck className="text-green-500 size-5" />
										) : (
											<ImCross className="text-red-500 size-5" />
										)}
									</div>
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
	)
}

export default List
