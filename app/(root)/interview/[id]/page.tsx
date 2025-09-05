import { notFound } from 'next/navigation';
import Image from 'next/image';
import Agent from '@/components/agent';
import DisplayTechIcons from '@/components/display-tech-icons';
import { RouteParams } from '@/types';
import { dummyInterviews } from '@/constants';
import { getRandomInterviewCover } from '@/lib/utils';

interface InterviewSessionPageProps {
  params: Promise<RouteParams>;
}

export default async function InterviewSessionPage({ params }: InterviewSessionPageProps) {
  const { id } = await params;
  
  // TODO: Replace with actual data fetching from database
  const interview = dummyInterviews.find(interview => interview.id === id);
  
  if (!interview) {
    notFound();
  }

  // TODO: Get current user from authentication
  const currentUser = {
    id: 'user1',
    name: 'John Doe'
  };

  const coverImage = getRandomInterviewCover();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Interview Details Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={coverImage}
              alt="Company Logo"
              width={40}
              height={40}
              className="rounded-full object-cover size-10"
            />
            <h1 className="text-2xl font-bold capitalize text-slate-900 dark:text-white">
              {interview.role} Interview
            </h1>
          </div>
          
          <DisplayTechIcons techStack={interview.techStack} />
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-slate-200 dark:bg-slate-700 px-4 py-2 rounded-lg h-fit capitalize text-sm font-medium">
            {interview.type}
          </span>
        </div>
      </div>

      {/* Agent Component */}
      <Agent
        username={currentUser.name}
        userId={currentUser.id}
        type="interview"
        interviewId={id}
        questions={interview.questions}
      />
    </div>
  );
}
