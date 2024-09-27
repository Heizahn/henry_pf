import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import BannerDonation from '@/components/bannerDonation/banner';

export const metadata: Metadata = {
	title: 'Booknity',
	description: 'Booknity, tu biblioteca digital',
};

const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto_mono.className}`}>
				<BannerDonation />
				<Header />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
