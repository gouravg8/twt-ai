import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMenu3Line } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = async () => {
	// TODO: add authentication
	return (
		<div className="flex justify-between align-middle items-center pl-6 pr-2 py-1 md:py-3 bg-slate-100 border-b">
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
			<DropdownMenu>
				<DropdownMenuTrigger className="outline-none px-4">
					<RiMenu3Line className="size-5" />
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align="end"
					className="bg-slate-100 border-0 mt-3 shadow-lg"
				>
					<Link href={"/profile"}>
						<DropdownMenuItem className="text-base font-semibold">
							{/* TODO: add the user name if Logged in */}
						</DropdownMenuItem>
					</Link>

					<Link href={"/create"}>
						<DropdownMenuItem>Create</DropdownMenuItem>
					</Link>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					{/* TODO: show login/signout based on user logged in or not */}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default NavBar;