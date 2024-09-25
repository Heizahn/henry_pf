'use client';
import { LoginGoogle } from '@/lib/client/client';
// import { HOST_API } from '@/config/ENV';
import { useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';

export default function Page() {
	const { setUser } = useUserStore();
	const router = useRouter();
	const handleCallback = async () => {
		try {
			// Obtener el token de la URL
			const urlParams = new URLSearchParams(window.location.search);
			const accessToken = urlParams.get('token');

			if (accessToken) {
				const user = LoginGoogle(accessToken);
				console.log(user);
				setUser(user);
				router.replace('/library');
			} else {
				console.error('No access token received');
			}
		} catch (error) {
			console.error('Error during callback:', error);
		}
	};

	useEffect(() => {
		handleCallback();
	}, []);
	return <p>Google</p>;
}
