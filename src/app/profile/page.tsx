"use client";
import Image from "next/image";
import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "../context/UserContext";

const Page = () => {
	const { toast } = useToast();
	const { user } = useUser();

	return (
		<div className="lg:w-2/3 xl:w-1/2 mx-auto">
			<div className="w-5/6 mx-auto rounded-md bg-gray-200 px-4 py-8 flex flex-col md:flex-row md:justify-center md:gap-20 items-center gap-2 mt-12 mb-6">
				<Image
					src={"/twtlogo.svg"}
					alt="profile photo"
					width={100}
					height={100}
					className="rounded-full object-cover overflow-hidden w-32 md:w-40"
				/>
				<div className="flex flex-col gap-2">
					<p>
						<span>Name: </span>
						<span className="font-semibold">
							{`${user?.given_name} ${user?.family_name}`}
						</span>
					</p>
					<p>
						<span>Email: </span> <span>{user?.email}</span>
					</p>
				</div>
			</div>
			<div className="w-5/6 mx-auto my-4 flex flex-col justify-around">
				<div className="flex justify-between items-center my-3">
					<p className="w-2/5 font-semibold pl-2">All tweets</p>
					<input
						className="w-3/5 md:w-1/5 px-3 py-1.5 rounded-md placeholder:font-light bg-zinc-100"
						type="text"
						placeholder="search here"
					/>
				</div>
				{[1, 2, 3, 4, 5].map((tweet) => (
					<div className="relative" key={tweet}>
						<IoCopyOutline
							className="text-gray-500 absolute right-4 top-4 cursor-pointer"
							onClick={() => {
								window.navigator.clipboard.writeText("tweet");
								toast({
									description: "Tweet copied to clipboard",
									variant: "success",
								});
							}}
						/>
						<p className="border border-gray-300 rounded-md p-4 my-2">
							hello this is my tweet and going very good, hello this is my tweet
							and going very good
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Page;
