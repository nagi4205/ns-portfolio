import Image from "next/image";

export default function MovieLogSection() {
	return (
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
						<h3 className="font-medium">ミッション：インポッシブル／ファイナル・レコニング</h3>
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
	);
}
