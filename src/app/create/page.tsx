"use client";
import TweetSkeleton from "@/components/pages/TweetSkeleton";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { categories, moods } from "@/constants";
import Link from "next/link";
import React, { useRef, useState } from "react";

const page = () => {
	// TODO: create tweet
	const [isLoaded, setIsLoaded] = useState(true);
	const [haveTweet, setHaveTweet] = useState(true);
	const [tweet, setTweet] = useState("No tweet");
	const tweetRef = useRef(null);
	return (
		<div className="h-[50vh] md:h-[65vh] flex flex-col items-center my-16">
			<div className="flex justify-around gap-10">
				<Select>
					<SelectTrigger className="w-[120px] bg-slate-200 border-0">
						<SelectValue placeholder="Mood" />
					</SelectTrigger>
					<SelectContent className="border-0 shadow-lg">
						{moods.map((mood, index) => (
							<SelectItem key={mood + index.toString()} value={mood}>
								{mood}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className="w-[120px] bg-slate-200 border-0">
						<SelectValue placeholder="Topic" />
					</SelectTrigger>
					<SelectContent className="border-0 shadow-md">
						{categories.map((category, index) => (
							<SelectItem key={category + index.toString()} value={category}>
								{category}
							</SelectItem>
						))}
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
