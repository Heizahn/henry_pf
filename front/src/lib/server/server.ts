import { HOST_API } from '@/config/ENV';
import { IUser, IUserRegister } from '@/interfaces/interfaces';
import { DecodedToken } from '../client/client';

export async function UserLogin(email: string, password: string) {
	const response = await fetch(`${HOST_API}/auth/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});

	if (!response.ok) throw new Error('Usuario no encontrado');

	const { token } = await response.json();
	// const token =
	// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ1c3VhcmlvZWplbXBsb0BleGFtcGxlLmNvbSIsImlzQWRtaW4iOiJmYWxzZSIsIm5hbWUiOiJKdWFyIFBlcmV6IiwicGhvdG9VcmwiOiJodHRwczovL2V4YW1wbGUuY29tIiwiaWF0IjoxNzI2ODU0MTEwfQ.00t_Km1FX4KMVQyD3gH55uSgBKo-709lA5oAREOqxAc';

	const user: IUser = DecodedToken(token);

	return user;
}

export async function UserRegister(user: IUserRegister) {
	try {
		const response = await fetch(`${HOST_API}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: user.fullName,
				email: user.email,
				password: user.password,
			}),
		});

		if (!response.ok) throw new Error('Error al registrar el usuario');
	} catch (error) {
		if (error instanceof Error) throw error;
	}
}
