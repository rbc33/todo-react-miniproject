const Legend = () => {
	return (
		<div className="flex justify-center items-center">
			<p className="text-2xl font-bold mx-5 mb-2">Priority Legend:</p>
			<div className="bg-green-600/80 size-6 border border-gray-300 mr-2"></div>
			<p className="text-lg mr-4">Low</p>
			<div className="bg-orange-600/80 size-6 border border-gray-300 mr-2"></div>
			<p className="text-lg mr-4">Medium</p>
			<div className="bg-red-700/80 size-6 border border-gray-300 mr-2"></div>
			<p className="text-lg mr-4">High</p>
			<div className="bg-slate-700 size-6 border border-gray-300 mr-2"></div>
			<p className="text-lg mr-4">Undefined</p>
		</div>
	)
}

export default Legend
