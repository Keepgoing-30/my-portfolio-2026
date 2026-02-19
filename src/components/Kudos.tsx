'use client';
import { motion } from 'motion/react';

import Image from 'next/image';

interface Kudos {
	logo: string;
	name: string;
	details: string;
	link: string;
	title?: string;
}

const kudos: Kudos[] = [
	{
		name: 'Spencer Ingley',
		title: 'Associate Professor of Biology, Co-Director, Edward D. Smith Center for Learning & Teaching, BYU - Hawaii',
		details:
			'I had the pleasure of having Michael work as my research assistant on the BYU-Hawaii habitat restoration project. Michael was incredibly capable, creative, and innovative. He brought in a wealth of skills and abilities that accelerated the work that we were doing. Michael worked well in a diverse team environment, and we miss him and his contributions greatly.',
		logo: './ingley.webp',
		link: 'https://www.linkedin.com/in/spencer-ingley-28394954/',
	},
	{
		name: 'Shinehah Remion',
		title: 'Business Management in HR and Marketing-BYUH',
		details:
			"Working with Michael, I observed a rare combination of efficiency and deep observation. He didn't just work fast; he improved how we worked by identifying and solving process bottlenecks that caused team fatigue. His natural inclination toward analyzing systems and solving real-world problems makes him a valuable asset to any technical team. He is a focused, consistent, and highly capable problem solver.",
		logo: './shine.webp',
		link: 'https://www.linkedin.com/in/shinehah-remion/',
	},
	{
		name: 'Lewis Hassell',
		title: 'Professor of Pathology at University of Oklahoma Health Sciences Center',
		details:
			'In working with Micheal when he was a volunteer in Vietnam, I found him to be a very dedicated hard worker. He managed complex issues with many types of people quite well and yet also remained focused on his core purposes. He is very even tempered and was never frustrated, despite some very challenging co-workers.',
		logo: './hussel.webp',
		link: 'https://www.linkedin.com/in/lewis-hassell-6898966/',
	},
	{
		name: 'Julius Such',
		title: 'The former supervisor at the Polynesian Cultural Center-Hawaii',
		details:
			'I am Julius Such, former supervisor of Michael Bui at the Polynesian Cultural Center on the Smoothie Team. During a challenging period when the position had high turnover, Michael consistently stepped up, improved our work processes, and helped make the team more efficient. He was also a great teammate who contributed to a positive work environment.',
		logo: './julius.webp',
		link: 'https://www.linkedin.com/in/julius-such-060a091b5/',
	},
	{
		name: 'Caitlin Alder-Escabarte',
		title: 'Master of Marine Biology student at James Cook University - Coral Reef Sciences',
		details:
			'Michael was a consistently hardworking and reliable coworker who always completed tasks efficiently and to a high standard. During our time working together in Hawaii, he was patient and instructive, often taking the time to teach me tasks I was unfamiliar with and ensuring the work was done correctly. Michael not only met expectations but exceeded them, making him a valuable and dependable member of our team.',
		logo: './caitlin.webp',
		link: 'https://www.linkedin.com/in/caitlin-alder/',
	},
	{
		name: 'Thummim Fay Dollete',
		title: 'Ecological Restoration Supervisor & Conservation Research Assistant-BYU-Hawaii',
		details:
			'I had the opportunity to work with him in Hawaii, and he consistently demonstrated exceptional work ethic and initiative. He is highly resourceful, able to navigate challenges independently while still being a reliable and collaborative team member. His ability to problem-solve under pressure truly sets him apart.',
		logo: './thummim.webp',
		link: 'https://www.linkedin.com/in/thummimdollete/',
	},
];

export default function KudosCard() {
	return (
		<div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 md:mt-10'>
			{kudos.map((kudos, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className='flex flex-col'
				>
					<div
						key={index}
						className='flex flex-col h-full w-full items-start rounded-2xl bg-linear-to-br from-cyan-500/3 via-blue-500/1 to-transparent 
									backdrop-blur-xl border border-gray-300 dark:border-white/20 shadow-inner
									transition-all duration-500 ease-out will-change-transform 
									hover:scale-[1.02] hover:ring-1 hover:ring-teal-500/50 px-6 py-6'
					>
						{/* Frame */}
						<div
							className='relative flex h-17 w-17 items-baseline-safe rounded-full border border-sky-500 bg-blue/[0.5] 
										transition-colors duration-300 ease-out hover:bg-sky-500/80 mb-4'
						>
							<Image
								src='/linkedinicon.webp'
								alt='Icon'
								width={100}
								height={100}
								className='absolute bottom-0 left-13 h-8 w-8 rounded-full z-10'
							/>
							<a
								href={kudos.link}
								target='_blank'
								rel='noopener noreferrer'
								className='flex h-full w-full justify-center p-0.5 transition-colors duration-300 ease-out'
							>
								<Image
									src={kudos.logo}
									alt={kudos.name}
									width={100}
									height={100}
									className='max-h-full max-w-full object-container rounded-full'
									unoptimized
								/>
							</a>
						</div>
						{/* Name */}
						<h3 className='text-base font-semibold text-foreground mb-1'>{kudos.name}</h3>
						{/* Title */}
						<h4 className='text-[13px] font-light leading-5 font-sans antialiased text-sky-500 mb-6'>{kudos.title}</h4>

						{/* Details */}
						<p className='text-[13px] font-light text-foreground pl-4 border-l-2 border-sky-500 ml-2 leading-5 font-sans antialiased'>
							{kudos.details}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
