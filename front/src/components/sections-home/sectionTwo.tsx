'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';
import PalyStoreIcon from '/public/assets/playStore.svg';
import ImagenRef from '/public/assets/Frame62.png';
import Image from 'next/image';

export default function SectionTwo({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
	const rotate = useTransform(scrollYProgress, [0, 1], [6, 0]);

	return (
		<motion.div
			style={{ scale, rotate }}
			className='h-[90vh] sticky text-[3.5vw] flex flex-col items-center justify-center '
		>
			<div className='h-[85vh] w-11/12 shadow-xl shadow-gray-400 rounded-2xl grid grid-cols-6 place-content-center px-12 bg-white '>
				<div className='col-span-4 flex flex-col justify-center items-start'>
					<h2 className=' text-4xl font-bold text-start'>
						Lee cuando y donde quieras.
					</h2>

					<div className='w-96 mt-3'>
						<h4 className='font-normal text-start text-2xl'>
							Disfruta de la lectura en cualquier dispositivo, ya sea en tu
							teléfono, tablet o computadora.
						</h4>
					</div>

					<button
						className='mt-9 flex items-center justify-start gap-6 group'
						type='button'
					>
						<span className='bg-yellow-300 text-black/95 font-bold text-sm px-8 py-3 rounded-lg group-hover:bg-yellow-400 group-active:shadow-inner-black transition-all duration-100'>
							Descarga la app
						</span>
						<div>
							<PalyStoreIcon />
						</div>
					</button>
				</div>

				<div className='w-full h-[564px] relative'>
					<div className='w-96 h-96 absolute bottom-20 right-0 bg-yellow-300 rounded-full'></div>
					<div className='absolute -right-44 top-24'>
						<Image src={ImagenRef} alt='' />
					</div>
				</div>
			</div>
		</motion.div>
	);
}
