export interface ILinkNav {
	name: string;
	href: string | null;
	options?: ILinkNav[];
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
