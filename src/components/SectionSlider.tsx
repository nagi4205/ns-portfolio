"use client";

import { useState, useRef, useEffect } from "react";
import HobbiesSection from "./HobbiesSection";
import ReadingLogSection from "./ReadingLogSection";
import MovieLogSection from "./MovieLogSection";

const sections = [
	{ id: "hobbies", component: HobbiesSection, title: "Hobbies" },
	{ id: "reading", component: ReadingLogSection, title: "Reading" },
	{ id: "movies", component: MovieLogSection, title: "Movies" },
];

export default function SectionSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [startX, setStartX] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [offset, setOffset] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);

	const goToSection = (index: number) => {
		if (index >= 0 && index < sections.length) {
			setCurrentIndex(index);
			setOffset(0);
		}
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setStartX(e.touches[0].clientX);
		setIsDragging(true);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging) return;
		const currentX = e.touches[0].clientX;
		const diff = startX - currentX;
		setOffset(diff);
	};

	const handleTouchEnd = () => {
		if (!isDragging) return;
		setIsDragging(false);

		const threshold = 100; // スワイプの閾値
		if (Math.abs(offset) > threshold) {
			if (offset > 0 && currentIndex < sections.length - 1) {
				// 右にスワイプ - 次のセクション
				setCurrentIndex(currentIndex + 1);
			} else if (offset < 0 && currentIndex > 0) {
				// 左にスワイプ - 前のセクション
				setCurrentIndex(currentIndex - 1);
			}
		}
		setOffset(0);
	};

	// マウスイベント対応
	const handleMouseDown = (e: React.MouseEvent) => {
		setStartX(e.clientX);
		setIsDragging(true);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return;
		const currentX = e.clientX;
		const diff = startX - currentX;
		setOffset(diff);
	};

	const handleMouseUp = () => {
		if (!isDragging) return;
		setIsDragging(false);

		const threshold = 100;
		if (Math.abs(offset) > threshold) {
			if (offset > 0 && currentIndex < sections.length - 1) {
				setCurrentIndex(currentIndex + 1);
			} else if (offset < 0 && currentIndex > 0) {
				setCurrentIndex(currentIndex - 1);
			}
		}
		setOffset(0);
	};

	useEffect(() => {
		if (isDragging) {
			const handleMouseMoveGlobal = (e: MouseEvent) => {
				const currentX = e.clientX;
				const diff = startX - currentX;
				setOffset(diff);
			};

			const handleMouseUpGlobal = () => {
				setIsDragging(false);
				const threshold = 100;
				if (Math.abs(offset) > threshold) {
					if (offset > 0 && currentIndex < sections.length - 1) {
						setCurrentIndex(currentIndex + 1);
					} else if (offset < 0 && currentIndex > 0) {
						setCurrentIndex(currentIndex - 1);
					}
				}
				setOffset(0);
			};

			document.addEventListener("mousemove", handleMouseMoveGlobal);
			document.addEventListener("mouseup", handleMouseUpGlobal);

			return () => {
				document.removeEventListener("mousemove", handleMouseMoveGlobal);
				document.removeEventListener("mouseup", handleMouseUpGlobal);
			};
		}
	}, [isDragging, startX, offset, currentIndex]);

	return (
		<div className="relative">
			{/* Navigation Dots */}
			<div className="flex justify-center space-x-2 mb-6">
				{sections.map((section, index) => (
					<button
						key={section.id}
						type="button"
						onClick={() => goToSection(index)}
						className={`w-3 h-3 rounded-full transition-all duration-200 ${
							index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
						}`}
						aria-label={`Go to section ${index + 1}`}
					/>
				))}
			</div>

			{/* Slider Container */}
			<div
				ref={sliderRef}
				className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onMouseDown={handleMouseDown}
				onMouseMove={isDragging ? handleMouseMove : undefined}
				onMouseUp={handleMouseUp}
			>
				<div
					className={`flex transition-transform duration-300 ease-out ${
						isDragging ? "" : "transition-transform"
					}`}
					style={{
						transform: `translateX(calc(-${currentIndex * 100}% - ${offset}px))`,
					}}
				>
					{sections.map((section, index) => {
						const Component = section.component;
						return (
							<div key={section.id} className="w-full flex-shrink-0 px-2">
								<Component />
							</div>
						);
					})}
				</div>
			</div>

			{/* Section Title Indicator */}
			<div className="text-center mt-4">
				<span className="text-sm text-gray-500">
					{currentIndex + 1} / {sections.length} - {sections[currentIndex].title}
				</span>
			</div>
		</div>
	);
}
