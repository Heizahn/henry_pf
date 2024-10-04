import React from 'react';
import { IBook } from './Ibook';
 
export interface ILinkNav {
	name: string;
	href?: string | null; // Puede ser string o null para opciones sin enlace directo
	options?: { name: string; href: string }[]; // Opciones de subenlaces
	Icon: React.ElementType; // Icono como componente
	title: string; // Título para el link
  }

export interface IUser {
	userId: number;
	fullName: string;
	email: string;
	isAdmin: boolean;
	photoUrl: string;
	description: string;
	books: IBook[];
	friends: Array<string>;
	token: string;
}

export interface IOptionsUser {
    title: string;
    href?: string; // Puede ser opcional
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    handlerClick?: () => void; // Puede ser opcional
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

export interface IUserRegister {
	fullName: string;
	email: string;
	password: string;
}
