import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import InterviewCard from '@/components/interview-card';
import { dummyInterviews } from '@/constants';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-3xl font-bold">
            Get interview ready with AI-powered practice and feedback
          </h2>
          <p className="text-lg opacity-90">
            Practice on real interview questions and get instant feedback to improve your skills and land your dream job.
          </p>
          <Button asChild className="btn-primary max-w-fit">
            <Link href="/interview">
              Start an Interview
            </Link>
          </Button>
        </div>
        <div className="hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=400&fit=crop&crop=center"
            alt="AI Interview Assistant"
            width={400}
            height={400}
            className="max-w-sm rounded-2xl"
          />
        </div>
      </section>

      {/* Your Interviews Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Your Interviews
        </h2>
        <div className="interviews-section">
          <div className="col-span-full">
            <p className="text-center text-slate-600 dark:text-slate-400 py-8">
              You haven&apos;t taken any interviews yet. Generate your first interview to get started!
            </p>
          </div>
        </div>
      </section>

      {/* Available Interviews Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Practice Interviews
        </h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              {...interview}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
