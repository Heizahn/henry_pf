'use client';

import { useEffect, useRef } from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

export default function Sections() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<div ref={containerRef} className='relative h-[180vh]'>
			<SectionOne scrollYProgress={scrollYProgress} />
			<SectionTwo scrollYProgress={scrollYProgress} />
		</div>
	);
}
