import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const headers = new Headers(request.headers);
	headers.set("x-current-path", request.nextUrl.pathname);

	const pathname = request.nextUrl.pathname;
	if (
		pathname === "/login" ||
		pathname === "/signup" ||
		pathname === "/signin"
	) {
		if (request.cookies.has("id_token")) {
			return NextResponse.redirect(new URL("/create", request.url));
		}
	}

	if (pathname === "/profile" || pathname === "/create") {
		if (!request.cookies.has("id_token")) {
			return NextResponse.redirect(new URL("/api/auth/login", request.url));
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
