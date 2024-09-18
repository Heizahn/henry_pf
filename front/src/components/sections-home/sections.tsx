'use client';

import { useEffect, useRef } from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

export default function Sections() {
	const containerRef = useRef();
	const { scrollYProgress } = useScroll({
		target: containerRef.current,
		offset: ['start start', 'end end'],
	});

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<main ref={containerRef} className='relative h-[180vh]'>
			<SectionOne scrollYProgress={scrollYProgress} />
			<SectionTwo scrollYProgress={scrollYProgress} />
		</main>
	);
}
