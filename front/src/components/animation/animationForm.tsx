'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
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

	return (
		<div className='fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.7)] z-10 flex justify-center items-center'>
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
				<div className='flex gap-4 items-center justify-between'>
					<div className='w-3 h-1 bg-transparent'></div>
					<h2 className='py-5 text-center text-2xl font-bold text-white '>
						{title}
					</h2>
					<button
						onClick={() => {
							setShow(false);

							setTimeout(() => setShowModal(false), 320);
						}}
						className='bg-white-700 text-black-DEFAULT font-bold text-sm px-3 py-1 rounded-lg hover:bg-white-500 active:shadow-inner-black transition-shadow duration-100'
					>
						X
					</button>
				</div>
				{children}
			</motion.div>
		</div>
	);
}
