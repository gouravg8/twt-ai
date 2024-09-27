"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

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
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
			className="w-full md:w-1/4 flex flex-col h-[70vh] md:h-[85vh] justify-center align-middle mx-auto text-center py-32"
		>
			<Card className="w-5/6 mx-auto py-12 shadow-lg">
				<div className="text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto border border-gray-300 p-3 rounded-lg my-4">
					<Image
						src={"/google-logo.png"}
						width={20}
						height={0}
						style={googleLogoStyle}
						alt="google logo"
					/>
					<span>{authText} with Google</span>
				</div>
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
				{/* </div> */}
			</Card>
		</motion.div>
	);
};

export default Auth;
