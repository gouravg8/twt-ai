"use server";
import { signIn } from "@/auth";
import type { CredentialsSignin } from "next-auth";
import type { Login } from "@/types/auth.types";

// console.log("hi from loginaction");
const credentialLogin = async ({ email, password }: Login) => {
	// console.log(email, password);
	// console.log("login action before signin", email, password);
	try {
		const fromSignIn = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		// if (err) {
		// 	console.log("error in local action signin", err);
		// }

		// console.log("sinin googgle", fromSignIn);
		// console.log("login action after signin", email, password);
		// return { googleSignin };
		return { err: "" };
	} catch (error) {
		// console.log("login action in catch", email, password);
		const err = error as CredentialsSignin;
		return { err: err.message, msg: "msg from login action catch" };
	}
};
export { credentialLogin };
