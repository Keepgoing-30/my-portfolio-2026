'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// 1. Array of link data
const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/kudos', label: 'Kudos' },
];

type NavbarItemProps = {
	path: string;
	children: React.ReactNode;
};

// 2. Component for each item on the Desktop
function NavbarItem({ children, path }: NavbarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));

	return (
		<li
			className={`relative cursor-pointer px-3 py-2 font-medium text-sm leading-6 transition-colors duration-200 ${
				isActive ? 'text-teal-500' : 'text-foreground hover:text-teal-500'
			}`}
		>
			<Link href={path} className='outline-none'>
				{children}
			</Link>

			{isActive && (
				<div className='absolute inset-x-0 bottom-0 flex justify-center'>
					<div
						className='z-0 h-0.5 w-12.75'
						style={{
							background: 'linear-gradient(to right, transparent, oklch(70.4% 0.14 182.503), transparent)',
							boxShadow: '0 4px 12px oklch(70.4% 0.14 182.503)',
						}}
					></div>
				</div>
			)}
		</li>
	);
}

// 3. Primary Component
export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Find the current page name to display on the Menu button.
	const currentLabel = navLinks.find((link) => link.href === pathname)?.label || 'Projects';

	return (
		<nav className='relative h-15'>
			{/* VIEW DESKTOP */}
			<ul className='hidden h-10 w-full flex-row items-center gap-1 rounded-full border border-foreground/5 bg-background px-3 shadow-[0_10px_11px_-5px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] md:flex'>
				{navLinks.map((link) => (
					<NavbarItem key={link.href} path={link.href}>
						{link.label}
					</NavbarItem>
				))}
			</ul>

			{/* VIEW MOBILE */}
			<div className='mt-0 ml-39 flex flex-col items-end md:hidden'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='group h-10 flex items-center gap-2 rounded-full border border-foreground/20 bg-background/20 px-4 py-2 font-medium text-foreground text-sm shadow-[0_10px_11px_-5px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] ring-background'
				>
					{currentLabel}
					<svg
						viewBox='0 0 8 6'
						aria-hidden='true'
						className={`h-auto w-2 stroke-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
					>
						<path d='M1.75 1.75 4 4.25l2.25-2.5' fill='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
				</button>

				{/* (Dropdown) */}
				{isOpen && (
					<>
						{/* The overlay that is pressed to exit closes the menu. */}
						<div className='fixed inset-0 z-40' onClick={() => setIsOpen(false)}></div>

						<ul className='fade-in zoom-in-95 absolute top-px right-[-60] z-50 mt-[-2] w-90 animate-in overflow-hidden rounded-2xl border border-foreground/10 bg-background p-1 shadow-lg ring-1 ring-zinc-900/5 duration-200'>
							<div className='relative px-3 pt-3 pb-4 text-base text-foreground'>Navigation</div>
							{navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)}
										className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
											pathname === link.href
												? 'bg-zinc-50 text-teal-500'
												: 'text-foreground hover:bg-zinc-50 hover:text-teal-500'
										}`}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</nav>
	);
}
