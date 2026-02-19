'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
			<div className='max-w-98 md:max-w-4xl w-full h-full opacity-100 bg-background'>
				<img className='w-16 h-16 rounded-full border-white border-2 mb-6' src='/nen.webp' alt='Author' />
				<h1 className='text-left font-bold font-sans text-[31px] leading-10 md:text-5xl text-foreground md:leading-14 tracking-[-0.01em] mb-7 md:mb-10'>
					Hi, this is Michael Bui, a software engineer, and a designer
				</h1>
				<div className='w-full h-full'>
					<p className='text-foreground/70 text-base font-normal font-sans text-left leading-7 tracking-normal'>
						I build products with a focus on <b className='text-foreground/80'>clean code</b> and high-fidelity design. As a
						Full-Stack Developer with a strong interest in UI, I thrive on creating seamless user experiences through
						maintainable architecture and <b className='text-foreground/80'>pixel-perfect</b> execution.
						{/* Break paragraph on mobile, but not on Desktop */}
						<br className='block md:hidden' />
						<br className='block md:hidden' />I enjoy the end-to-end process of product development, ensuring that every
						solution is as functional as it is beautiful. I always{' '}
						<b className='text-foreground/80'>strive to learn new technologies</b> that push the boundaries of what's possible
						on the web.
					</p>
				</div>
				<div className='flex flex-row gap-3 w-35 h-6 rotate-0 opacity-100 mt-6'>
					<a
						href='https://www.linkedin.com/feed/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:scale-130 transition-transform'
					>
						<img className='w-5 h-5' src='/linkedin.svg' alt='Linkedin' />
					</a>
					<a href='mailto:michaeluidev@proton.me' className='hover:scale-130 transition-transform'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 4 24 24'
							fill='none'
							stroke='gray'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='h-6 w-6'
						>
							<rect width='21' height='18' x='1' y='5' rx='3' />
							<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
						</svg>
					</a>
					<a
						href='https://github.com/Keepgoing-30'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:scale-130 transition-transform'
					>
						<img className='w-5 h-5' src='/git.svg' alt='GitHub' />
					</a>
				</div>
			</div>
		</motion.div>
	);
}
