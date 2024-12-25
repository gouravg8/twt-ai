"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useUser } from "@/app/context/UserContext";

const Main = () => {
	const { user } = useUser();

	const imgUrl = ["tweet.jpg", "tweet.jpg"];
	return (
		<div className="flex flex-col md:flex-row md:gap-0 md:items-center md:h-[85vh] md:my-auto justify-center align-middle text-center my-12">
			<div className="md:w-1/2">
				<motion.h1
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
					className="md:text-6xl text-4xl mx-auto font-poppins font-bold md:leading-snug"
				>
					Elevate Your Twitter Game <br />
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
					className="w-fit bg-[--main-color] text-white px-4 clip-poly md:clip-poly-md md:text-6xl text-4xl mx-auto font-poppins font-bold md:leading-snug"
				>
					with Ai
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="text-gray-500 mt-10 mb-5 w-5/6 font-medium mx-auto text-xl"
				>
					Your ultimate AI-powered tool for crafting the perfect tweets
					effortlessly
				</motion.p>
				<motion.div
					className="w-fit mx-auto"
					whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.5 }}
				>
					<Link className="w-fit" href={user ? "/create" : "/api/auth/login"}>
						<Button className="bg-[--main-color] hover:bg-[--main-color-dark-1] text-white px-5 py-2 md:px-8 md:py-6 md:text-xl md:font-normal my-5 font-semibold">
							Start Creating
						</Button>
					</Link>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 0.5 }}
				className="w-11/12 md:w-1/3 mx-auto md:mx-0 h-fit  mt-8 md:-mt-24 p-2 rounded flex flex-col gap-5"
			>
				{imgUrl.map((item, index) => (
					<div key={index.toString() + item}>
						<Image
							className={`shadow-2xl rounded-md w-2/3 ${index % 2 === 0 ? "absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/6 z-20" : "relative z-10"}`}
							width={500}
							height={0}
							src={"/tweet1.png"}
							alt="tweet"
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
};
export default Main;
