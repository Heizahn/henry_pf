import Link from 'next/link';
import Navbar from './navbar';
import SectionSave from '../section-save/section-save';

export default function Header() {
	return (
		<header className='w-full bg-white sticky top-[3vh] z-10'>
			<div className='max-w-[1440px] h-[7vh] mx-auto flex items-center justify-between py-2 px-4 '>
				<SectionSave />
				<Link href='/'>
					<h1 className='text-2xl font-bold'>Booknity Logo</h1>
				</Link>

				<div className='hidden md:block items-center'>
					<Navbar />
				</div>
			</div>
		</header>
	);
}
