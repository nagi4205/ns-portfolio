export default function ReadingLogSection() {
	return (
		<section>
			<h2 className="text-2xl font-semibold mb-4">Reading Log</h2>
			<div className="space-y-4">
				<div className="border-l-4 border-blue-500 pl-4">
					<h3 className="font-medium">Clean Code</h3>
					<p className="text-sm text-gray-600">Robert C. Martin</p>
					<p className="text-sm text-gray-500 mt-1">
						Essential principles for writing maintainable code
					</p>
				</div>
				<div className="border-l-4 border-green-500 pl-4">
					<h3 className="font-medium">The Pragmatic Programmer</h3>
					<p className="text-sm text-gray-600">David Thomas & Andrew Hunt</p>
					<p className="text-sm text-gray-500 mt-1">Timeless advice for software development</p>
				</div>
				<div className="border-l-4 border-purple-500 pl-4">
					<h3 className="font-medium">Atomic Habits</h3>
					<p className="text-sm text-gray-600">James Clear</p>
					<p className="text-sm text-gray-500 mt-1">
						Building better habits for continuous improvement
					</p>
				</div>
			</div>
		</section>
	);
}
