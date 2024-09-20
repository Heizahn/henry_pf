'use client';

import { IOptionsUser } from '@/interfaces/interfaces';
import { motion } from 'framer-motion';

interface IOptionsUserProps {
	options: IOptionsUser[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function OptionsUser({ options, isOpen, setIsOpen }: IOptionsUserProps) {
	return (
		<>
			<motion.div
				className='absolute w-auto top-16 right-0 flex flex-col gap-1 items-center shadow-sm shadow-gray-400 rounded-sm px-5 pt-3 pb-5 bg-white'
				initial={{ scaleY: 0, y: -50, x: 0, opacity: 0 }}
				animate={
					isOpen
						? {
								scaleY: 1,
								y: 0,
								opacity: 1,
								transition: { delay: 0.1, duration: 0.3 },
						  }
						: {
								scaleY: 0,
								y: -50,
								opacity: 0,
								transition: { delay: 0.1, duration: 0.3 },
						  }
				}
			>
				{options.map((item, key) => (
					<div
						key={key}
						className=' text-gray-700 hover:text-gray-950 cursor-pointer transition-colors duration-500 py-1 px-0.5 text-lg font-semibold '
					>
						<button
							className='flex gap-3 items-center'
							key={key}
							onClick={() => {
								setIsOpen(false);
								item.handlerClick?.();
							}}
						>
							{item?.icon && <item.icon />}
							<span className='text-nowrap'>{item.title}</span>
						</button>
					</div>
				))}
			</motion.div>
		</>
	);
}
