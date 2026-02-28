'use client';
import { motion } from 'motion/react';

import Image from 'next/image';

interface Project {
	image: string;
	name: string;
	details: string;
	link: string;
}

const projects: Project[] = [
	{
		image: '/eve.webp',
		name: 'Event Listener',
		details: 'Dynamic dashboard for real-time DOM updates and event-driven state management.',
		link: 'https://github.com/Keepgoing-30/Interactive-DOM-Project.git',
	},
	{
		image: '/grid.webp',
		name: 'Interactive Uses Section',
		details: 'Dynamic React interface focused on event-driven state management and optimized DOM manipulation.',
		link: 'https://github.com/Keepgoing-30/user-section.git',
	},
	{
		image: '/menu.webp',
		name: 'Dropdown Menu',
		details: 'Dynamic React dropdown featuring scalable data mapping and sleek UI.',
		link: 'https://github.com/Keepgoing-30/drop-down-menu.git',
	},
	{
		image: '/cer.webp',
		name: 'Certification Carousel',
		details:
			'Interactive React carousel showcasing professional UI/UX certifications with responsive design and smooth navigation.',
		link: 'https://github.com/Keepgoing-30/Portfolioweb.git',
	},
	{
		image: '/slide.webp',
		name: 'Burger Menu',
		details: 'Interactive React burger menu with smooth animations and responsive design for seamless navigation.',
		link: 'https://github.com/Keepgoing-30/Portfolioweb.git',
	},
	{
		image: '/menubar.webp',
		name: 'Menu Bar',
		details: 'Interactive React menu bar with responsive design and smooth animations.',
		link: 'https://github.com/Keepgoing-30/menu-bar.git',
	},
];

export default function ProjectCard() {
	return (
		<div className='grid grid-cols-1 w-full gap-3 sm:grid-cols-2 lg:grid-cols-3'>
			{projects.map((project, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className='flex flex-col gap-2'
				>
					<div className='flex flex-col gap-4 items-center'>
						{/* image container */}
						<div
							className='relative overflow-hidden w-full h-72 border-8 border-white/5 bg-white/1 shadow-sm 
													transition-transform duration-500 ease-out hover:scale-105 will-change-transform 
													hover:ring-1 hover:ring-teal-500 rounded-2xl'
						>
							<a href={project.link} target='_blank' rel='noopener noreferrer' className='block h-full w-full'>
								<Image
									src={project.image}
									alt={project.name}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover object-top rounded-xl'
									quality={100} // Ép Next.js nén ở chất lượng cao nhất (mặc định là 75)
								/>
							</a>
						</div>

						{/* Name */}
						<h3 className='text-[20px] font-bold text-foreground text-center leading-5 font-sans antialiased'>
							{project.name}
						</h3>

						{/* Details */}
						<p className='text-[16px] font-light text-foreground text-center leading-7 font-sans antialiased'>
							{project.details}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
