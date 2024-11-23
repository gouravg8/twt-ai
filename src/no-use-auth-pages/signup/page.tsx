import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type React from "react";
import { Signup } from "@/components/pages/form";

const page = () => {
	function signup(arg0: { name: string; email: string; password: string }) {
		throw new Error("Function not implemented.");
	}

	return (
		<div className="w-5/6 md:w-1/4 flex flex-col h-[70vh] md:h-[85vh] justify-center align-middle mx-auto text-center">
			<Card className="w-[350px] md:w-[400px]  pb-8">
				<CardHeader className="font-semibold">Sign up</CardHeader>
				<CardContent>
					<Signup />
				</CardContent>
				<h1>or</h1>
				<form
					action={""}
					className="text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto border border-gray-300 p-3 rounded-lg my-4"
				>
					<img className="size-8" src={"/google-logo.png"} alt="google logo" />
					<button type="submit">Sign up with Google</button>
				</form>
				<p className="text-sm">
					Already have an account?
					<Link
						href={"/login"}
						className="text-[--main-color] font-semibold mx-1"
					>
						Log in
					</Link>
				</p>
			</Card>
		</div>
	);
};

export default page;
