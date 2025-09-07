import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import DisplayTechIcons from './display-tech-icons';
import { InterviewCardProps } from '@/types';
import { getRandomInterviewCover, formatDate } from '@/lib/utils';

export default function InterviewCard(props: InterviewCardProps) {
  const {
    id,
    role,
    type,
    level,
    techStack,
    createdAt,
    feedback
  } = props;

  const normalizedType = /mixed/gi.test(type) ? 'mixed' : type;
  const formattedDate = formatDate(createdAt);
  const coverImage = getRandomInterviewCover();

  return (
    <div className="card-border w-full max-w-sm h-fit card-hover">
      <div className="p-6 space-y-4">
        {/* Badge */}
        <div className="relative">
          <div className="absolute -top-3 -right-3 w-fit px-3 py-1.5 rounded-full">
            <p className="badge-text capitalize">
              {normalizedType}
            </p>
          </div>
        </div>

        {/* Company Logo */}
        <div className="flex justify-center pt-8">
          <Image
            src={coverImage}
            alt="Company Logo"
            width={90}
            height={90}
            className="rounded-full object-cover size-[90px]"
          />
        </div>

        {/* Interview Title */}
        <h3 className="mt-5 capitalize text-lg font-semibold text-center">
          {role} Interview
        </h3>

        {/* Interview Details */}
        <div className="flex flex-row gap-5 mt-3">
          <div className="flex flex-row gap-2">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {formattedDate}
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {feedback?.totalScore || '---'} out of 100
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 mt-5 text-sm text-slate-600 dark:text-slate-400">
          {feedback?.finalAssessment || 
            "You haven't taken this interview yet. Take it now to improve your skills and get detailed feedback on your performance."
          }
        </p>

        {/* Tech Stack and Action */}
        <div className="flex flex-row justify-between items-end">
          <DisplayTechIcons techStack={techStack} />
          
          <Button asChild className="btn-primary text-sm">
            <Link href={
              feedback 
                ? `/interview/${id}/feedback`
                : `/interview/${id}`
            }>
              {feedback ? 'Check Feedback' : 'View Interview'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
