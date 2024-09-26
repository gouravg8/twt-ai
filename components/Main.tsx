"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion, stagger, useScroll } from "framer-motion";

const Main = () => {
	const imgUrl = ["tweet.jpg", "tweet2.jpg", "tweet.jpg"];
	return (
		<div className="flex flex-col justify-center align-middle text-center my-12">
			<motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-5xl mx-auto font-poppins font-bold"
				>
					Elevate Your Twitter Game <br />
					<span className="bg-[--main-color] text-white px-4 my-8 clip-poly ">
						with Ai
					</span>
				</motion.h1>
			</motion.div>
			{/* animate below paragram such that each word comes from left to right */}
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="text-gray-500 mt-10 mb-5 w-5/6 font-medium mx-auto text-lg"
			>
				Your ultimate AI-powered tool for crafting the perfect tweets
				effortlessly
			</motion.p>
			<Link className="w-fit mx-auto" href={"/signup"}>
				<motion.div
					whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.5 }}
				>
					<Button
						onClick={() => "/login"}
						className="bg-[--main-color] text-white px-5 py-2 my-5 font-semibold"
					>
						Start Creating
					</Button>
				</motion.div>
			</Link>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 0.5 }}
				className="w-5/6 mx-auto border-2 border-dashed border-[--main-color] mt-8 p-2 rounded flex flex-col gap-5"
			>
				{imgUrl.map((item) => (
					<div key={item}>
						<Image
							className="shadow-xl rounded-md"
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
