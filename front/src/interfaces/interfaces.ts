import React from 'react';

export interface ILinkNav {
	name: string;
	href: string | null;
	title: string;
	options?: string[];
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface IUser {
	userId: number;
	fullName: string;
	email: string;
	isAdmin: boolean;
	photoUrl: string;
	token: string;
}

export interface IOptionsUser {
	title: string;
	icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	href?: string;
	handlerClick?: () => void;
}

// export interface IDecodeUser {
// 	id: number;
// 	name: string;
// 	email: string;
// 	photoUrl: string;
// 	isAdmin: string;
// 	iat?: number;
// 	exp?: number;
// }
