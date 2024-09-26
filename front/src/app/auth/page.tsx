'use client';
import { LoginGoogle } from '@/lib/client/client';
// import { HOST_API } from '@/config/ENV';
import { useCallback, useState } from 'react';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimationTextAuth from '@/components/animation/animation-text-auth';

export default function Page() {
	const [isLoading, setIsLoading] = useState(true);
	const { setUser } = useUserStore();
	const router = useRouter();

	const handleCallback = useCallback(async () => {
		try {
			// Obtener el token de la URL
			const urlParams = new URLSearchParams(window.location.search);
			const accessToken = urlParams.get('token');

			if (accessToken) {
				const user = LoginGoogle(accessToken);
				console.log(user);
				setUser(user);
				setIsLoading(false);
				new Promise((resolve) => setTimeout(resolve, 200)).then(() => {
					router.replace('/library');
				});
			} else {
				console.error('No access token received');

				new Promise((resolve) => setTimeout(resolve, 200)).then(() => {
					router.replace('/');
				});
			}
		} catch (error) {
			console.error('Error during callback:', error);
		}
	}, [router, setUser]);

	handleCallback();

	return (
		<div className='fixed top-0 w-screen h-screen bg-white z-10 flex justify-center items-center'>
			{isLoading && (
				<div className='flex flex-col items-center justify-center gap-16'>
					<AnimationTextAuth />
					<motion.div
						className='w-96 h-96 border-[48px] border-solid border-blue-400 border-t-[48px] border-t-white  rounded-full'
						animate={{
							rotate: 360,
							transition: { repeat: Infinity, ease: 'linear', duration: 1.35 },
						}}
					/>
				</div>
			)}
		</div>
	);
}
