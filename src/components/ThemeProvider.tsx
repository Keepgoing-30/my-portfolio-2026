'use client';

import Image from 'next/image';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// --- 1. Theme Provider (Wrapper) ---
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider attribute='data-theme' defaultTheme='system' enableSystem>
			{children}
		</NextThemesProvider>
	);
}

// --- 2. Theme Change Button (Component) ---
export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure that rendering is done only on the client side to avoid Hydration errors.
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className='h-10 w-14' />; // Reservation space for the button to prevent layout shift during hydration.
	}

	return (
		<div className='flex items-baseline'>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className='flex h-10 w-14 items-center justify-center rounded-full 
               dark:bg-foreground/50 shadow-md 
               transition-all duration-300 hover:scale-110 active:scale-95 
               border border-gray-400/40 dark:border-white"
    aria-label="Toggle dark mode'
				aria-label='Toggle dark mode'
			>
				{mounted &&
					(theme === 'dark' ? (
						/* Icon Moon - rotates to 0 degree in Dark Mode */
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='text-yellow-300 transition-transform duration-500 ease-in-out rotate-0'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z' />
						</svg>
					) : (
						/* Icon Sun - rotates 360 degree in Light Mode */
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='text-orange-500 transition-transform duration-500 ease-in-out rotate-360'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z' />
							<path d='M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z' />
							<path d='M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z' />
							<path d='M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z' />
							<path d='M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z' />
							<path d='M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z' />
							<path d='M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z' />
							<path d='M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z' />
							<path d='M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
						</svg>
					))}
			</button>
		</div>
	);
}
