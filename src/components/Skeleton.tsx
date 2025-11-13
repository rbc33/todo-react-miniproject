import React from 'react'
import Legend from './Legend'

const Skeleton = () => {
	return (
		<div className="flex flex-col">
			<div className="flex gap-8 ml-3 mt-3 p-5">
				<div className="border-2 border-gray-400 p-5">
					<div role="status" className="w-[22vw] animate-pulse">
						<div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-700  mb-4"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
				<div className="border-2 border-gray-400 p-5">
					<div role="status" className="w-[22vw] animate-pulse">
						<div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-700  mb-4"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
				<div className="border-2 border-gray-400 p-5">
					<div role="status" className="w-[22vw] animate-pulse">
						<div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-700  mb-4"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			</div>
			<Legend />
		</div>
	)
}

export default Skeleton
