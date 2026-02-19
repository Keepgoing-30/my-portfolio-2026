'use client';
import { motion } from 'motion/react';
import { useState } from 'react';

export function NewsletterCard() {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('loading');

		// Send data to API created in src/app/api/newsletter/route.ts
		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				body: JSON.stringify({ email, firstName, lastName }),
				headers: { 'Content-Type': 'application/json' },
			});

			if (response.ok) {
				setStatus('success');
				setEmail('');
				setFirstName('');
				setLastName('');
			} else {
				setStatus('error');
			}
		} catch (err) {
			setStatus('error');
		}
	};

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
			<div className='w-full rounded-2xl border border-foreground/20 bg-white/1 p-6'>
				{/* Header */}
				<div className='flex items-center gap-3 mb-4'>
					<svg className='w-6 h-6 text-muted' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
						/>
					</svg>
					<h3 className='text-md font-semibold text-foreground'>Stay up to date</h3>
				</div>

				{/* Description */}
				<p className='text-foreground/70 text-base font-normal font-sans text-left leading-7 tracking-normal mb-6'>
					Get notified when I publish something new, and unsubscribe at any time.
				</p>

				{/* Form */}
				<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
					<div className='flex gap-2'>
						<input
							type='text'
							placeholder='First Name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							className='flex-1 w-1/2 rounded-lg border border-foreground/30 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
							required
						/>

						{/* Connect the Lastname box with state lastName */}
						<input
							type='text'
							placeholder='Last Name'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							className='flex-1 w-1/2 rounded-lg border border-foreground/30 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
							required
						/>
					</div>
					<input
						type='email'
						placeholder='Email address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='flex-1 rounded-lg border border-foreground/30 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
						required
					/>
					<button
						type='submit'
						disabled={status === 'loading'}
						className='rounded-lg bg-zinc-800 dark:bg-zinc-700 px-4 py-2.5 text-sm font-medium text-white dark:text-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors'
					>
						{status === 'loading' ? 'Joining...' : 'Join'}
					</button>
				</form>
			</div>
		</motion.div>
	);
}
