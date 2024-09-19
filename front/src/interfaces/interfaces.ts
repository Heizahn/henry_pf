export interface ILinkNav {
	name: string;
	href: string | null;
	title: string;
	options?: ILinkNav[];
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
