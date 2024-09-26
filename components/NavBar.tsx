"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
	// TODO: add authentication
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	return (
		<div className="flex justify-between align-middle items-center pl-6 pr-2 py-2 bg-slate-200">
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
			{/* 🍔 */}
			<DropdownMenu>
				<DropdownMenuTrigger className="outline-none px-4">
					🍔
				</DropdownMenuTrigger>

				<DropdownMenuContent align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<Link href={"/create"}>
						<DropdownMenuItem>Create</DropdownMenuItem>
					</Link>
					<DropdownMenuItem>Billing</DropdownMenuItem>

					{isAuthenticated ? (
						<DropdownMenuItem>Log out</DropdownMenuItem>
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
