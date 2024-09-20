'use client';
import { ILinkNav } from '@/interfaces/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Options from './options';
import { useUserStore } from '@/store/useUserStore';
import UserButton from './user-button';
import LineaBottom from './linea-bottom';

export default function LinkNav({ link }: { link: ILinkNav }) {
	const { name, Icon, title, options } = link;
	const { user } = useUserStore();

	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);
	return (
		<div className=' text-gray-700 hover:text-gray-950 cursor-pointer transition-colors duration-500 py-1 px-0.5 text-lg font-semibold '>
			{link.href ? (
				<div className='flex flex-col group gap-1'>
					<Link href={link.href}>
						<div className='flex flex-row gap-3 items-center'>
							<Icon />
							{title}
						</div>
					</Link>
					<LineaBottom pathname={pathname} name={name} />
				</div>
			) : name === 'categories' ? (
				<div className='flex flex-col gap-1 group'>
					<div className='flex flex-row gap-3 items-center'>
						{Icon && <Icon />}
						<div className='flex gap-1 items-center'>
							{title}
							<span className='w-0 overflow-hidden transition-all duration-500 ease-in-out  group-hover:w-auto'>
								▼
							</span>
						</div>
					</div>
					<LineaBottom pathname={pathname} name={name} />
				</div>
			) : user === null ? (
				<div className='flex flex-col group gap-1'>
					<div className='flex gap-3 items-center'>
						<button
							className='flex gap-3 items-center'
							onClick={() => setIsOpen(!isOpen)}
						>
							{Icon && <Icon />}
							{title}
						</button>
					</div>
					{isOpen ? (
						<LineaBottom pathname={'/' + name} name={name} />
					) : (
						<LineaBottom pathname='' name={name} />
					)}
					{options?.length && (
						<Options options={options} isOpen={isOpen} setIsOpen={setIsOpen} />
					)}
				</div>
			) : (
				<UserButton isOpen={isOpen} setIsOpen={setIsOpen} />
			)}
		</div>
	);
}
