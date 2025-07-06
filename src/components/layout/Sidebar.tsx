import Link from "next/link";

export default function Sidebar() {
	return (
		<div className="hidden sm:block">
			<div className="flex justify-center sticky top-12 h-fit min-w-20">
				<Link
					type="button"
					href="/"
					className="w-8 h-8 border-1 border-gray-300 text-black rounded-full flex items-center justify-center transition-transform duration-200 shadow-lg hover:scale-110 cursor-pointer"
					aria-label="戻る"
				>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>戻る</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}
