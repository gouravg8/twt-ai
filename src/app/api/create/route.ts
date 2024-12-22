import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { model, input } = await req.json();
	// Process a POST request
	try {
		const res = await axios.post(
			`https://api.cloudflare.com/client/v4/accounts/006ca7886125556540c49932d0a8d5f1/ai/run/${model}`,
			input,
			{
				headers: {
					Authorization: `Bearer ${process.env.CW_API_KEY}`,
					"Content-Type": "application/json",
				},
			},
		);
		return NextResponse.json(res.data, { status: 200 });
	} catch (error: unknown) {
		console.log(error);

		if (error instanceof Error) {
			return NextResponse.json(
				{ ans: "evi text", error: error.message },
				{
					status: 500,
				},
			);
		}

		return NextResponse.json(
			{ ans: "evi text", error: "An unknown error occurred" },
			{
				status: 500,
			},
		);
	}
}
