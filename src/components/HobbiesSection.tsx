"use client";

import { useState } from "react";

type HobbyType = "karaoke" | "movies";

const hobbiesData = {
	karaoke: {
		title: "Karaoke",
		description:
			"I go to KARAOKE at least once a week. I'm totally comfortable with going to karaoke alone (HITOKARA)!",
	},
	movies: {
		title: "Movies",
		description:
			"There's a movie theater near my house, and I go at least once a month. I love watching movies in IMAX format, and I feel like I'm getting a great deal when I catch a late show in IMAX at a premium price!",
	},
};

export default function HobbiesSection() {
	const [activeHobby, setActiveHobby] = useState<HobbyType>("karaoke");

	return (
		<section>
			<h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
			<div className="flex gap-x-4">
				<button
					type="button"
					onClick={() => setActiveHobby("karaoke")}
					className={`text-xl transition-all duration-200 ${
						activeHobby === "karaoke"
							? "opacity-100 transform scale-110"
							: "opacity-50 hover:opacity-75"
					}`}
				>
					🎤
				</button>
				<button
					type="button"
					onClick={() => setActiveHobby("movies")}
					className={`text-xl transition-all duration-200 ${
						activeHobby === "movies"
							? "opacity-100 transform scale-110"
							: "opacity-50 hover:opacity-75"
					}`}
				>
					🎬
				</button>
			</div>
			<div className="transition-all duration-300">
				{/* <h3 className="my-2 font-medium">{hobbiesData[activeHobby].title}</h3> */}
				<p className="leading-relaxed mt-4">{hobbiesData[activeHobby].description}</p>
			</div>
		</section>
	);
}
