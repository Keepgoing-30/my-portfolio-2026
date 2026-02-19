import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { email, firstName, lastName } = await request.json();

		let displayName = firstName;

		if (!displayName) {
			const rawName = email.split('@')[0];
			const words = rawName.split(/[._-]/);
			displayName = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
		} else {
			// Capitalize the first letter of the first name and make the rest lowercase
			displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase();
		}

		// 1. Send me notification email about the new subscriber
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'lovethebookofmormon@gmail.com',
			subject: '🚀 New Portfolio Subscription',
			html: `
                <h1>New Subscriber!</h1>
                <p>You have a new newsletter signup from your portfolio.</p>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Display Name used:</strong> ${displayName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            `,
		});

		// 2. Send welcome email to the subscriber
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: email, // Send to the new subscriber
			subject: 'Welcome to my Newsletter!',
			html: `
                <h1>Hi ${displayName}!</h1>
                <p>Thanks for subscribing to my portfolio newsletter. I'm excited to share my latest projects and software engineering journey with you!</p>
                <p>Best regards,</p>
                <p><strong>Anh Quoc</strong></p>
            `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: 'Failed' }, { status: 500 });
	}
}
