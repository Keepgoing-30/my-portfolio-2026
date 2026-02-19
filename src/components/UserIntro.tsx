'use client';
import { motion } from 'motion/react';
export default function UserIntro() {
	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
			<div className='mx-auto h-full w-full max-w-98 bg-background md:max-w-193'>
				<h1 className='text-center font-bold font-sans text-[31px] leading-10 md:text-5xl text-foreground md:leading-14 tracking-[-0.01em] mb-7'>
					Testimonials
				</h1>
				<div className='h-fit w-full'>
					<p className='text-foreground/70 text-base font-normal font-sans text-center leading-7 tracking-normal'>
						Here are testimonials from colleagues and mentors who have worked with me across various projects and companies.
						They witnessed my analytical thinking, discipline, and commitment—qualities I now bring to software engineering.
					</p>
				</div>
			</div>
		</motion.div>
	);
}
