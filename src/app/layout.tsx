import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type { Viewport } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "twt Ai",
	description: "Mood wise Tweet generated by Ai",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="light">
			<body>
				<NavBar />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
