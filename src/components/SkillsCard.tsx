'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

interface Skill {
	name: string;
	level: number; // 0-100
	icon: string;
}

const skills: Skill[] = [
	{
		name: 'HTML',
		level: 80,
		icon: '/html.svg',
	},
	{
		name: 'CSS',
		level: 95,
		icon: '/css.svg',
	},
	{
		name: 'JavaScript',
		level: 80,
		icon: '/js.svg',
	},
	{
		name: 'Typescript',
		level: 90,
		icon: '/ts.svg',
	},
	{
		name: 'Java',
		level: 85,
		icon: '/java.svg',
	},
	{
		name: 'Python',
		level: 75,
		icon: '/py.svg',
	},
	{
		name: 'Next.js',
		level: 87,
		icon: '/next.svg',
	},
	{
		name: 'Node.js',
		level: 65,
		icon: '/node.svg',
	},
	{
		name: 'Tailwind CSS',
		level: 87,
		icon: '/tailwind.svg',
	},
	{
		name: 'API',
		level: 85,
		icon: '/api.svg',
	},
	{
		name: 'AI foundamental',
		level: 70,
		icon: '/ai.svg',
	},
];

export function SkillsCard() {
	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
			<div className='w-full rounded-2xl border border-foreground/20 p-6 bg-white/1'>
				{/* Header stay still */}
				<div className='flex items-center gap-3 mb-4'>
					<svg className='w-6 h-6 text-foreground/70' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
						/>
					</svg>
					<h3 className='text-md font-semibold text-foreground'>Skill</h3>
				</div>

				{/* Description - stay still */}
				<p className='text-foreground/70 text-base font-normal font-sans text-left leading-7 tracking-normal mb-6'>
					Leveraging my experience from diverse projects, I have built a strong technical foundation in:
				</p>

				{/* Scrollable Area */}
				<div className='space-y-5 max-h-75 overflow-y-auto pr-2 custom-scrollbar'>
					{skills.map((skill, index) => (
						<div key={index} className='flex items-center gap-4'>
							{/* Skill Icon */}
							<div className='w-12 h-12 shrink-0 rounded-full border border-foreground/20 bg-foreground/10 shadow-sm flex items-center justify-center overflow-hidden'>
								<Image src={skill.icon} alt={skill.name} width={30} height={30} className='object-contain' />
							</div>

							{/* Skill Info */}
							<div className='flex-1 min-w-0'>
								<h4 className='text-sm font-medium text-foreground/70 mb-1'>{skill.name}</h4>
								<div className='w-full h-4 bg-foreground/30 overflow-hidden'>
									<div
										className='h-full transition-all duration-500'
										style={{
											width: `${skill.level}%`,
											backgroundColor: '#0E766E',
										}}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
