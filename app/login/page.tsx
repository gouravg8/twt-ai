import Auth from "@/components/Auth";
import SignIn from "@/components/sign-in";
import React from "react";
import { signIn } from "@/auth";

// const page = () => {
// return <Auth authText="Log in" alterAuth="Sign up" alterAuthLink="signup" />;
// return <SignIn />;
// };

const page = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google");
			}}
		>
			<button type="submit">Login with Google</button>
		</form>
	);
};

export default page;
