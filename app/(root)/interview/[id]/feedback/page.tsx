import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RouteParams, Feedback } from '@/types';
import { formatDate } from '@/lib/utils';

interface FeedbackPageProps {
  params: Promise<RouteParams>;
}

// Mock feedback data - TODO: Replace with actual data fetching
const mockFeedback: Feedback = {
  id: 'feedback1',
  interviewId: '1',
  userId: 'user1',
  totalScore: 75,
  categoryScores: {
    communication: { score: 80, comment: 'Good verbal communication skills, but could improve on clarity.' },
    technicalKnowledge: { score: 85, comment: 'Strong technical foundation with room for advanced concepts.' },
    problemSolving: { score: 70, comment: 'Decent problem-solving approach, but could be more systematic.' },
    culturalFit: { score: 75, comment: 'Shows good alignment with team values and culture.' },
    confidenceClarity: { score: 65, comment: 'Could improve confidence in responses and speak more clearly.' }
  },
  strengths: [
    'Strong technical knowledge in React and TypeScript',
    'Good understanding of modern web development practices',
    'Enthusiastic and eager to learn'
  ],
  areasForImprovement: [
    'Practice explaining complex concepts more clearly',
    'Work on confidence when discussing unfamiliar topics',
    'Improve time management during problem-solving'
  ],
  finalAssessment: 'The candidate shows strong technical skills and good potential. With some work on communication and confidence, they would be a valuable addition to any development team.',
  createdAt: '2024-03-15T10:00:00Z'
};

export default async function FeedbackPage({ params }: FeedbackPageProps) {
  const { id } = await params;
  
  // TODO: Fetch actual feedback data based on interview ID
  const feedback = mockFeedback;
  
  if (!feedback) {
    notFound();
  }

  const formattedDate = formatDate(feedback.createdAt);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Interview Feedback
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Completed on {formattedDate}
        </p>
      </div>

      {/* Overall Score */}
      <div className="card-border mb-8">
        <div className="card-padding text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Overall Score
          </h2>
          <div className="text-5xl font-bold text-blue-600 mb-4">
            {feedback.totalScore}/100
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {feedback.finalAssessment}
          </p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="card-border mb-8">
        <div className="card-padding">
          <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
            Detailed Breakdown
          </h2>
          <div className="space-y-6">
            {Object.entries(feedback.categoryScores).map(([category, data]) => (
              <div key={category} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium capitalize text-slate-900 dark:text-white">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <span className="font-semibold text-blue-600">
                    {data.score}/100
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {data.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths and Areas for Improvement */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Strengths */}
        <div className="card-border">
          <div className="card-padding">
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              Strengths
            </h2>
            <ul className="space-y-2">
              {feedback.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {strength}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="card-border">
          <div className="card-padding">
            <h2 className="text-xl font-semibold mb-4 text-orange-600">
              Areas for Improvement
            </h2>
            <ul className="space-y-2">
              {feedback.areasForImprovement.map((area, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">!</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="btn-primary">
          <Link href={`/interview/${id}`}>
            Retake Interview
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
