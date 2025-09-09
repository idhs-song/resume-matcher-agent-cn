// File: apps/frontend/app/dashboard/page.tsx


'use client';

import React from 'react';
import BackgroundContainer from '@/components/common/background-container';
import JobListings from '@/components/dashboard/job-listings';
import Resume from '@/components/dashboard/resume-component'; // rename import to match default export
import { useResumePreview } from '@/components/common/resume_previewer_context';

const mockResumeData = {
	personalInfo: {
		name: 'Ada Lovelace',
		title: 'Software Engineer & Visionary',
		email: 'ada.lovelace@example.com',
		phone: '+1-234-567-8900',
		location: 'London, UK',
		website: 'analyticalengine.dev',
		linkedin: 'linkedin.com/in/adalovelace',
		github: 'github.com/adalovelace',
	},
	summary:
		'Pioneering computer programmer with a strong foundation in mathematics and analytical thinking. Known for writing the first algorithm intended to be carried out by a machine. Seeking challenging opportunities to apply analytical skills to modern computing problems.',
	experience: [
		{
			id: 1,
			title: 'Collaborator & Algorithm Designer',
			company: "Charles Babbage's Analytical Engine Project",
			location: 'London, UK',
			years: '1842 - 1843',
			description: [
				"Developed the first published algorithm intended for implementation on a computer, Charles Babbage's Analytical Engine.",
				"Translated Luigi Menabrea's memoir on the Analytical Engine, adding extensive notes (Notes G) which included the algorithm.",
				'Foresaw the potential for computers to go beyond mere calculation, envisioning applications in music and art.',
			],
		},
	],
	education: [
		{
			id: 1,
			institution: 'Self-Taught & Private Tutoring',
			degree: 'Mathematics and Science',
			years: 'Early 19th Century',
			description:
				'Studied mathematics and science extensively under tutors like Augustus De Morgan, a prominent mathematician.',
		},
		// Add more education objects here if needed
	],
	skills: [
		'Algorithm Design',
		'Analytical Thinking',
		'Mathematical Modeling',
		'Computational Theory',
		'Technical Writing',
		'French (Translation)',
		'Symbolic Logic',
	],
};

// Simple markdown to HTML converter
const convertMarkdownToHtml = (markdown: string): string => {
	if (!markdown) return '';
	
	// Convert markdown to HTML
	let html = markdown;
	
	// Convert headers
	html = html.replace(/^#### (.*$)/gm, '<h4 class="text-xl font-bold text-white mt-6 mb-3">$1</h3>');
	html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mt-6 mb-3">$1</h3>');
	html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>');
	html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mt-6 mb-3">$1</h1>');
	
	// Convert bold text
	html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
	
	// Convert italic text
	html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
	
	// Convert code blocks
	html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm">$1</code></pre>');
	
	// Convert inline code
	html = html.replace(/`(.*?)`/g, '<code class="bg-gray-900 px-1 py-0.5 rounded text-sm">$1</code>');
	
	// Convert unordered lists
	html = html.replace(/^\s*-\s(.+)$/gm, '<li class="ml-4">$1</li>');
	html = html.replace(/(<li class="ml-4">.*<\/li>)+/gs, '<ul class="list-disc list-inside my-2 space-y-1">$&</ul>');
	
	// Skip converting ordered lists (numbers with dots)
	// Remove or comment out the following lines if you don't want ordered list conversion
	// html = html.replace(/^\s*\d+\.\s(.+)$/gm, '<li class="ml-4">$1</li>');
	// html = html.replace(/(<li class="ml-4">.*<\/li>)+/gs, '<ol class="list-decimal list-inside my-2 space-y-1">$&</ol>');
	
	// Convert links
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
	
	// Convert paragraphs
	html = html.replace(/^\s*(.+?)\s*$/gm, '<p class="mb-3">$1</p>');
	
	// Handle line breaks
	html = html.replace(/\n/g, '<br>');
	
	return html;
};

export default function DashboardPage() {
	const { improvedData } = useResumePreview();
	console.log('Improved Data:', improvedData);
	if (!improvedData) {
		return (
			<BackgroundContainer className="min-h-screen" innerClassName="bg-zinc-950">
				<div className="flex items-center justify-center h-full p-6 text-gray-400">
					No improved resume found. Please click "Improve" on the Job Upload page first.
				</div>
			</BackgroundContainer>
		);
	}

	const { data } = improvedData;
	const { resume_preview, new_score } = data;
	const preview = resume_preview ?? mockResumeData;
	const newPct = Math.round(new_score * 100);
	
	// Get analysis result from the API response
	const analysisResult = data.analysis_result ?? 'No analysis result available.';

	const handleJobUpload = async (text: string): Promise<AnalyzedJobData | null> => {
		try {
			// Upload the job description and get the job ID
			const jobId = await uploadJobDescriptions([text], data.resume_id);
			
			// In a real implementation, we would fetch the processed job data
			// For now, we'll return mock data but indicate that a real job was processed
			console.log('Uploaded job ID:', jobId);
			return {
				title: 'PHP Developer Position',
				company: 'Technology Company',
				location: 'Guangzhou / Shenzhen'
			};
		} catch (error) {
			console.error('Error uploading job description:', error);
			return null;
		}
	};


	return (
		<BackgroundContainer className="min-h-screen" innerClassName="bg-zinc-950 backdrop-blur-sm overflow-auto">
			<div className="w-full h-full overflow-auto py-8 px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="container mx-auto">
					<div className="mb-10">
						<h1 className="text-3xl font-semibold pb-2 text-white">
							Your{' '}
							<span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
								Resume Matcher
							</span>{' '}
							Dashboard
						</h1>
						<p className="text-gray-300 text-lg">
							Manage your resume and analyze its match with job descriptions.
						</p>
					</div>

					{/* Grid: left = job listings, right = analysis result */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Left column - Job Listings only */}
						<div className="space-y-8">
							<section>
								<JobListings resumeId={data.resume_id} />
							</section>
						</div>

						{/* Right column - Analysis Result */}
						<div className="md:col-span-2">
							<div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg shadow-xl h-full flex flex-col border border-gray-800/50">
								<div className="mb-6">
									<h2 className="text-2xl font-bold text-white mb-1">Analysis Result</h2>
									<p className="text-gray-400 text-sm">
										Analysis of your resume against the job description.
									</p>
								</div>
								<div className="flex-grow overflow-auto">
									<div className="bg-gray-800/50 p-4 rounded-lg h-full">
										<div 
											className="prose prose-invert max-w-none text-gray-200 text-sm"
											dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(analysisResult) }}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BackgroundContainer>
	);
}