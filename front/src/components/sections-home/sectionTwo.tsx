'use client';

import { useTransform, motion } from 'framer-motion';

export default function SectionTwo({ scrollYProgress }) {
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

	return (
		<motion.div
			style={{ scale, rotate }}
			className='h-[90vh] bg-[#2659c7] text-[3.5vw] flex flex-col items-center justify-center text-white'
		>
			<p>Scroll Perspective</p>

			<div className='flex gap-4'>
				<p>Section</p>

				<div className='relative w-[12.5vw]'></div>

				<p>Transition</p>
			</div>
		</motion.div>
	);
}
