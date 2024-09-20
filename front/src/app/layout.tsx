import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
	title: 'Booknity',
	description: 'Booknity, tu biblioteca digital',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
