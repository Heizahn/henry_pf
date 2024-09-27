'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import CloseIcon from '/public/assets/close.svg';
import GoogleIcon from '/public/assets/Google.svg';

import { HOST_API } from '@/config/ENV';
import { useRouter } from 'next/navigation';

interface IAnimationFormProps {
	children: React.ReactNode;
	title: string;
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AnimationForm({
	children,
	title,
	showModal,
	setShowModal,
}: IAnimationFormProps) {
	const [show, setShow] = useState(showModal);
	const router = useRouter();

	const handleGoogleAuth = () => {
		router.replace(`${HOST_API}/auth/google`);
	};

	return (
		<div className='fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.7)] z-50 flex justify-center items-center cursor-default'>
			<motion.div
				initial={{ scale: 0, opacity: 0, rotate: 10 }}
				animate={
					show
						? {
								scale: 1,
								rotate: 0,
								opacity: 1,
								transition: { delay: 0.1, duration: 0.3 },
						  }
						: {
								scale: 0,
								rotate: 10,
								opacity: 0,
								transition: { delay: 0.1, duration: 0.3 },
						  }
				}
			>
				<div className='flex flex-col bg-white rounded-xl w-[450px] shadow-form'>
					<div className='px-6 py-4'>
						<div className='flex justify-end px-1 py-1'>
							<button
								onClick={() => {
									setShow(false);

									setTimeout(() => setShowModal(false), 320);
								}}
								className='hover:bg-gray-400 px-1 py-1 rounded-sm active:shadow-inner-black transition-shadow duration-100'
							>
								<CloseIcon />
							</button>
						</div>
						<h2 className='mt-3 mb-4 text-center text-2xl font-bold text-gray-950'>
							{title}
						</h2>
						{children}
						<div className='w-full flex justify-center '>
							<button
								className='w-10 h-10 border-2 border-gray-400 flex items-center justify-center rounded-full'
								onClick={handleGoogleAuth}
							>
								<GoogleIcon />
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
