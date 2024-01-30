import Container from '@/components/container';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
	title: 'Talk to me!'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${rubik.variable} bg-black text-white`}>
				<Header />
				<Container>{children}</Container>
			</body>
		</html>
	);
}
