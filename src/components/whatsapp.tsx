'use client';
import Image from 'next/image';

export function Whatsapp() {
	const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

	const handleChat = () => {
		// Current time in Utah
		const utahTime = new Intl.DateTimeFormat('en-US', {
			timeZone: 'America/Denver',
			hour: 'numeric',
			hour12: false,
		}).format(new Date());

		const hour = parseInt(utahTime);

		// Set a custom message based on the time of day in Utah
		let customMessage = '';
		if (hour >= 22 || hour < 8) {
			// Message at night time in Utah
			customMessage = "Hi Michael, I know it's late in Utah, but I wanted to leave a message regarding...";
		} else {
			// Message during the day in Utah
			customMessage = 'Hello Michael, I saw your portfolio and would like to chat about...';
		}

		const url = `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	return (
		<button
			onClick={handleChat}
			className='group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95'
		>
			{/* Tooltip shows up while hovering */}
			<span className='absolute right-16 scale-0 rounded bg-slate-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap'>
				Chat with me!
			</span>

			<Image
				src='/whatdark.webp'
				alt='WhatsApp'
				width={75}
				height={75}
				className='bg-white rounded-full border-2 border-white'
			/>
			<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-black dark:bg-gray-200 opacity-20'></span>
		</button>
	);
}
