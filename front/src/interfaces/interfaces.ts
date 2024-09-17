export interface ILinkOptions {
	name: string;
	href: string;
}

export interface ILinkNav {
	name: string;
	href: string | null;
	options?: ILinkOptions[];
}
