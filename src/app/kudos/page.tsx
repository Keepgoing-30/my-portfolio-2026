import Image from 'next/image';
import Link from 'next/link';

import UserIntro from '@/components/UserIntro';
import WorkStation from '@/components/Kudos';
export default function resume() {
	return (
		<main className='mx-auto w-full max-w-7xl '>
			{/* Hero Section */}
			<UserIntro />
			{/* Reviews Section */}
			<WorkStation />
		</main>
	);
}
