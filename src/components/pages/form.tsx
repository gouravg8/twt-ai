"use client";
import { credentialLogin } from "@/no-use-auths/actions/login.action";
import { credentialSignup } from "@/no-use-auths/actions/signup.action";
import { toast } from "@/hooks/use-toast";
import { Label } from "@radix-ui/react-dropdown-menu";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Login = () => {
	const handleLogin = async (formData: FormData) => {
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		try {
			const res = await credentialLogin({ email, password }).then((ress) => {
				console.log("res", { email, password, ress });
			});

			// if (res.error) {
			// 	toast({
			// 		title: "Error",
			// 		description: res.error,
			// 		variant: "destructive",
			// 	});
			// 	return;
			// }

			// toast({
			// 	title: "Success",
			// 	description: "Logged in successfully",
			// 	variant: "default",
			// });
			// redirect("/");
		} catch (error) {
			console.log("error", String(error));

			toast({
				title: "Error",
				description: `Something went wrong${error}`,
				variant: "destructive",
			});
		}
	};

	return (
		<form
			action={handleLogin}
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

				const res = await credentialSignup({
					name,
					email,
					password,
				});

				console.log("signup res", res?.err);

				if (res?.err) {
					toast({
						title: "Error",
						description: res.err,
						variant: "destructive",
					});
					return;
				}

				toast({
					title: "Success",
					description: "Signup is successfully",
					variant: "default",
				});
				redirect("/login");
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
