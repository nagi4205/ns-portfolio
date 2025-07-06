"use server";

import { headers } from "next/headers";

// メモリベースのレート制限（本番環境ではRedisなどを使用することを推奨）
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export type ContactFormState = {
	success: boolean;
	message: string;
	error?: string;
} | null;

export async function submitContact(
	prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	try {
		// IPアドレスの取得
		const headersList = await headers();
		const forwardedFor = headersList.get("x-forwarded-for");
		const realIp = headersList.get("x-real-ip");
		const ip = forwardedFor?.split(",")[0] || realIp || "unknown";

		// レート制限の設定（1時間に3回まで）
		const RATE_LIMIT = 3;
		const WINDOW_SIZE = 60 * 60 * 1000; // 1時間をミリ秒で
		const now = Date.now();

		// 現在のIPアドレスのリクエスト履歴を取得
		const currentData = requestCounts.get(ip);

		if (currentData) {
			// リセット時間を過ぎている場合はカウントをリセット
			if (now > currentData.resetTime) {
				requestCounts.set(ip, { count: 1, resetTime: now + WINDOW_SIZE });
			} else {
				// リミットに達している場合はエラー
				if (currentData.count >= RATE_LIMIT) {
					console.log(`Rate limit exceeded for IP: ${ip}`);
					return {
						success: false,
						message: "",
						error: "送信回数が制限に達しました。しばらく経ってから再度お試しください。",
					};
				}
				// カウントを増やす
				currentData.count++;
			}
		} else {
			// 初回リクエスト
			requestCounts.set(ip, { count: 1, resetTime: now + WINDOW_SIZE });
		}

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const message = formData.get("message") as string;

		// バリデーション
		if (!name || !email || !message) {
			return {
				success: false,
				message: "",
				error: "すべてのフィールドを入力してください。",
			};
		}

		// Here you would typically send the data to your email service or database
		console.log("Contact form submitted:", { name, email, message, ip });

		// For now, we'll just log the data
		// In a real application, you might want to:
		// - Send an email using a service like SendGrid, Resend, etc.
		// - Save to a database
		// - Return a success/error response

		console.log(`Form submitted successfully by IP: ${ip}`);

		return {
			success: true,
			message: "お問い合わせを受け付けました。ありがとうございます。",
		};
	} catch (error) {
		console.error("Contact form error:", error);
		return {
			success: false,
			message: "",
			error: error instanceof Error ? error.message : "エラーが発生しました。",
		};
	}
}
