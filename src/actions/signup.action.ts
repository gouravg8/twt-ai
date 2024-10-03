"use server";
import prisma from "@/db";
import type { Signup } from "@/types/auth.types";
import { hash } from "bcryptjs";
import type { CredentialsSignin } from "next-auth";

const credentialSignup = async ({ name, email, password }: Signup) => {
	try {
		if (!name || !email || !password) {
			throw new Error("Please provide credentials");
		}

		//  connect to db and create user
		const user = await prisma.user.findFirst({
			where: { email: email },
		});

		if (user) {
			throw new Error("User already exists");
		}

		const hashedPassword = await hash(password, 10);
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		return { err: "" };
	} catch (error) {
		const err = error as CredentialsSignin;
		return { err: err.message };
	}
};

export { credentialSignup };
