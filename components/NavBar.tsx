import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<div className="flex justify-between align-middle items-center px-6 py-2 bg-gray-100">
			<Link
				href={"/"}
				className="flex justify-center align-middle items-center text-base font-bold "
			>
				<Image
					width={110}
					height={20}
					src="/twtlogo.svg"
					alt=""
					className="size-12"
				/>
				TwtAi
			</Link>
			🍔
		</div>
	);
};

export default NavBar;
