'use client';
import { ILinkNav } from '@/interfaces/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinkNav({ link }: { link: ILinkNav }) {
	const { name, Icon, title } = link;

	const pathname = usePathname();

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
			) : (
				<div className='flex flex-col group gap-1'>
					<div className='flex gap-3 items-center'>
						{Icon && <Icon />}
						{title}
					</div>
					<LineaBottom pathname={pathname} name={name} />
				</div>
			)}
		</div>
	);
}

function LineaBottom({ pathname, name }: { pathname: string; name: string }) {
	return (
		<div
			className={`border-2 ${
				pathname.split('/')[1] === name ? 'border-gray-950' : 'border-transparent'
			} w-full transition-all duration-500 ease-in-out group-hover:border-gray-950 rounded-sm`}
		></div>
	);
}
