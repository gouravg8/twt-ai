"use client";
import { toast } from "@/hooks/use-toast";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { credentialLogin } from "@/actions/login.action";
import { credentialSignup } from "@/actions/signup.action";
import { redirect } from "next/navigation";
// import { redirect } from "next/navigation";

const Login = () => {
	return (
		<form
			action={async (formData: FormData) => {
				const email = formData.get("email") as string;
				const password = formData.get("password") as string;

				if (!email || !password)
					toast({
						title: "Error",
						description: "Please provide all fields",
						variant: "destructive",
					});
				// console.log("form before credlogin", email, password);
				const { err } = await credentialLogin({ email, password });
				if (err)
					toast({
						title: "Error",
						description: err,
						variant: "destructive",
					});
				// console.log(err, "form");
				// console.log("form after credlogin", email, password);

				if (!err) {
					toast({
						title: "Success",
						description: "Logged in successfully",
						variant: "default",
					});
					redirect("/");
				}
				// } else {
				// 	toast({
				// 		title: "Error",
				// 		description: `${err} form 28`,
				// 		variant: "destructive",
				// 	});

				// 	// redirect("/");
				// }
			}}
			className="grid w-full items-start text-left gap-6"
		>
			<div className="flex flex-col space-y-1.5">
				<Label>Email</Label>
				<Input
					className="border border-gray-200"
					id="email"
					placeholder="email@example.com"
					type="email"
					name="email"
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label>Password</Label>
				<Input
					className="border border-gray-200"
					id="password"
					placeholder="********"
					type="password"
					name="password"
				/>
			</div>
			<Button type="submit" className="w-full">
				Log in
			</Button>
		</form>
	);
};

const Signup = () => {
	return (
		<form
			action={async (formData: FormData) => {
				const name = formData.get("name") as string;
				const email = formData.get("email") as string;
				const password = formData.get("password") as string;
				const { err } = await credentialSignup({
					name,
					email,
					password,
				});

				if (err) {
					toast({
						title: "Error",
						description: `${err} form 85`,
						variant: "destructive",
					});
				} else {
					toast({
						title: "Success",
						description: "Signup in successfully",
						variant: "default",
					});
					// redirect("/login");
				}
			}}
			className="grid w-full items-start text-left gap-6"
		>
			<div className="flex flex-col space-y-1.5">
				<Label>Name</Label>
				<Input
					className="border border-gray-200"
					id="name"
					placeholder="John Doe"
					type="text"
					name="name"
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label>Email</Label>
				<Input
					className="border border-gray-200"
					id="email"
					placeholder="email@example.com"
					type="email"
					name="email"
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label>Password</Label>
				<Input
					className="border border-gray-200"
					id="password"
					placeholder="********"
					type="password"
					name="password"
				/>
			</div>
			<Button type="submit" className="w-full">
				Sign up
			</Button>
		</form>
	);
};
export { Login, Signup };
