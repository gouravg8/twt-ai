import Image from "next/image";
import React from "react";

const Loading = () => {
	return (
		<div className="min-w-full absolute min-h-screen flex justify-center items-center bg-white">
			<Image
				src="/twtlogo.svg"
				alt="loading"
				width={80}
				height={80}
				className="animate-bounce"
			/>
		</div>
	);
};

export default Loading;
