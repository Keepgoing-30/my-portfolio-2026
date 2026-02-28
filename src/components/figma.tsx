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
		image: '/aboutpage.png',
		name: 'Portfolio About Page',
		details:
			'A minimalist, high-fidelity portfolio prototype designed in Figma. Focuses on seamless UX and a fully responsive layout for mobile and desktop.',
		link: 'https://www.figma.com/proto/PGmDY7TClAN01qgd6c9JY3/aboutpage?node-id=6-107&t=3NpGauILYV0FvNuG-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
	},
	{
		image: '/zaplinkapp.png',
		name: 'ZapLink',
		details:
			'ZapLink: A high-fidelity mobile prototype for seamless photo transfers between devices using Wi-Fi and Bluetooth.',
		link: 'https://www.figma.com/proto/Sg7QGEkh34yfwODLLZ3yqy/Zaplink-mobile-app-1.4.0--Copy-?node-id=120-37&t=hz8xfP3acmUdHmSH-1&scaling=scale-down&content-scaling=fixed&page-id=34%3A2510&starting-point-node-id=125%3A43&show-proto-sidebar=1',
	},
	{
		image: '/music.png',
		name: 'Ratany Music App',
		details: 'Ratany is a music app similar to Spotify, but it is specifically designed for Cambodian users.',
		link: 'https://www.figma.com/proto/Mxl0KSP6VokvvDERLEB7Fg/Ratany-Music-App?node-id=59-184&t=I8Qo4MqBLxRKVzCd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
	},
];

export default function FigmaCard() {
	return (
		<div className='grid grid-cols-1 w-full gap-5 sm:grid-cols-2 lg:grid-cols-3'>
			{figma.map((design, index) => (
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
							<a href={design.link} target='_blank' rel='noopener noreferrer' className='block h-full w-full'>
								<Image
									src={design.image}
									alt={design.name}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover object-top rounded-xl'
									quality={100} // Ép Next.js nén ở chất lượng cao nhất (mặc định là 75)
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
