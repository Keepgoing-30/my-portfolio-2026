'use client';
import ProjectCard from '@/components/projectcard';
import { motion } from 'motion/react';

export default function ProjectsPage() {
	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
			<main className='mx-auto h-fit w-full max-w-7xl '>
				<h1 className='mb-8 text-center font-bold text-[31px] text-foreground leading-10 tracking-normal md:text-[2.75rem]'>
					Where ideas take shape in code
				</h1>

				<p className='text-foreground/70 text-base font-normal font-sans text-center leading-7 tracking-normal mb-11'>
					Explore a diverse range of projects showcasing my work in UI design, web development, and system logic. Built with
					modern technologies and a focus on maintainable, high-quality code.
				</p>
				<ProjectCard />
			</main>
		</motion.div>
	);
}
