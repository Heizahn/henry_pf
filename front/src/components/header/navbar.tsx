'use client';

import { ILinkNav } from '@/interfaces/interfaces';
import LinkNav from './link-nav';
import HomeIcon from '/public/assets/gite.svg';
import FavoritesIcon from '/public/assets/shelves.svg';
import CategoryIcon from '/public/assets/category.svg';
import CommunityIcon from '/public/assets/groups.svg';
import ProfileIcon from '/public/assets/login.svg';

export default function Navbar() {
	const navItems: ILinkNav[] = [
		{ name: 'Home', href: '/home', Icon: HomeIcon },
		{ name: 'Favorites', href: '/favorites', Icon: FavoritesIcon },
		{
			name: 'Categories',
			href: null,
			options: [],
			Icon: CategoryIcon,
		},
		{ name: 'Forum', href: '/forum', Icon: CommunityIcon },
		{ name: 'Login', href: null, options: [], Icon: ProfileIcon },
	];

	return (
		<nav className='flex gap-10 items-center'>
			{navItems.map((item, index) => (
				<LinkNav key={index} link={item} />
			))}
		</nav>
	);
}
