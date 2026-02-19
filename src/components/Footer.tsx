'use client';

import Link from 'next/link';

export function Footer() {
	return (
		<footer className='max-h-fit w-full bg-background'>
			<div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-36'>
				{/* Navigation Links */}
				<nav className='flex flex-wrap justify-center gap-6'>
					<Link href='/' className='hover:foreground/20 font-medium text-foreground text-sm transition-colors'>
						Home
					</Link>
					<Link href='/about' className='font-medium text-foreground text-sm transition-colors hover:text-foreground/20'>
						About
					</Link>
					<Link href='/projects' className='font-medium text-foreground text-sm transition-colors hover:text-foreground/20'>
						Projects
					</Link>
					<Link href='/kudos' className='font-medium text-foreground text-sm transition-colors hover:text-foreground/20'>
						Kudos
					</Link>
				</nav>

				{/* Copyright */}
				<p className='text-foreground/50 text-sm'>© 2026 Michael Bui. All rights reserved.</p>
			</div>
		</footer>
	);
}

Footer.displayName = 'Footer';
