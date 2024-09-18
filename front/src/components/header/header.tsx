import Link from 'next/link';
import Navbar from './navbar';

export default function Header() {
	return (
		<header className='max-w-[1440px] h-[10vh] mx-auto flex items-center justify-between py-2 px-4 sticky top-0 bg-white z-10'>
			<Link href='/'>
				<h1 className='text-2xl font-bold'>Booknity Logo</h1>
			</Link>
			<div className='hidden md:block items-center'>
				<Navbar />
			</div>
		</header>
	);
}
