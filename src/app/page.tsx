import Main from "@/components/Main";
// import { auth, signOut } from "@/auth";
import { notFound } from "next/navigation";

export default async function Home() {
	// const session = await auth();
	// if (!session) return notFound();
	return (
		<>
			{/* <h1>Hello {session.user?.name}</h1> */}
			{/* <form
				action={async () => {
					"use server";
					await signOut();
				}}
			> */}
			{/* <button type="submit">Log Out</button> */}
			{/* </form> */}
			<Main />
			{/* TODO: Add a how to use page */}
		</>
	);
}
