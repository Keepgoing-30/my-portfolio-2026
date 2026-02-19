'use client';

// biome-ignore assist/source/organizeImports: <explanation>
import type React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

interface ArticleCardProps {
	date: string;
	title: string;
	excerpt: string;
	href?: string;
	target?: string;
	rel?: string;
	index?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, excerpt, href = '#', target, rel, index = 0 }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 1,
				delay: index * 0.15,
			}}
		>
			<article className='relative mb-6 md:py-5 md:pl-0'>
				{/* Date */}
				<time className='mb-3 flex items-center gap-3 font-normal text-foreground/70 text-sm underline decoration-background underline-offset-2 md:no-underline'>
					<span className='inline-block h-5 w-0.75 shrink-0 rounded-full bg-foreground/20 dark:bg-foreground/30' />
					{date}
				</time>

				{/* Title */}
				<h2 className='mb-3 font-semibold text-base text-foreground leading-tight'>{title}</h2>

				{/* Excerpt */}
				<p className='text-foreground/70 text-base font-normal font-sans text-left leading-7 tracking-normal pb-6'>{excerpt}</p>

				{/* Read More Link */}
				<Link
					href={href}
					target={target}
					rel={rel}
					className='group inline-flex items-center gap-2 font-medium text-sm text-teal-500 transition-colors hover:scale-120'
				>
					Read article
					<svg
						className='h-4 w-4 transition-transform group-hover:translate-x-1'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
					</svg>
				</Link>
			</article>
		</motion.div>
	);
};
