import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-[85vh] bg-background text-foreground">
			<h1 className="text-4xl font-bold mb-4">404</h1>
			<h2 className="text-2xl mb-4">Page Not Found</h2>
			<p className="text-muted-foreground mb-8">
				Oops! The page you're looking for doesn't exist.
			</p>
			<Button asChild>
				<Link href="/">Go to Home</Link>
			</Button>
		</div>
	);
}
