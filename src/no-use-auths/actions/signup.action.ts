"use server";
import prisma from "@/db";
import type { Signup } from "@/types/auth.types";
import { hash } from "bcryptjs";
import { AuthError, CredentialsSignin } from "next-auth";

const credentialSignup = async ({ name, email, password }: Signup) => {
	try {
		if (!name || !email || !password) {
			throw new CredentialsSignin("Please provide credentials");
		}

		//  connect to db and create user
		const user = await prisma.user.findFirst({
			where: { email: email },
		});

		if (user) {
			throw new CredentialsSignin("User already exists");
		}

		const hashedPassword = await hash(password, 10);
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});
	} catch (error) {
		if (error instanceof AuthError) {
			console.log("signup, action, catch", {
				errMsg: error.message,
				errName: error.name,
				errCause: error.cause,
			});

			switch (error.name) {
				case "CredentialsSignin":
					return { err: error.message };
				default:
					return { err: "Something went wrong" };
			}
		}
	}
};

export { credentialSignup };
