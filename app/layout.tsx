import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { cn } from "./lib/utils";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Survivors",
	description: "How will you survive the apocalypse?",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen m-0 p-4")}>{children}</body>
		</html>
	);
}
