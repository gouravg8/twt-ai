import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const headers = new Headers(request.headers);
	headers.set("x-current-path", request.nextUrl.pathname);

	// TODO: add the logic to redirect user to /create if loggedin and want to access the /login, /signin or /signup
	// TODO: to loggin if the user is not logged in and want to access the /profile or /create
	return NextResponse.next({ headers });
}

export const config = {
	matcher: [
		// match all routes except static files and APIs
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
