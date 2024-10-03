import { auth } from "@/auth";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const sesssion = await auth();
	if (sesssion) {
		if (
			request.nextUrl.pathname.startsWith("/signup") ||
			request.nextUrl.pathname.startsWith("/login")
		) {
			return NextResponse.rewrite(new URL("/", request.url));
		}
	}
	return NextResponse.next();
}
export const config = {
	matcher: ["/signup", "/login"],
};
