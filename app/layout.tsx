import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Survivors",
	description: "How will you survive the apocalypse?",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				style={{ margin: 0, minHeight: "100vh" }}
				className={inter.className}
			>
				{children}
			</body>
		</html>
	);
}
