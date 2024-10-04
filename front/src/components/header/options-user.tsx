// components/options-user.tsx
'use client';

import { IOptionsUser } from '@/interfaces/interfaces';
import { motion } from 'framer-motion';

interface IOptionsUserProps {
	options: IOptionsUser[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	onClick: (href?: string, handler?: () => void) => void; // Añadido aquí
}

export default function OptionsUser({ options, isOpen, setIsOpen, onClick }: IOptionsUserProps) {
	return (
		<motion.div
			className='absolute text-left w-auto top-16 right-5 flex flex-col items-center shadow-menu rounded-sm  bg-white hover:text-black transition-colors duration-500 border-x border-b border-black cursor-default' 
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
					className='text-gray-700 w-full text-left hover:text-gray-950 cursor-pointer py-2.5 px-5 text-lg text-smallBold hover:bg-white-300'
				>
					<button
						className='flex gap-3 items-center'
						onClick={() => {
							onClick(item.href, item.handlerClick); // Usar onClick para manejar el clic
							setIsOpen(false); // Cierra el menú desplegable
						}}
					>
						{item.icon && <item.icon />}
						<span className='text-nowrap'>{item.title}</span>
					</button>
				</div>
			))}
		</motion.div>
	);
}
