import NextAuth, { CredentialsSignin } from "next-auth";
import prisma from "../db";
import type { User } from "../types/auth.types";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
	...authConfig,
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	pages: { signIn: "/login" },
	callbacks: {
		async session({ session, token }) {
			if (token.user) {
				session.user = {
					...token.user,
					emailVerified: null,
				} as User & { emailVerified: Date | null };
			}
			return session;
		},

		async jwt({ token, user }) {
			if (user) {
				token.user = user;
				console.log("user existed", user);
			}
			return token;
		},

		async authorized({ auth }) {
			return !!auth;
		},

		async redirect({ url, baseUrl }) {
			console.log("auth, redirect", { url, baseUrl });
			return url ? url : "/";
		},
	},
});
