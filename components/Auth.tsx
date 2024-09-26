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
			className="flex flex-col h-[65vh] justify-center align-middle mx-auto text-center py-32"
		>
			<Card className="w-5/6 mx-auto py-12 shadow-lg">
				{/* <div className="bg-white shadow-lg w-5/6 py-8 mx-auto rounded-xl"> */}
				<div className="text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto border border-gray-300 p-3 rounded my-4">
					<Image
						src={"/google-logo.png"}
						width={20}
						height={0}
						style={googleLogoStyle}
						alt="google logo"
					/>
					<span>{authText} with Google</span>
				</div>
				{/* or */}
				{/* <form className='my-5 w-4/5 mx-auto'>
             <input className='w-full my-2 py-2 px-3 border text-sm' type="email" name="email" id="email" placeholder='Email'/>
            <input className='w-full my-2 py-2 px-3 border text-sm' type="password" name="password" id="password" placeholder='Password'/>
            <button type="submit" className='w-full bg-[--main-color] text-white px-3 py-2 rounded my-2 text-sm'>{authText} with Email</button>
        </form> */}
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
