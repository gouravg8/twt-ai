// "use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Login } from "@/components/pages/form";
import { signIn } from "@/lib/auth";
import { headers } from "next/headers";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
	const hs = headers();
	return (
		<div className="w-5/6 md:w-1/4 flex flex-col h-[70vh] md:h-[85vh] justify-center align-middle mx-auto text-center">
			<Card className="w-[350px] md:w-[400px] pb-8">
				<CardHeader className="font-semibold">Log in</CardHeader>
				<CardContent>
					<Login />
					{/* <p>{errorMsg}</p> */}
				</CardContent>
				<h1>or</h1>
				<form
					// action={dispatchGoogle}
					action={async () => {
						"use server";
						console.log("login, page", hs);
						await signIn("google");
					}}
					className="text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto p-3 rounded-lg my-4"
				>
					{/* <img className="size-8" src={"/google-logo.png"} alt="google logo" /> */}
					<button
						type="submit"
						className="flex gap-2 justify-center items-center border border-gray-300 w-full p-3 rounded-lg"
					>
						<img
							className="size-8"
							src={"/google-logo.png"}
							alt="google logo"
						/>
						Log in with Google
					</button>
					{/* <p>{errorMsgGoogle}</p> */}
				</form>
				<p className="text-sm">
					Don't have an account?
					<Link
						href={"/signup"}
						className="text-[--main-color] font-semibold mx-1"
					>
						Sign up
					</Link>
				</p>
			</Card>
		</div>
	);
};
export default page;
