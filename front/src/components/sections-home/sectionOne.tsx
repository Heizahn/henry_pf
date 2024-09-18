'use client';

import { useTransform, motion } from 'framer-motion';

export default function SectionOne({ scrollYProgress }) {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

	return (
		<motion.div
			style={{ scale, rotate }}
			className='sticky top-[10vh] h-[90vh] bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white -z-10'
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
