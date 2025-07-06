"use client";

import Sidebar from "@/components/layout/Sidebar";
import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactFormState } from "./actions";

export default function Page() {
	const [state, formAction, isPending] = useActionState(submitContact, null);
	const formRef = useRef<HTMLFormElement>(null);

	// 送信成功時にフォームをリセット
	useEffect(() => {
		if (state?.success) {
			formRef.current?.reset();
		}
	}, [state?.success]);

	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div className="flex-1">
				<main className="flex-1 p-8 pt-40 sm:pr-20 sm:pl-0 sm:pt-40 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
					<div className="max-w-2xl mx-auto space-y-12">
						{/* Header Section */}
						<section>
							<h1 className="text-4xl font-bold mb-6">Contact</h1>
						</section>

						{/* Contact Form Section */}
						<section>
							{/* Status Message */}
							{state && (
								<div
									className={`mb-6 p-4 rounded-md ${
										state.success
											? "bg-green-50 text-green-700 border border-green-200"
											: "bg-red-50 text-red-700 border border-red-200"
									}`}
								>
									{state.success ? state.message : state.error}
								</div>
							)}

							<form ref={formRef} action={formAction} className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
										Name *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										disabled={isPending}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
										placeholder="Your Name"
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
										Email *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										disabled={isPending}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
										placeholder="example@email.com"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										required
										disabled={isPending}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical min-h-[162px] disabled:bg-gray-100"
										placeholder="Your Message is here..."
									/>
								</div>

								<div>
									<button
										type="submit"
										disabled={isPending}
										className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
									>
										{isPending ? "送信中..." : "送信する"}
									</button>
								</div>
							</form>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
