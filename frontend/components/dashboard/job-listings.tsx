import React, { useState, useEffect } from 'react';
import PasteJobDescription from './paste-job-description';
import { uploadJobDescriptions, getJob } from '@/lib/api/job';
import { improveResume } from '@/lib/api/resume';
import { useResumePreview } from '@/components/common/resume_previewer_context';

interface Job {
	// Assuming id might be optional or not returned by analysis for a single display
	id?: number;
	title: string;
	company: string;
	location: string;
	jobId: string;
	requirements: string[];
	responsibilities: string[];
}

// Type for the data expected from the analysis backend
type AnalyzedJobData = Pick<Job, 'title' | 'company' | 'location' | 'jobId' | 'requirements' | 'responsibilities'> & {
	job_summary?: string;
	key_responsibilities?: string[];
};

interface JobListingsProps {
	resumeId: string;
}

const JobListings: React.FC<JobListingsProps> = ({ resumeId }) => {
	const { improvedData, setImprovedData } = useResumePreview();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [analyzedJob, setAnalyzedJob] = useState<AnalyzedJobData | null>(null);
	const [isAnalyzing, setIsAnalyzing] = useState(false);
	const [isImproving, setIsImproving] = useState(false);
	const [initialJob, setInitialJob] = useState<AnalyzedJobData | null>(null);
	const [loadingInitialJob, setLoadingInitialJob] = useState(true);
	// Optional: add error state for analysis failures
	// const [error, setError] = useState<string | null>(null);

	// Load initial job data when component mounts
	useEffect(() => {
		const loadInitialJob = async () => {
			if (improvedData?.data?.job_id) {
				try {
					setLoadingInitialJob(true);
					// Get the processed job data
					const jobData = await getJob(improvedData.data.job_id);
					
					// Extract relevant information from the processed job
					const initialJobData: AnalyzedJobData = {
						title: jobData.processed_job?.job_title || 'Unknown Position',
						company: jobData.processed_job?.company_profile?.company_name || 'Unknown Company',
						location: jobData.processed_job?.location?.city || 'Unknown Location',
						requirements: jobData.processed_job?.job_requirements?.split('\n').filter(Boolean) || [],
						responsibilities: jobData.processed_job?.job_responsibilities?.split('\n').filter(Boolean) || [],
						job_summary: jobData.processed_job?.job_summary || '',
						key_responsibilities: jobData.processed_job?.key_responsibilities || [],
						jobId: improvedData.data.job_id
					};
					
					setInitialJob(initialJobData);
					setAnalyzedJob(initialJobData);
				} catch (err) {
					console.error('Error loading initial job:', err);
				} finally {
					setLoadingInitialJob(false);
				}
			} else {
				setLoadingInitialJob(false);
			}
		};
		
		loadInitialJob();
	}, [improvedData]);

	const handleOpenModal = () => {
		// setError(null); // Clear previous errors when opening modal
		setIsModalOpen(true);
	};
	const handleCloseModal = () => setIsModalOpen(false);

	const handlePasteAndAnalyzeJob = async (text: string) => {
		setIsAnalyzing(true);
		setAnalyzedJob(null); // Clear previous job
		// setError(null); // Clear previous errors
		try {
			// Upload the job description
			const jobId = await uploadJobDescriptions([text], resumeId);
			
			// Get the processed job data
			const jobData = await getJob(jobId);
			
			// Extract relevant information from the processed job
			const analyzedData: AnalyzedJobData = {
				title: jobData.processed_job?.job_title || 'Unknown Position',
				company: jobData.processed_job?.company_profile?.company_name || 'Unknown Company',
				location: jobData.processed_job?.location?.city || 'Unknown Location',
				requirements: jobData.processed_job?.job_requirements?.split('\n').filter(Boolean) || [],
				responsibilities: jobData.processed_job?.job_responsibilities?.split('\n').filter(Boolean) || [],
				job_summary: jobData.processed_job?.job_summary || '',
				key_responsibilities: jobData.processed_job?.key_responsibilities || [],
				jobId: jobId
			};
			
			setAnalyzedJob(analyzedData);
		} catch (err) {
			console.error('Error analyzing job description:', err);
			// setError(err instanceof Error ? err.message : "An unknown error occurred during analysis.");
			setAnalyzedJob(null);
		} finally {
			setIsAnalyzing(false);
			handleCloseModal();
		}
	};

	const handleImproveResume = async () => {
		console.log('handleImproveResume called');
		console.log('analyzedJob:', analyzedJob);
		console.log('resumeId:', resumeId);
		
		if (!analyzedJob) {
			console.log('No analyzed job, returning');
			return;
		}
		
		setIsImproving(true);
		try {
			console.log('Calling improveResume with resumeId:', resumeId, 'and jobId:', analyzedJob.jobId);
			// Call the improveResume API with resumeId and jobId
			const improvedResult = await improveResume(resumeId, analyzedJob.jobId);
			console.log('improveResume response:', improvedResult);
			// Update the resume preview context with the improved data
			setImprovedData(improvedResult);
			// Show a success message
			alert('Resume has been successfully improved!');
		} catch (err) {
			console.error('Error improving resume:', err);
			alert('Failed to improve resume. Please try again.');
		} finally {
			setIsImproving(false);
		}
	};

	// truncateText function removed as it's no longer used

	return (
		<div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-800/50">
			<h2 className="text-2xl font-bold text-white mb-1">Job Analyzer</h2>
			<p className="text-gray-400 mb-6 text-sm">
				{analyzedJob
					? 'Analyzed job details below.'
					: 'Upload a job description to analyze its key details.'}
			</p>
			{loadingInitialJob ? (
				<div className="text-center text-gray-400 py-8">
					<p>Loading job details...</p>
				</div>
			) : isAnalyzing ? (
				<div className="text-center text-gray-400 py-8">
					<p>Analyzing job description...</p>
					{/* Optional: Add a spinner here */}
				</div>
			) : analyzedJob ? (
				<div className="space-y-4">
					<div
						// key is not needed for a single item display
						className="p-4 bg-gray-700 rounded-md shadow-md"
					>
						<h3 className="text-lg font-semibold text-gray-100">{analyzedJob.title}</h3>
						<p className="text-sm text-gray-300">{analyzedJob.company}</p>
						<p className="text-xs text-gray-400 mt-1">{analyzedJob.location}</p>
						
						{/* Job Summary */}
						{analyzedJob.job_summary && (
							<div className="mt-3">
								<h4 className="text-sm font-medium text-gray-200 mb-1">Job Summary</h4>
								<p className="text-xs text-gray-400">{analyzedJob.job_summary}</p>
							</div>
						)}
						
						{/* Job Requirements */}
						{analyzedJob.requirements && analyzedJob.requirements.length > 0 && (
							<div className="mt-3">
								<h4 className="text-sm font-medium text-gray-200 mb-1">Requirements</h4>
								<ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
									{analyzedJob.requirements.slice(0, 3).map((req, index) => (
										<li key={index}>{req}</li>
									))}
									{analyzedJob.requirements.length > 3 && (
										<li className="italic">+ {analyzedJob.requirements.length - 3} more requirements</li>
									)}
								</ul>
							</div>
						)}
						
						{/* Key Responsibilities */}
						{(analyzedJob.key_responsibilities && analyzedJob.key_responsibilities.length > 0) ? (
							<div className="mt-3">
								<h4 className="text-sm font-medium text-gray-200 mb-1">Key Responsibilities</h4>
								<ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
									{analyzedJob.key_responsibilities.slice(0, 5).map((resp, index) => (
										<li key={index}>{resp}</li>
									))}
									{analyzedJob.key_responsibilities.length > 5 && (
										<li className="italic">+ {analyzedJob.key_responsibilities.length - 5} more responsibilities</li>
									)}
								</ul>
							</div>
						) : (
							<div className="mt-3">
								<h4 className="text-sm font-medium text-gray-200 mb-1">Key Responsibilities</h4>
								<p className="text-xs text-gray-400">No key responsibilities specified.</p>
							</div>
						)}
					</div>
					<div className="space-y-3 mt-4">
							<button
								onClick={handleOpenModal}
								className="w-full text-center block bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 text-sm"
							>
								Analyze Another Job Description
							</button>
							{isImproving ? (
								<div className="w-full text-center py-2.5 px-4 rounded-md text-gray-400 text-sm">
									Improving resume...
								</div>
							) : (
								<button
									onClick={handleImproveResume}
									className="w-full text-center block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 text-sm"
								>
									Improve Resume
								</button>
							)}
						</div>
				</div>
			) : (
				<div className="text-center text-gray-400 py-8 flex flex-col justify-center items-center">
					{/* Optional: Display error message here if setError is implemented */}
					{/* {error && <p className="text-red-400 mb-3">{error}</p>} */}
					<p className="mb-3">No job description analyzed yet.</p>
					<button
						onClick={handleOpenModal}
						className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
					>
						Upload Job Description
					</button>
				</div>
			)}
			{/* Removed the always-visible bottom button as its functionality is covered */}
			{isModalOpen && (
				<PasteJobDescription
					onClose={handleCloseModal}
					onPaste={handlePasteAndAnalyzeJob}
				/>
			)}
		</div>
	);
};

export default JobListings;
