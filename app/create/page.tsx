import TweetSkeleton from "@/components/TweetSkeleton";
import Link from "next/link";
import React from "react";

const page = () => {
	const isLoaded = false;
	return (
		<div className="flex flex-col items-center my-16">
			<div className="flex justify-around gap-10">
				<div className="flex flex-col items-center">
					<label htmlFor="mood" className="font-semibold">
						mood
					</label>
					<select
						className="px-3 py-1 rounded my-2 bg-white border"
						name="mood"
						id="mood"
						defaultValue={"select"}
					>
						<option value="">select</option>
						<option value="happy">happy</option>
						<option value="happy2">happy2</option>
						<option value="happy3">happy3</option>
						<option value="happy4">happy4</option>
					</select>
				</div>

				<div className="flex flex-col items-center">
					<label htmlFor="topic" className="font-semibold">
						topic
					</label>
					<select
						className="px-3 py-1 rounded my-2 bg-white border"
						name="topic"
						id="topic"
						defaultValue={"select"}
					>
						<option value="">select</option>
						<option value="happy">happy</option>
						<option value="happy">happy2</option>
						<option value="happy">happy3</option>
						<option value="happy">happy4</option>
					</select>
				</div>
			</div>
			<Link
				href={""}
				className="bg-[--main-color] w-fit mx-auto text-white px-5 py-2 rounded-full my-5 font-semibold"
			>
				Create
			</Link>

			<div className="w-5/6 my-6 mx-auto border border-dashed px-6">
				{!isLoaded ? (
					<TweetSkeleton className="mx-auto w-full" />
				) : (
					<div className="px-2 py-6">hii</div>
				)}
			</div>
		</div>
	);
};

export default page;
