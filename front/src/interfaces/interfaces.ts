import React from 'react';

export interface ILinkNav {
	name: string;
	href: string | null;
	title: string;
	options?: string[];
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
