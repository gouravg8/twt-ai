"use client";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePathname } from "next/navigation";
import { signinGoogle } from "@/actions/auth.action";

type AuthTypes = {
	authText: string;
	alterAuth: string;
	alterAuthLink: string;
};

const googleLogoStyle = {
	width: "auto",
	height: "auto",
};

const Auth = ({ authText, alterAuth, alterAuthLink }: AuthTypes) => {
	const pathname = usePathname();

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			password: formData.get("password") as string,
		};

		if (pathname === "/login") {
			console.log("login");
		} else {
			console.log("signup");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
			className="w-full md:w-1/4 flex flex-col h-[70vh] md:h-[85vh] justify-center align-middle mx-auto text-center"
		>
			<Card className="w-[350px] pb-8">
				<CardHeader className="font-semibold">{authText}</CardHeader>
				<CardContent>
					<form
						onSubmit={handleFormSubmit}
						className="grid w-full items-start text-left gap-6"
					>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name{pathname}</Label>
							<Input
								className="border border-gray-200"
								id="name"
								placeholder="John Doe"
								type="text"
								name="name"
							/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="email">Email</Label>
							<Input
								className="border border-gray-200"
								id="email"
								placeholder="email@example.com"
								type="email"
								name="email"
							/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Password</Label>
							<Input
								className="border border-gray-200"
								id="password"
								placeholder="********"
								type="password"
								name="password"
							/>
						</div>
						<Button type="submit" className="w-full">
							{authText}
						</Button>
					</form>
				</CardContent>
				<h1>or</h1>
				<button
					type="submit"
					className="text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto border border-gray-300 p-3 rounded-lg my-4"
					onClick={async () => {
						signinGoogle();
					}}
				>
					<Image
						src={"/google-logo.png"}
						width={20}
						height={0}
						style={googleLogoStyle}
						alt="google logo"
					/>
					<span>{authText} with Google</span>
				</button>
				<p className="text-sm">
					{alterAuthLink === "login"
						? "Already have account?"
						: "Don't have account"}{" "}
					<Link
						href={alterAuthLink}
						className="text-[--main-color] font-semibold"
					>
						{alterAuth}
					</Link>
				</p>
			</Card>
		</motion.div>
	);
};
export default Auth;
