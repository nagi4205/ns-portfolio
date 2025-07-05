import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<div className="gap-[32px] items-center sm:items-start">
					<h1 className="text-4xl font-bold">Hie, I'm Nagi 👋</h1>
					<div className="flex flex-col py-8 gap-y-4">
						<Link href="/blog" className="underline font-bold">
							BLOG
						</Link>
						<p>ABOUT</p>
					</div>
					<p>
						I started my career as a web engineer in February 2024. Currently, I mainly work with
						TypeScript and am involved in both frontend and backend development. In my daily work, I
						focus on writing maintainable and reusable code, and I value teamwork and continuous
						learning. Through my development work, I strive to create practical and user-friendly
						services.
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
