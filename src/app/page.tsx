import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1 className="text-4xl font-bold">under construction...</h1>
			</main>
			<Link href="/test">
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md">Go to test page</button>
			</Link>
		</div>
	);
}
