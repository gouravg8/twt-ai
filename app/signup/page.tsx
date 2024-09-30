import Auth from "@/components/Auth";
import SignIn from "@/components/sign-in";
import React from "react";

const page = () => {
	return <Auth authText="Sign up" alterAuth="Login" alterAuthLink="login" />;
	// return <SignIn />;
};

export default page;
