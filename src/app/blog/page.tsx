import Footer from "@/components/layout/Footer";

export const runtime = "edge";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<div className="gap-[32px] items-center sm:items-start">
					<h1 className="text-4xl font-bold">BLOG 👋</h1>
					<p className="py-8">I plan to display articles written on Zenn.</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
