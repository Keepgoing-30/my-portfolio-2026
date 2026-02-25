'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// 1. Array of link data
const navLinks = [
	{ href: '/projects', label: 'Wireframe' },
	{ href: '/projects/project', label: 'Project' },
];

type NavbarItemProps = {
	path: string;
	children: React.ReactNode;
};

// 2. Component for each item on the Desktop
function NavbarItem({ children, path }: NavbarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === path;

	return (
		<li
			className={`relative cursor-pointer px-4 py-2 font-medium text-sm leading-6 transition-colors duration-200 ${
				isActive ? 'text-teal-500' : 'text-foreground hover:text-teal-500'
			}`}
		>
			<Link href={path} className='outline-none block'>
				{children}
			</Link>

			{isActive && (
				<div className='absolute inset-y-1 left-0'>
					<div
						className='z-0 h-8 w-0.5'
						style={{
							background: 'linear-gradient(to bottom, transparent, oklch(70.4% 0.14 182.503), transparent)',
							boxShadow: '-2px 0 12px oklch(70.4% 0.14 182.503)',
						}}
					></div>
				</div>
			)}
		</li>
	);
}

// 3. Primary Component
export function ProjectNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Find the current page name to display on the Menu button.
	const currentLabel = navLinks.find((link) => link.href === pathname)?.label;

	return (
		<nav className='relative'>
			{/* VIEW DESKTOP */}
			<ul className='h-10 md:h-20 flex flex-row md:flex-col px-25 md:5 -mt-17 md:mt-0 items-justify'>
				{navLinks.map((link) => (
					<NavbarItem key={link.href} path={link.href}>
						{link.label}
					</NavbarItem>
				))}
			</ul>
		</nav>
	);
}
