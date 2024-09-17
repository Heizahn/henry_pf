import { ILinkNav } from '@/interfaces/interfaces';
import LinkNav from './link-nav';

export default function Navbar() {
	const navItems: ILinkNav[] = [
		{ name: 'Inicio', href: '/home' },
		{ name: 'Favoritos', href: '/favorites' },
		{ name: 'Categorías', href: null, options: [] },
		{ name: 'Comunidad', href: '/forum' },
		{ name: 'Perfil', href: null, options: [] },
	];

	return (
		<nav className='flex gap-10'>
			{navItems.map((item, index) => (
				<LinkNav key={index} link={item} />
			))}
		</nav>
	);
}
