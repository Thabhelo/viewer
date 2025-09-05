import Agent from '@/components/agent';

export default function InterviewGenerationPage() {
  // TODO: Get current user from authentication
  const currentUser = {
    id: 'user1',
    name: 'John Doe'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Interview Generation
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Let our AI assistant help you create a personalized interview experience
        </p>
      </div>

      <Agent
        username={currentUser.name}
        userId={currentUser.id}
        type="generate"
      />
    </div>
  );
}
