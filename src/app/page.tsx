import Main from "@/components/Main";
import { auth, signOut } from "@/lib/auth";
import { signOutAction } from "@/actions/auth.action";

export default async function Home() {
	return (
		<>
			<Main />
			{/* TODO: Add a how to use page */}
		</>
	);
}

export async function SignOutCompo() {
	const session = await auth();
	return (
		<>
			{session && (
				<form action={signOutAction}>
					<button type="submit">Log Out</button>
				</form>
			)}
		</>
	);
}
