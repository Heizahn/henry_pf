import { IUser } from '@/interfaces/interfaces';
import jwt from 'jsonwebtoken';

export function DecodedToken(token: string) {
	const decodedToken = jwt.decode(token) as jwt.JwtPayload;

	const user: IUser = {
		userId: decodedToken?.user_id,
		name: decodedToken?.name,
		email: decodedToken?.email,
		photoUrl: decodedToken?.photoUrl,
		isAdmin: decodedToken?.isAdmin,
		token,
	};

	return user;
}

export function LoginGoogle(token: string) {
	const decodedToken = jwt.decode(token) as jwt.JwtPayload;

	const user: IUser = {
		userId: decodedToken?.id,
		name: decodedToken?.name,
		email: decodedToken?.email,
		photoUrl: decodedToken?.photoUrl,
		isAdmin: decodedToken?.isAdmin,
		token,
	};

	return user;
}
