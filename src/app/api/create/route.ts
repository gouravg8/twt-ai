import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { mood, category } = await req.json();
	try {
		const res = await axios.post(
			"https://api.cloudflare.com/client/v4/accounts/006ca7886125556540c49932d0a8d5f1/ai/run/@cf/meta/llama-3-8b-instruct",
			{
				messages: [
					{
						role: "system",
						content:
							"You are a indian based friendly assistan that helps write tweets",
					},
					{
						role: "user",
						content: `Write a short tweet as a human like language, when the mood is ${mood} and category is ${category}`,
					},
				],
			},

			{
				headers: {
					Authorization: `Bearer ${process.env.CW_API_KEY}`,
					"Content-Type": "application/json",
				},
			},
		);
		return NextResponse.json(res.data, { status: 200 });
	} catch (error: unknown) {
		console.error("Error fetching data:", error);
		return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
	}
}
