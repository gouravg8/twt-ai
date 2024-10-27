import { type NextAuthConfig, CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import prisma from "../db";
import { compare } from "bcryptjs/";

export const authConfig: NextAuthConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
			profile(profile) {
				let userRole = "Google User";
				if (profile.email.toLowerCase() === "gouravsinghh3210@gmail.com") {
					userRole = "admin";
				}
				return {
					...profile,
					name: profile.name,
					id: profile.sub,
					image: profile.picture,
					role: userRole,
					email: profile.email,
				};
			},
		}),
		CredentialProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "example@gmail.com",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			authorize: async (
				credentials,
			): Promise<{ id: string; name: string; email: string } | null> => {
				try {
					const { email, password } = credentials as {
						email: string | undefined;
						password: string | undefined;
					};

					if (!email || !password) {
						throw new CredentialsSignin("Please provide all credentials");
					}

					const user = await prisma.user.findUnique({
						where: {
							email: email,
						},
						select: {
							id: true,
							name: true,
							email: true,
							password: true,
						},
					});

					if (!user) {
						throw new CredentialsSignin("User not found, Please sign up");
					}

					const isPasswordMatched = await compare(password, user.password);
					if (!user?.email || !isPasswordMatched) {
						throw new CredentialsSignin("Invalid credentials");
					}

					return {
						id: user.id.toString(),
						name: user.name?.toString() ?? "no name",
						email: user.email,
					};
				} catch (error) {
					console.log("auth.config, authorize, catch", String(error));

					throw new CredentialsSignin(String(error));
				}
			},
		}),
	],
};
