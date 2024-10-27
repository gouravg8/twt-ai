import { auth } from "@/lib/auth";
import NextAuth from "next-auth";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest) {
	const session = await auth();
	const headers = new Headers(request.headers);
	headers.set("x-current-path", request.nextUrl.pathname);

	if (session?.user) {
		if (
			// request.nextUrl.pathname.startsWith("/") ||
			request.nextUrl.pathname.startsWith("/signup") ||
			request.nextUrl.pathname.startsWith("/login")
		) {
			// return NextResponse.rewrite(new URL("/create", request.url));
			return NextResponse.rewrite(new URL("/create", request.url));
		}
	} else {
		if (
			// request.nextUrl.pathname.startsWith("/") ||
			request.nextUrl.pathname.startsWith("/create") ||
			request.nextUrl.pathname.startsWith("/profile")
		) {
			console.log("mw, loginurl", {
				requrl: request.url,
				path: request.nextUrl.pathname,
				// sp: loginUrl,
			});

			return NextResponse.rewrite(new URL("/login", request.url));
		}
	}
	return NextResponse.next({ headers });
}

export const config = {
	matcher: [
		// match all routes except static files and APIs
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
