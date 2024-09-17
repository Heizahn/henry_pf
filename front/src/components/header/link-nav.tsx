import { ILinkNav } from '@/interfaces/interfaces';
import Link from 'next/link';

export default function LinkNav({ link }: { link: ILinkNav }) {
	return (
		<div>
			{link.href ? <Link href={link.href}>{link.name}</Link> : <div>{link.name}</div>}
		</div>
	);
}
