"use server";
import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

// credential login
export async function authenticate(
	prevState: string | undefined,
	formData: FormData,
) {
	try {
		await signIn("credential", formData);
	} catch (error) {
		if (error instanceof AuthError) {
			return "login errror";
		}
		throw error;
	}
}

// google login
export async function googleAuthenticate(prevState: string | undefined) {
	try {
		await signIn("google");
	} catch (error) {
		if (error instanceof AuthError) {
			return "google log in failed";
		}
		throw error;
	}
}

export async function signOutAction() {
	await signOut();
}
