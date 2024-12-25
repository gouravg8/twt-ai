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
import axios from "axios";
import React, { use, useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast";
import "@/app/globals.css";

const Page = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [tweet, setTweet] = useState("");
	const tweetRef = useRef(null);
	const [mood, setMood] = useState("");
	const [category, setCategory] = useState("");

	const { toast } = useToast();

	async function fetchData(mood: string, category: string) {
		setIsLoading(true);
		try {
			const res = await axios.post("/api/create", {
				mood,
				category,
			});
			setIsLoading(false);
			toast({
				description: "Tweet generated successfully",
				variant: "success",
			});
			return res.data;
		} catch (error) {
			setIsLoading(false);
			toast({
				description: "Error generating tweet",
				variant: "destructive",
			});
		}
	}

	const createTweet = async () => {
		if (!mood || !category) {
			toast({
				description: "Please select mood and category",
				variant: "destructive",
			});
			return;
		}

		const resTweet = await fetchData(mood, category);
		if (resTweet) {
			console.log(resTweet);

			setTweet(resTweet.result.response);
		} else {
			setTweet("No tweet");
		}
	};

	return (
		<div className="h-[50vh] md:h-[65vh] flex flex-col items-center my-16">
			<div className="flex justify-around gap-10">
				<Select onValueChange={(value) => setMood(value)}>
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

				<Select onValueChange={(value) => setCategory(value)}>
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
			<Button
				onClick={createTweet}
				size={"default"}
				className="bg-[--main-color] hover:bg-[--main-color-dark-1] w-fit mx-auto text-white px-5 py-2 my-5 font-semibold"
			>
				Create
			</Button>

			<div className="w-5/6 my-6 lg:w-1/2 mx-auto border border-dashed px-6 rounded-md">
				{isLoading ? (
					<TweetSkeleton />
				) : (
					<div ref={tweetRef} className="px-2 py-6 relative">
						{tweet && (
							<IoCopyOutline
								className="text-gray-500 absolute -right-1 top-3 cursor-pointer"
								onClick={() => {
									window.navigator.clipboard.writeText(tweet);
									toast({
										description: "Tweet copied to clipboard biro",
										variant: "success",
									});
								}}
							/>
						)}
						<p className={!tweet ? "text-gray-500" : ""}>
							{tweet ? tweet : "Generated tweet will appear here"}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Page;
