"use server";
import { signIn } from "@/auth";
import type { CredentialsSignin } from "next-auth";
import type { Login } from "@/types/auth.types";

const credentialLogin = async ({ email, password }: Login) => {
	try {
		await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		return { err: "" };
	} catch (error) {
		const err = error as CredentialsSignin;
		return { err: err.message, msg: "msg from login action catch" };
	}
};
export { credentialLogin };
