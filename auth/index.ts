import NextAuth from "next-auth";
import { authConfig } from "@/auth/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
	...authConfig,
	adapter: PrismaAdapter(db),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				// get user from db with the email
				const userFromDB = await db.user.findUnique({
					where: { email: user.email ?? "" },
				});
				// if there is no user with the email, create new user
				if (!userFromDB) {
					const newUser = await db.user.create({
						data: {
							email: user.email ?? "",
							name: user.name ?? "",
							emailVerified: false,
						},
					});
					token.id = newUser.id;
					token.email = newUser.email;
					token.name = newUser.name;
				} else {
					// else set the user data to token
					token.id = userFromDB.id;
					token.email = userFromDB.email;
					token.name = userFromDB.name;
				}
			}

			return token;
		},
		async session({ session, token }) {
			if (token) {
				// set the token data to session
				session.user.id = token.id as string;
				session.user.email = token.email as string;
				session.user.name = token.name as string;
			}

			return session;
		},

		redirect() {
			return "/login";
		},
	},
});
