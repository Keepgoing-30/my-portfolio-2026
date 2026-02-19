'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function AboutPage() {
	return (
		<main className='mx-auto w-full max-w-7xl'>
			{/* Mobile: Photo on top */}
			<div className='mb-8 md:hidden'>
				<div className='relative aspect-4/5 w-full overflow-hidden rounded-2xl'>
					<Image src='/toi.jpg' alt='Profile photo' fill className='object-cover' priority />
				</div>
			</div>

			{/* Two-column layout */}
			<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
				<h1 className='text-left font-bold font-sans text-[31px] leading-10 md:text-5xl text-foreground md:leading-14 tracking-[-0.01em] mb-7 md:mb-10'>
					Building digital products with precision and purpose
				</h1>
			</motion.div>
			<div className='flex flex-col gap-5 md:flex-row md:gap-16'>
				{/* Left Column - Heading + Text */}
				<div className='flex-1'>
					<div className='text-foreground/70 text-base font-normal font-sans text-left leading-7 tracking-normal'>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<p className='text-base text-foreground/70 leading-7 tracking-normal'>
								I’m a Software Engineer who thrives at the intersection of design and engineering. I focus on building
								practical, maintainable solutions with a pixel-perfect touch. My approach is simple: define the problem clearly,
								grasp the big picture, and refine every detail.
							</p>
							<p className='text-base text-foreground/70 leading-7 tracking-normal pt-2'>
								{' '}
								My journey is a bit different. I transition into software engineering from a{' '}
								<b className='text-foreground/80'>background in Biology </b> Conservation. That field taught me the rigors of{' '}
								<b className='text-foreground/80'>research and deep analytical thinking</b>, which I now apply to architecting
								clean code and scalable systems.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<h3 className='text-lg font-semibold text-foreground mt-10'>Values & Work Ethic</h3>
							<p className='text-base text-foreground/70 leading-7 tracking-normal pt-2'>
								I approach every project with a <b className='text-foreground/80'>deep sense of ownership and reliability</b>.
								My focus is always on creating measurable impact—whether that’s by optimizing system efficiency or refining a UI
								for better accessibility. I thrive in
								<b className='text-foreground/80'> fast-paced, diverse teams</b> where clean code and scalable architecture are
								the priority.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<h3 className='text-lg font-semibold text-foreground mt-10'>Outside of Coding</h3>
							<p className='text-base text-foreground/70 leading-7 tracking-normal pt-2'>
								When I’m not at my desk, you’ll find me immersed in nature. Whether it’s hiking or snorkeling. I also have a
								passion for welding and building physical projects; I love the challenge of{' '}
								<b className='text-foreground/80'>bringing ideas to life</b>, whether I’m crafting digital interfaces or working
								with raw materials in the real world.
							</p>
							<p className='text-base text-foreground/70 leading-7 tracking-normal pt-2'>
								If you’re interested in working with me or learning more about my projects, feel free to contact me via Email or
								LinkedIn.
							</p>
						</motion.div>
					</div>
				</div>

				{/* Right Column - Photo (desktop) + Social Links */}
				<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
					<div className='w-full flex flex-col md:w-95'>
						{/* Desktop Photo */}
						<div className='mb-6 hidden md:block'>
							<div className='relative aspect-4/5 w-full overflow-hidden rounded-2xl'>
								<Image src='/toi.jpg' alt='Profile photo' fill className='object-cover' priority />
							</div>
						</div>

						{/* Social Links */}
						<div className='order-2 md:order-1 border-t border-muted-foreground/30 mt-3 md:mb-3' />
						<div className='space-y-4 order-2 mt-6 md:order-1'>
							<a
								href='https://www.linkedin.com/feed/'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground/20'
							>
								<img className='w-5 h-5' src='/linkedin.svg' alt='Linkedin' />
								<span>Follow me on LinkedIn</span>
							</a>
							<a
								href='https://github.com/Keepgoing-30'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground/20'
							>
								<img className='w-5 h-5' src='/git.svg' alt='GitHub' />
								<span>Follow me on Github</span>
							</a>

							{/* Email */}
							<a
								href='mailto:michaeluidev@proton.me'
								className='flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground/20'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='gray'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
								>
									<rect width='20' height='16' x='2' y='4' rx='2' />
									<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
								</svg>
								<span>michaeluidev@proton.me</span>
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
