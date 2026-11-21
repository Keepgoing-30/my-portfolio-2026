type EvidenceLink = {
	href: string;
	label: string;
};

type CaseStudy = {
	status: string;
	title: string;
	role: string;
	challenges: string;
	contributions: string;
	outcomes: string;
	spiritualGrowth: string;
	evidence: EvidenceLink[];
};

const caseStudies: CaseStudy[] = [
	{
		status: 'Documented project demo',
		title: 'Essex Family Research',
		role: 'Project Manager',
		challenges:
			'Choose suitable technology and a delivery process while keeping the work aligned with customer requirements.',
		contributions:
			'Directed technology and development-process decisions, and was responsible for ensuring the product addressed customer requirements.',
		outcomes:
			'A public video demonstration documents the project’s purpose: helping users search for information about the Wood family in Essex, England.',
		spiritualGrowth:
			'Agency and service: taking responsibility for project decisions while using family-history technology to help people connect with their families.',
		evidence: [{ href: 'https://youtu.be/A1UII2YGYG0', label: 'Project demonstration video' }],
	},
	{
		status: 'Ongoing',
		title: 'Steady Balance',
		role: 'Tech Lead',
		challenges:
			'Lead technical collaboration while the clinician-facing product is still being built and make room for different team strengths.',
		contributions:
			'Facilitate discussion, treat team members as equals, and coordinate work so teammates’ strengths help cover one another’s gaps.',
		outcomes:
			'The public site currently provides a clinician account-creation flow. Development remains ongoing; no completed product outcome is claimed here.',
		spiritualGrowth:
			'Integrity and service: lead with respect, shared responsibility, and careful collaboration rather than treating speed as the only measure of progress.',
		evidence: [{ href: 'https://steadybalance.website/', label: 'Live product' }],
	},
	{
		status: 'Completed — live product',
		title: 'Utah Native Plants',
		role: 'Solo creator and developer',
		challenges:
			'Research native-plant information, organize it into a consistent data model, and make the material approachable for a public audience.',
		contributions:
			'Planned and implemented the product independently; built a typed data layer, reusable plant cards, responsive layout, and image navigation for each plant.',
		outcomes:
			'A live educational site presents native plants with common and scientific names, descriptions, and image galleries.',
		spiritualGrowth:
			'Service: apply technical skills to make environmental education about Utah native plants more accessible to the community.',
		evidence: [
			{ href: 'https://utahnativeplants.vercel.app/', label: 'Live product' },
			{ href: 'https://github.com/Keepgoing-30/utah-plants-blog', label: 'Source code' },
		],
	},
];

export default function CaseStudies() {
	return (
		<section aria-labelledby='case-studies-heading' className='mt-16'>
			<h2 id='case-studies-heading' className='text-center font-bold text-[31px] text-foreground leading-10 tracking-normal md:text-[2.75rem]'>
				IT 497 Case Studies
			</h2>
			<p className='mx-auto mt-4 max-w-3xl text-center text-base text-foreground/70 leading-7'>
				Evidence-backed project work, with ongoing work clearly separated from completed outcomes.
			</p>
			<div className='mt-10 space-y-6'>
				{caseStudies.map((study) => (
					<article key={study.title} className='rounded-2xl border border-muted-foreground/20 p-6 md:p-8'>
						<div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
							<h3 className='text-2xl font-bold text-foreground'>{study.title}</h3>
							<span className='w-fit rounded-full border border-muted-foreground/30 px-3 py-1 text-sm text-muted-foreground'>
								Status: {study.status}
							</span>
						</div>
						<dl className='mt-6 grid gap-5 text-sm leading-6 md:grid-cols-2'>
							<div>
								<dt className='font-semibold text-foreground'>My Role</dt>
								<dd className='mt-1 text-foreground/70'>{study.role}</dd>
							</div>
							<div>
								<dt className='font-semibold text-foreground'>Technical Challenges</dt>
								<dd className='mt-1 text-foreground/70'>{study.challenges}</dd>
							</div>
							<div>
								<dt className='font-semibold text-foreground'>Contributions</dt>
								<dd className='mt-1 text-foreground/70'>{study.contributions}</dd>
							</div>
							<div>
								<dt className='font-semibold text-foreground'>Verified Outcomes</dt>
								<dd className='mt-1 text-foreground/70'>{study.outcomes}</dd>
							</div>
							<div className='md:col-span-2'>
								<dt className='font-semibold text-foreground'>Spiritual / Ethical Growth</dt>
								<dd className='mt-1 text-foreground/70'>{study.spiritualGrowth}</dd>
							</div>
						</dl>
						<div className='mt-6 border-t border-muted-foreground/20 pt-4'>
							<h4 className='font-semibold text-foreground'>Evidence</h4>
							<ul className='mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm'>
								{study.evidence.map((item) => (
									<li key={item.href}>
										<a
											href={item.href}
											target='_blank'
											rel='noopener noreferrer'
											className='text-muted-foreground underline underline-offset-4 hover:text-foreground'
										>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

