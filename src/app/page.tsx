import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 p-8 pt-40 sm:pr-20 sm:pl-0 sm:pt-40 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
				<div className="gap-[32px] items-center sm:items-start">
					<h1 className="text-4xl font-bold">NS-PORTFOLIO</h1>
					<div className="py-8 gap-y-4">
						<p className="py-2">
							Full-stack web engineer since February 2024.
							<br />I work with TypeScript to build maintainable, user-friendly applications.
						</p>
						<Link href="/about" className="text-gray-400">
							Read More...
						</Link>
					</div>
					<div className="flex flex-col py-8 gap-y-4">
						<Link href="/notes" className="underline font-bold">
							NOTE
						</Link>
						<Link href="/contact" className="underline font-bold">
							CONTACT
						</Link>
					</div>
				</div>
			</main>
			{/* <Footer /> */}
		</div>
	);
}
