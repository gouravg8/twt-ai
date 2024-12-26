"use client";
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
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useUser } from "@/app/context/UserContext";

const NavBar = () => {
	const { user, setUser } = useUser();
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
					{user && (
						<Link href={"/profile"}>
							<DropdownMenuItem className="text-base font-semibold cursor-pointer">
								{user?.given_name} !
							</DropdownMenuItem>
						</Link>
					)}

					<Link href={"/create"}>
						<DropdownMenuItem className="cursor-pointer">
							Create
						</DropdownMenuItem>
					</Link>
					<DropdownMenuItem className="cursor-pointer">
						Billing
					</DropdownMenuItem>
					{user ? (
						<DropdownMenuItem>
							<LogoutLink
								className="cursor-pointer"
								onClick={() => setUser(null)}
							>
								Logout
							</LogoutLink>
						</DropdownMenuItem>
					) : (
						<DropdownMenuItem className="cursor-pointer">
							<LoginLink>Login</LoginLink>
						</DropdownMenuItem>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default NavBar;
