"use server";
import { signIn } from "@/lib/auth";
import { AuthError, CredentialsSignin } from "next-auth";
import type { Login } from "@/types/auth.types";

const credentialLogin = async ({ email, password }: Login): Promise<T> => {
	try {
		const signInData = {
			email,
			password,
			redirect: false,
		};

		const signinRes = await signIn("credentials", signInData);

		// console.log("login.action, signinRes", signinRes);

		if (signinRes.error) {
			throw new CredentialsSignin(signinRes.error);
		}

		return { msg: "login.action, signinRes", signinRes };
	} catch (error) {
		if (error instanceof CredentialsSignin) {
			switch (error.name) {
				case "CredentialsSignin":
					console.log("login.action, catch", String(error));
					return { error: String(error) };
				default:
					return { error: "Something went wrong" };
			}
		}
		return { error: "An unexpected error occurred" };
	}
};

const googleLogin = async () => {
	try {
		await signIn("google", {
			redirect: false,
		});
		return "google signin, login.action";
	} catch (error) {
		return error;
	}
};
export { credentialLogin, googleLogin };
