'use client';

import { ILinkNav } from '@/interfaces/interfaces';
import LinkNav from './link-nav';
import HomeIcon from '/public/assets/gite.svg';
import LibraryIcon from '/public/assets/shelves.svg';
import CategoryIcon from '/public/assets/category.svg';
import CommunityIcon from '/public/assets/groups.svg';
import ProfileIcon from '/public/assets/login.svg';

export default function Navbar() {
	const navItems: ILinkNav[] = [
		{ name: 'home', href: '/home', Icon: HomeIcon, title: 'Inicio' },
		{ name: 'library', href: '/library', Icon: LibraryIcon, title: 'Biblioteca' },
		{
			name: 'categories',
			href: null,
			options: [],
			Icon: CategoryIcon,
			title: 'Categorías',
		},
		{ name: 'forum', href: '/forum', Icon: CommunityIcon, title: 'Comunidad' },
		{
			name: 'Login',
			href: null,
			options: ['Iniciar sesión', 'Registrarse'],
			Icon: ProfileIcon,
			title: 'Iniciar sesión',
		},
	];

	return (
		<nav className='flex gap-10 items-center'>
			{navItems.map((item, index) => (
				<LinkNav key={index} link={item} />
			))}
		</nav>
	);
}
