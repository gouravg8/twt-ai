"use client";
import TweetSkeleton from "@/components/TweetSkeleton";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const page = () => {
	// TODO: create tweet
	const [isLoaded, setIsLoaded] = useState(true);
	const [haveTweet, setHaveTweet] = useState(true);
	const [tweet, setTweet] = useState("No tweet");
	const tweetRef = useRef(null);
	return (
		<div className="flex flex-col items-center my-16">
			<div className="flex justify-around gap-10">
				<Select>
					<SelectTrigger className="w-[120px] bg-slate-200 border-0">
						<SelectValue placeholder="Mood" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className="w-[120px] bg-slate-200 border-0">
						<SelectValue placeholder="Topic" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Link href={""}>
				<Button
					size={"lg"}
					className="bg-[--main-color] w-fit mx-auto text-white px-5 py-2 my-5 font-semibold"
				>
					Create
				</Button>
			</Link>

			<div className="w-5/6 my-6 mx-auto border border-dashed px-6 rounded-md">
				{haveTweet ? (
					!isLoaded ? (
						<TweetSkeleton />
					) : (
						<div ref={tweetRef} className="px-2 py-6">
							{tweet}
						</div>
					)
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default page;
