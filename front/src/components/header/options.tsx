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
				className='absolute top-14 flex flex-col items-start border-black-700 border border-t-0 shadow-menu  cursor-default bg-white'
				initial={{ scaleY: 0, y: -50, x: 0, opacity: .2 }}
				animate={
					isOpen
						? {
								scaleY: 1,
								y: 0,
								opacity: 1,
								transition: { delay: 0.1, duration: 0.2 },
						  }
						: {
								scaleY: 0,
								y: -50,
								opacity: 0,
								transition: { delay: 0.0, duration: 0.2 },
						  }
				}
			>
				{options.map((item, key) => (
					<div
						key={key}
						className='w-full text-black-700 hover:text-black hover:bg-white-300 cursor-pointer transition-colors duration-100 text-smallBold p-6 py-4'
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
