import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";
import HobbiesSection from "@/components/HobbiesSection";

export const runtime = "edge";

export default function Page() {
	console.log("aaaa");
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div>
				<main className="flex-1 p-8 pt-40 sm:pr-20 sm:pl-0 sm:pt-40 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
					<div className="max-w-4xl mx-auto space-y-12">
						{/* About Section */}
						<section>
							<h1 className="text-4xl font-bold mb-6">Hi, I'm Nagi 👋</h1>
							<p className="leading-relaxed">
								I started my career as a web engineer in February 2024.
								<br />
								Currently, I mainly work with TypeScript and am involved in both frontend and
								backend development.
								<br />
								In my daily work, I focus on writing maintainable and reusable code, and I value
								teamwork and continuous learning.
								<br />
								Through my development work, I strive to create practical and user-friendly
								services.
							</p>
						</section>
						<HobbiesSection />
						{/* Reading Log Section */}
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
							<h2 className="text-2xl font-semibold mb-4">🎬 Movie Log</h2>
							<div className="space-y-4">
								<div className="border-l-4 border-gray-400 pl-4 flex gap-4">
									<Image
										src="https://d2ueuvlup6lbue.cloudfront.net/variants/production/store/fitpad/300/420/yqzq44ybk5ops585d5v2q6wl0aa2/_.jpg"
										alt="ミッション：インポッシブル／ファイナル・レコニング"
										width={80}
										height={112}
										className="w-[80px] h-[112px] object-cover rounded"
									/>
									<div className="flex-1">
										<h3 className="font-medium">
											ミッション：インポッシブル／ファイナル・レコニング
										</h3>
										<p className="text-sm text-gray-600">⭐⭐⭐⭐⭐</p>
										<p className="text-sm text-gray-500 mt-1">Mind-bending sci-fi classic</p>
									</div>
								</div>
								<div className="border-l-4 border-gray-400 pl-4 flex gap-4">
									<Image
										src="https://d2ueuvlup6lbue.cloudfront.net/variants/production/store/fitpad/300/420/yqzq44ybk5ops585d5v2q6wl0aa2/_.jpg"
										alt="Inception"
										width={80}
										height={112}
										className="w-[80px] h-[112px] object-cover rounded"
									/>
									<div className="flex-1">
										<h3 className="font-medium">Inception</h3>
										<p className="text-sm text-gray-600">⭐⭐⭐⭐⭐</p>
										<p className="text-sm text-gray-500 mt-1">Complex narrative masterpiece</p>
									</div>
								</div>
								<div className="border-l-4 border-gray-400 pl-4 flex gap-4">
									<Image
										src="https://d2ueuvlup6lbue.cloudfront.net/variants/production/store/fitpad/300/420/yqzq44ybk5ops585d5v2q6wl0aa2/_.jpg"
										alt="The Social Network"
										width={80}
										height={112}
										className="w-[80px] h-[112px] object-cover rounded"
									/>
									<div className="flex-1">
										<h3 className="font-medium">The Social Network</h3>
										<p className="text-sm text-gray-600">⭐⭐⭐⭐</p>
										<p className="text-sm text-gray-500 mt-1">Tech startup drama</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
