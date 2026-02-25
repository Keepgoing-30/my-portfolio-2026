'use client';

import { motion } from 'motion/react';
import { ArticleCard } from '@/components/ArticleCard';
import { HeroSection } from '@/components/HeroSection';
import { NewsletterCard } from '@/components/NewsletterCard';
import { SkillsCard } from '@/components/SkillsCard';
import { WorkCard } from '@/components/WorkCard';

export default function Home() {
	return (
		<main className='w-full max-w-7xl mx-auto md:pt-8'>
			{/* Main Content Grid */}
			<div className='mb-12 md:mb-6 md:hidden'>
				<HeroSection />
			</div>
			<div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
				{/* Left Column - Articles */}
				<div className='order-2 flex-1 lg:order-1'>
					{/* Hero Section */}
					<div className='mb-12 md:mb-6 hidden md:block'>
						<HeroSection />
					</div>
					<div className='space-y-0'>
						<ArticleCard
							date='December 23, 2025'
							title='Building a Secure Guessing Game in Python'
							excerpt='In my journey as a Software Engineering student at Ensign College, I believe that even the simplest projects are opportunities to implement best practices. This Python-based Number Guessing Game might...'
							href='https://impartial-comte-214.notion.site/Building-a-Secure-Guessing-Game-in-Python-Beyond-the-Basics-306893e71e73803cada5f904fef25625?pvs=143'
							target='_blank'
							rel='noopener noreferrer'
						/>
						<ArticleCard
							date='December 25, 2025'
							title='Mastering Personal Finance Logic: A Modular Python Approach'
							excerpt='In the world of Software Engineering, the ability to translate complex real-world logic—like tax brackets and discretionary income—into clean, reusable code is a vital skill. This project, developed during my studies at Ensign College...'
							href='https://impartial-comte-214.notion.site/Mastering-Personal-Finance-Logic-A-Modular-Python-Approach-306893e71e73800c9e00fe3407f05ef0?pvs=143'
							target='_blank'
							rel='noopener noreferrer'
						/>
						<ArticleCard
							date='December 25, 2025'
							title='Python SQLite Wrapper: Automated DB Management for Beginners'
							excerpt='A deep dive into building a dynamic SQL generator in Python. This project automates CRUD operations and ensures secure data handling using SQLite3...'
							href='https://impartial-comte-214.notion.site/Simplifying-Database-Management-with-Python-and-SQLite-306893e71e7380c1becee7853cdef164?pvs=143'
							target='_blank'
							rel='noopener noreferrer'
						/>
					</div>
				</div>

				{/* Right Column - Sidebar */}
				<div className='order-1 mb-4 w-full shrink-0 lg:order-2 lg:w-92'>
					<div className='space-y-6'>
						<NewsletterCard />
						<WorkCard />
						<SkillsCard />
					</div>
				</div>
			</div>
		</main>
	);
}
