import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";

export const runtime = "edge";

export default function Page() {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div>
				<main className="flex-1 p-8 sm:pr-20 sm:pl-0 sm:py-20 font-[family-name:var(--font-geist-sans)]">
					<div className="max-w-4xl mx-auto space-y-12">
						{/* About Section */}
						<section>
							<h1 className="text-4xl font-bold mb-6">Hi, I'm Nagi 👋</h1>
							<p className="leading-relaxed">
								I started my career as a web engineer in February 2024. Currently, I mainly work
								with TypeScript and am involved in both frontend and backend development. In my
								daily work, I focus on writing maintainable and reusable code, and I value teamwork
								and continuous learning. Through my development work, I strive to create practical
								and user-friendly services.
							</p>
						</section>

						{/* Tech Stack Section */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<h3 className="text-lg font-medium mb-2 text-blue-600">Frontend</h3>
									<ul className="list-disc list-inside space-y-1 text-gray-700">
										<li>TypeScript / JavaScript</li>
										<li>React.js / Next.js</li>
										<li>Vue.js / Quasar</li>
										<li>Tailwind CSS</li>
									</ul>
								</div>
								<div>
									<h3 className="text-lg font-medium mb-2 text-green-600">Backend</h3>
									<ul className="list-disc list-inside space-y-1 text-gray-700">
										<li>Node.js</li>
										<li>Express.js</li>
										<li>PHP</li>
										<li>Laravel</li>
									</ul>
								</div>
							</div>
						</section>

						{/* Hobbies Section */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">🎯 Hobbies</h2>
							<div className="bg-gray-50 p-6 rounded-lg">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="text-center">
										<div className="text-3xl mb-2">🎤</div>
										<h3 className="font-medium">Karaoke</h3>
										<p className="text-sm text-gray-600">J-pop & rock</p>
									</div>
									<div className="text-center">
										<div className="text-3xl mb-2">🎬</div>
										<h3 className="font-medium">Movies</h3>
										<p className="text-sm text-gray-600">Sci-fi & drama</p>
									</div>
								</div>
							</div>
						</section>

						{/* Reading Log Section */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">📖 Reading Log</h2>
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
									<p className="text-sm text-gray-500 mt-1">
										Timeless advice for software development
									</p>
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

						{/* Movie Log Section */}
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								🎬 Movie Log{" "}
								<span className="text-sm font-medium text-gray-500">
									Building better habits for continuous improvement
								</span>
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
								<div className="flex bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
									<img
										src="https://d2ueuvlup6lbue.cloudfront.net/variants/production/store/fitpad/300/420/yqzq44ybk5ops585d5v2q6wl0aa2/_.jpg"
										alt="The Matrix"
										className="w-[80px]"
									/>
									<div>
										<h3 className="font-light text-xs mb-2">
											ミッション：インポッシブル／ファイナル・レコニング
										</h3>
										<p className="text-sm text-gray-600 mb-2">⭐⭐⭐⭐⭐</p>
										<p className="text-sm text-gray-500">Mind-bending sci-fi classic</p>
									</div>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
									<h3 className="font-medium mb-2">Inception</h3>
									<p className="text-sm text-gray-600 mb-2">⭐⭐⭐⭐⭐</p>
									<p className="text-sm text-gray-500">Complex narrative masterpiece</p>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
									<h3 className="font-medium mb-2">The Social Network</h3>
									<p className="text-sm text-gray-600 mb-2">⭐⭐⭐⭐</p>
									<p className="text-sm text-gray-500">Tech startup drama</p>
								</div>
							</div>
						</section>
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}
