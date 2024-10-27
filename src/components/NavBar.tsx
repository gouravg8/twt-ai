import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMenu3Line } from "@remixicon/react";
import { SignOutCompo } from "@/app/page";
import { auth } from "@/lib/auth";

const NavBar = async () => {
	// TODO: add authentication
	const session = await auth();
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
							{session?.user?.name}
						</DropdownMenuItem>
					</Link>

					<Link href={"/create"}>
						<DropdownMenuItem>Create</DropdownMenuItem>
					</Link>
					<DropdownMenuItem>Billing</DropdownMenuItem>

					{session?.user ? (
						<DropdownMenuItem>
							<SignOutCompo />
						</DropdownMenuItem>
					) : (
						<Link href={"/login"}>
							<DropdownMenuItem>Log in</DropdownMenuItem>
						</Link>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default NavBar;
