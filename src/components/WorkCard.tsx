'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

interface WorkExperience {
	company: string;
	role: string;
	logo: string | React.ComponentType<{ className?: string }>;
	startYear: string;
	endYear: string;
}

const workExperiences: WorkExperience[] = [
	{
		company: 'BYU-Hawaii',
		role: '	BIOLOGY RESEARCH ASSISTANT',
		logo: '/byu.webp',
		startYear: '2024',
		endYear: '2025',
	},
	{
		company: 'BYU-Hawaii',
		role: 'IT OPERATIONS TECHNICIAN',
		logo: '/byu.webp',
		startYear: '2023',
		endYear: '2024',
	},
	{
		company: 'THANG MY',
		role: 'CUSTOMER SERVICE REPRESENTATIVE',
		logo: () => (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='40'
				height='40'
				viewBox='0 0 24 24'
				fill='none'
				stroke='WHITE'
				stroke-width='1'
				stroke-linecap='round'
				stroke-linejoin='round'
				className='icon icon-tabler icons-tabler-outline icon-tabler-brand-4chan bg-sky-800 rounded-full'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M14 11s6.054 -1.05 6 -4.5c-.038 -2.324 -2.485 -3.19 -3.016 -1.5c0 0 -.502 -2 -2.01 -2c-1.508 0 -2.984 3 -.974 8' />
				<path d='M13.98 11s6.075 -1.05 6.02 -4.5c-.038 -2.324 -2.493 -3.19 -3.025 -1.5c0 0 -.505 -2 -2.017 -2c-1.513 0 -3 3 -.977 8l-.001 0' />
				<path d='M13 13.98l.062 .309l.081 .35l.075 .29l.092 .328l.11 .358l.061 .188l.139 .392c.64 1.73 1.841 3.837 3.88 3.805c2.324 -.038 3.19 -2.493 1.5 -3.025l.148 -.045l.165 -.058a4.13 4.13 0 0 0 .098 -.039l.222 -.098c.586 -.28 1.367 -.832 1.367 -1.777c0 -1.513 -3 -3 -8 -.977' />
				<path d='M10.02 13l-.309 .062l-.35 .081l-.29 .075l-.328 .092l-.358 .11l-.188 .061l-.392 .139c-1.73 .64 -3.837 1.84 -3.805 3.88c.038 2.324 2.493 3.19 3.025 1.5l.045 .148l.058 .165l.039 .098l.098 .222c.28 .586 .832 1.367 1.777 1.367c1.513 0 3 -3 .977 -8' />
				<path d='M11 10.02l-.062 -.309l-.081 -.35l-.075 -.29l-.092 -.328l-.11 -.358l-.128 -.382l-.148 -.399c-.658 -1.687 -1.844 -3.634 -3.804 -3.604c-2.324 .038 -3.19 2.493 -1.5 3.025l-.148 .045l-.164 .058a4.13 4.13 0 0 0 -.1 .039l-.22 .098c-.588 .28 -1.368 .832 -1.368 1.777c0 1.513 3 3 8 .977' />
			</svg>
		),
		startYear: '2012',
		endYear: '2013',
	},
	{
		company: 'ANONE',
		role: 'MARKETING INTERN',
		logo: '/anone.webp',
		startYear: '2015',
		endYear: '2016',
	},
];

export function WorkCard() {
	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
			<div className='w-full rounded-2xl border border-foreground/20 bg-white/1 p-6'>
				{/* Header */}
				<div className='flex items-center gap-3 mb-4'>
					<svg className='w-6 h-6 text-foreground/70' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
						/>
					</svg>
					<h3 className='text-md font-semibold text-foreground'>Work</h3>
				</div>

				{/* Description */}
				<p className='text-foreground/70 text-base font-normal font-sans text-left leading-7 tracking-normal mb-6'>
					Through various roles across different companies, I have developed valuable professional experience:
				</p>

				{/* Work List */}
				<div className='space-y-4'>
					{workExperiences.map((work, index) => (
						<div key={index} className='flex items-center gap-4 '>
							{/* Company Logo */}
							<div className='w-12 h-12 py-1 rounded-full border border-foreground/20 bg-foreground/10 shadow-sm flex items-center justify-center overflow-hidden'>
								{typeof work.logo === 'string' ? (
									<Image src={work.logo} alt={work.company} width={35} height={35} className='object-contain' />
								) : (
									<work.logo className='w-8.75 h-8.75 object-contain' />
								)}
							</div>

							{/* Company Info */}
							<div className='flex-1 min-w-0'>
								<h4 className='text-sm font-medium text-foreground/70'>{work.company}</h4>
								<p className='text-[10px] text-foreground/70'>{work.role}</p>
							</div>

							{/* Date Range */}
							<span className='text-[10px] text-foreground/70 shrink-0'>
								{work.startYear} - {work.endYear}
							</span>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
