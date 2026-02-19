import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Navbar } from '@/components/Navbar';
import './globals.css';
import Image from 'next/image';

import { Footer } from '@/components/Footer';
import { ThemeProvider, ThemeToggle } from '@/components/ThemeProvider';
import { Whatsapp } from '@/components/whatsapp';

const robotoSans = Roboto({
	variable: '--font-roboto-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Michael Ui & Dev',
	description: 'Portfolio, Dev, UX/UI, Code, Websidte, Programming',
	icons: '/bee.webp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${robotoSans.variable} bg-background font-sans antialiased`}>
				<ThemeProvider>
					<div className='flex min-h-screen flex-col'>
						<header className='fixed z-60 mx-auto h-22 w-full backdrop-blur-md md:h-18 md:w-full md:px-20'>
							<div className='mx-auto flex h-22 w-full flex-row items-start justify-between px-4 py-6 md:h-18 md:max-w-7xl md:px-24 md:pt-5 md:pb-5'>
								{/* Left box - Logo */}
								<div className='hidden md:block md:h-10 md:w-12'>{/* place a Logo here! */}</div>

								<div className='h-10 w-10 md:hidden'></div>

								{/* Navigation bar */}
								<nav className='flex md:items-center md:justify-center md:overflow-hidden'>
									<Navbar />
								</nav>

								{/* Light button */}

								<ThemeToggle />
							</div>
						</header>

						{/* Main Content */}
						<main className='flex-1 pt-24 md:pt-28'>
							<div className='mx-auto max-w-7xl px-6 md:px-20'>{children}</div>
						</main>

						<div className='mx-auto max-w-7xl px-6 md:px-20'>
							<Whatsapp />
						</div>

						{/* Footer */}
						<footer className='w-full'>
							<div>
								<Footer />
							</div>
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
