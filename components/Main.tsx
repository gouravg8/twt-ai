"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Main = () => {
	return (
		<div className="flex flex-col justify-center align-middle text-center my-12">
			<h1 className="text-5xl mx-auto font-poppins font-bold">
				Elevate Your Twitter Game <br />
				<span className="bg-[--main-color] text-white px-4 my-8 clip-poly ">
					with Ai
				</span>
			</h1>
			<p className="text-gray-500 mt-10 mb-5 w-5/6 font-medium mx-auto text-lg">
				Your ultimate AI-powered tool for crafting the perfect tweets
				effortlessly
			</p>
			<Link href={"/signup"}>
				<Button
					onClick={() => "/login"}
					size={"lg"}
					className="bg-[--main-color] w-fit mx-auto text-white px-5 py-2 my-5 font-semibold"
				>
					Start Creating
				</Button>
			</Link>
			<div className="w-5/6 mx-auto border-2 border-dashed border-[--main-color] mt-8 p-2 rounded flex flex-col gap-5">
				{/* <div className='w-full flex relative mx-auto items-center shadow-gray-200 shadow-lg'> */}
				<Image
					className="shadow-xl"
					width={500}
					height={0}
					src={"/tweet1.png"}
					alt="tweet"
				/>
				{/* </div> */}
				{/* <div className='w-full h-36 flex relative mx-auto items-center shadow-gray-200 shadow-lg'> */}
				<Image
					className="shadow-xl"
					width={500}
					height={0}
					src={"/tweet1.png"}
					alt="tweet"
				/>
				{/* </div> */}
			</div>
		</div>
	);
};

export default Main;
