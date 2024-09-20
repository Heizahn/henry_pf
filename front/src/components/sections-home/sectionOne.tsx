'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';
import GoTo from '/public/assets/Go To.svg';

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
			className='sticky top-[10vh] h-[90vh] flex flex-col justify-center items-center'
		>
			<div className='h-[80vh] flex flex-col justify-center rounded-2xl shadow-xl shadow-gray-400 '>
				<h1 className=' text-[64px] font-bold text-center [&>span]:text-blue-600 '>
					<span>Lee</span>, <span>comparte</span> y <span>descubre</span> en un
					espacio creado para <span>tí</span>
				</h1>
				<div className='w-[600px] mx-auto mt-10'>
					<p className='font-normal text-center text-base'>
						Accede a miles de libros, únete a debates literarios y forma parte de
						una red de una comunidad que transforma la lectura en una experiencia
						única.
					</p>
				</div>

				<div className='mt-10 flex flex-col gap-4 items-center'>
					<button
						type='button'
						className='bg-blue-600 text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-700 active:shadow-inner-black transition-shadow duration-100'
						onClick={() => alert('Coming soon')}
					>
						Comienza aquí
					</button>
					<p className='text-base'>
						¿Ya tiene cuenta?{' '}
						<button
							type='button'
							className='bg-transparent text-blue-950'
							onClick={() => alert('Coming soon')}
						>
							Ingresa aquí!
						</button>
					</p>
				</div>

				<div className='flex justify-center mt-20 mb-12'>
					<button type='button' className='w-8 h-8'>
						<GoTo />
					</button>
				</div>
			</div>
		</motion.div>
	);
}
