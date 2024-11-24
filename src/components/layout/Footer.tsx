import { RiLinkedinLine, RiTwitterXLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="text-gray-600 body-font">
			<div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
				<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					© 2024 TwtAi
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<Link
						className="ml-3 text-gray-500"
						href="https://x.com/Gouravsoni88"
						title="Twitter profile"
						aria-label="Twitter"
					>
						<RiTwitterXLine className="size-4" />
					</Link>
					<Link
						className="ml-3 text-gray-500"
						href="https://www.linkedin.com/in/gouravsoni8/"
						title="LinkedIn profile"
						aria-label="LinkedIn"
					>
						<RiLinkedinLine className="size-4" />
					</Link>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
