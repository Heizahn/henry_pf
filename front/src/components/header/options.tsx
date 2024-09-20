'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Login from '../login/login';
import Register from '../register/register';
import AnimationForm from '../animation/animationForm';

type Forms = {
	component: React.ReactNode;
};
export default function Options({
	options,
	isOpen,
	setIsOpen,
}: {
	options: string[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [showModal, setShowModal] = useState(false);
	const [keyForm, setKeyForm] = useState(0);

	const forms: Forms[] = [
		{
			component: (
				<AnimationForm
					title='Iniciar sesión'
					showModal={showModal}
					setShowModal={setShowModal}
				>
					<Login setKeyForm={setKeyForm} />
				</AnimationForm>
			),
		},
		{
			component: (
				<AnimationForm
					title='Crear cuenta'
					showModal={showModal}
					setShowModal={setShowModal}
				>
					<Register setKeyForm={setKeyForm} />
				</AnimationForm>
			),
		},
	];

	return (
		<>
			<motion.div
				className='absolute top-16 flex flex-col gap-1 items-center shadow-sm shadow-gray-400 rounded-sm px-5 pt-3 pb-5 bg-white'
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
						className='text-gray-700 hover:text-gray-950 cursor-pointer transition-colors duration-500 py-1 px-0.5 text-lg font-semibold '
					>
						<button
							key={key}
							onClick={() => {
								setKeyForm(key);
								setShowModal(true);
								setIsOpen(false);
							}}
						>
							{item}
						</button>
					</div>
				))}
			</motion.div>
			{showModal && <div>{forms[keyForm].component}</div>}
		</>
	);
}
