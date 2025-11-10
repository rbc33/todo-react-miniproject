const About = () => {
	return (
		<div className="text-2xl p-5 w-[60vw] leading-relaxed">
			<h2 className="text-3xl font-bold mb-4">Kanban Board Application</h2>
			<p className="mb-4">
				A modern Kanban board built with <strong>React</strong>,{' '}
				<strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
			</p>
			<p className="mb-4">
				Features intuitive drag-and-drop functionality powered by{' '}
				<strong>Zustand</strong> state management, with full CRUD operations
				connected to a JSON Server deployed on a VPS.
			</p>
			<p>
				Enhanced with custom <strong>Google Fonts</strong> integration and
				elegant <strong>Flowbite</strong> table components for a polished user
				experience.
			</p>
		</div>
	)
}

export default About
