import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TweetSkeleton = () => {
	return (
		<div className="flex flex-col space-y-3 py-8">
			<div className="flex gap-3">
				<Skeleton className="h-[30px] w-[90px] rounded" />
				<Skeleton className="h-[30px] w-[150px] rounded" />
				<Skeleton className="h-[30px] w-[100px] rounded" />
			</div>
			<div className="flex gap-3">
				<Skeleton className="h-[30px] w-[140px] rounded" />
				<Skeleton className="h-[30px] w-[50px] rounded" />
				<Skeleton className="h-[30px] w-[150px] rounded" />
			</div>
			<div className="flex gap-3">
				<Skeleton className="h-[30px] w-[90px] rounded" />
				<Skeleton className="h-[30px] w-[250px] rounded" />
				<Skeleton className="h-[30px] w-[150px] rounded" />
			</div>
		</div>
	);
};

export default TweetSkeleton;
