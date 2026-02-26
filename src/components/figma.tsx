'use client';
import { motion } from 'motion/react';

import Image from 'next/image';

interface Design {
	image: string;
	name: string;
	details: string;
	link: string;
}
const figma: Design[] = [
	{
		image: '/mdev.svg',
		name: 'MDEV Home Page',
		details: 'This is the prototype of the home page of a Web Developer company designed using Adobe Illustrator and Figma.',
		link: 'https://www.figma.com/proto/FT6xAZAFmdkq5mwkfzi2rB/Untitled?node-id=2-528&t=OVLMrArndhoT5SUp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
	},
	{
		image: '/aboutpage.svg',
		name: 'Portfolio About Page',
		details: 'A development-ready, high-fidelity portfolio prototype designed in Figma. This project explores the intersection of clean UI design and functional UX, tailored for a modern software engineering showcase.',
		link: 'https://www.figma.com/proto/PGmDY7TClAN01qgd6c9JY3/aboutpage?node-id=6-107&t=3NpGauILYV0FvNuG-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
	},
	{
		image: '/zaplink.svg',
		name: 'ZapLink',
		details:'ZapLink: A high-fidelity mobile prototype for seamless photo transfers between devices using Wi-Fi and Bluetooth.',
		link: 'https://www.figma.com/proto/Sg7QGEkh34yfwODLLZ3yqy/Zaplink-mobile-app-1.4.0--Copy-?node-id=120-37&t=hz8xfP3acmUdHmSH-1&scaling=scale-down&content-scaling=fixed&page-id=34%3A2510&starting-point-node-id=125%3A43&show-proto-sidebar=1',
	},
];

export default function FigmaCard() {
	return (
		<div className='grid grid-cols-1 w-full gap-10 sm:grid-cols-2 lg:grid-cols-3'>
			{figma.map((design, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className='flex flex-col gap-2'
				>
					<div key={index} className='flex flex-col gap-4 items-center'>
						{/* image */}
						<div
							className='flex h-fit w-fit items-center border border-foreground/10 bg-white/1 shadow-sm 
                transition-transform duration-500 ease-out hover:scale-105 will-change-transform hover:ring-1 hover:ring-teal-500 rounded-2xl'
						>
							<a href={design.link} target='_blank' rel='noopener noreferrer' className='flex h-full w-full'>
								<Image
									src={design.image}
									alt={design.name}
									width={290}
									height={100}
									className='max-h-full max-w-full object-contain rounded-2xl'
									unoptimized
								/>
							</a>
						</div>

						{/* Name */}
						<h3 className='text-[20px] font-bold text-foreground text-center leading-5 font-sans antialiased'>{design.name}</h3>

						{/* Details */}
						<p className='text-[16px] font-light text-foreground text-center leading-7 font-sans antialiased'>
							{design.details}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
