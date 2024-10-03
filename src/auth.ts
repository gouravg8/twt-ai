import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import prisma from "./db";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
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
			): Promise<null | { id: string; name: string | null; email: string }> => {
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
					throw new CredentialsSignin("Invalid credentials");
				}

				if (!user.password) {
					throw new CredentialsSignin("Invalid password");
				}

				const isPasswordMatched = await compare(password, user.password);
				if (!isPasswordMatched) {
					throw new CredentialsSignin("Password does not match");
				}

				return { id: user.id.toString(), name: user.name, email: user.email };
			},
		}),
	],
	pages: { signIn: "/login" },
	callbacks: {
		async redirect({ url, baseUrl }) {
			if (url.startsWith("/")) return baseUrl + url;
			if (url.startsWith(baseUrl)) return baseUrl;
			return baseUrl;
		},
	},
});
