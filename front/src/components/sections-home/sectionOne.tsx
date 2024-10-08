'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';
import GoTo from '/public/assets/Goto.svg';
import Link from 'next/link';

export default function SectionOne({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

	return (
		<motion.div
			style={{ scale, rotate }}
			className='h-[90vh] sticky top-[10vh] flex flex-col items-center justify-center'
		>
			<div className='w-full h-[80vh] flex flex-col text-center p-32 justify-center rounded-2xl shadow-xl shadow-gray-400 m-4 my-0 '>
				<h1 className=' text-5xl w-[900px] mx-auto font-bold text-center [&>span]:text-blue mt-12 '>
					<span>Lee</span>, <span>comparte</span> y <span>descubre</span> en un
					espacio creado para <span>tí</span>
				</h1>
				<div className='w-[750px] mx-auto mt-10'>
					<p className=' text-center text-semiSmall bg-white'>
						Accede a miles de libros, únete a debates literarios y forma parte de
						una red de una comunidad que transforma la lectura en una experiencia
						única.
					</p>
				</div>

				<div className='mt-12 flex flex-col gap-4 items-center'>
					<button
						type='button'
						className='bg-blue text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-300 active:shadow-inner-black transition-shadow duration-100'
						onClick={() => alert('Coming soon')}
					>
						Comienza aquí
					</button>
					<p className='text-small'>
						¿Ya tiene cuenta?{' '}
						<button
							type='button'
							className='bg-transparent text-blue hover:underline'
							onClick={() => alert('Coming soon')}
						>
							Ingresa aquí!
						</button>
					</p>
				</div>

				<div className='flex justify-center mt-12 mb-12'>
					<Link href='#section-two' type='button' className='w-8 h-8'>
						<GoTo />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
