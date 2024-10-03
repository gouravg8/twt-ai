import { signIn } from "@/auth";

async function signinGoogle() {
	const data = await signIn("google");
	console.log(data);
}
export { signinGoogle };
