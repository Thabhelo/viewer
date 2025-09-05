import { Interview } from '@/types';

// Dummy interviews for initial display
export const dummyInterviews: Interview[] = [
  {
    id: '1',
    userId: 'user1',
    role: 'Frontend Developer',
    type: 'technical',
    level: 'senior',
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    questions: [
      'Can you explain the difference between React hooks and class components?',
      'How would you optimize a React application for performance?',
      'Describe your experience with TypeScript and its benefits.'
    ],
    finalized: true,
    createdAt: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    userId: 'user2',
    role: 'Full Stack Developer',
    type: 'mixed',
    level: 'mid',
    techStack: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
    questions: [
      'Tell me about a challenging project you worked on.',
      'How do you handle API rate limiting?',
      'Describe your approach to database design.'
    ],
    finalized: true,
    createdAt: '2024-03-14T15:30:00Z'
  }
];

// Tech stack mappings using DevIcons CDN
export const techMappings: Record<string, string> = {
  'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'tailwindcss': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'graphql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
};

// Interview cover images from online sources
export const interviewCovers = [
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=90&h=90&fit=crop&crop=center', // Modern office
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=90&h=90&fit=crop&crop=center', // Tech company
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=90&h=90&fit=crop&crop=center', // Startup office  
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=90&h=90&fit=crop&crop=center', // Corporate building
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=90&h=90&fit=crop&crop=center', // Creative workspace
  'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=90&h=90&fit=crop&crop=center', // Modern workspace
  'https://images.unsplash.com/photo-1562408590-e32931084e23?w=90&h=90&fit=crop&crop=center', // Tech office
  'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=90&h=90&fit=crop&crop=center'  // Business center
];

// Feedback schema for AI generation (placeholder)
export const feedbackSchema = {
  type: 'object',
  properties: {
    totalScore: { type: 'number' },
    categoryScores: {
      type: 'object',
      properties: {
        communication: {
          type: 'object',
          properties: {
            score: { type: 'number' },
            comment: { type: 'string' }
          }
        },
        technicalKnowledge: {
          type: 'object',
          properties: {
            score: { type: 'number' },
            comment: { type: 'string' }
          }
        },
        problemSolving: {
          type: 'object',
          properties: {
            score: { type: 'number' },
            comment: { type: 'string' }
          }
        },
        culturalFit: {
          type: 'object',
          properties: {
            score: { type: 'number' },
            comment: { type: 'string' }
          }
        },
        confidenceClarity: {
          type: 'object',
          properties: {
            score: { type: 'number' },
            comment: { type: 'string' }
          }
        }
      }
    },
    strengths: { type: 'array', items: { type: 'string' } },
    areasForImprovement: { type: 'array', items: { type: 'string' } },
    finalAssessment: { type: 'string' }
  }
};

// AI Interviewer configuration (placeholder)
export const interviewer = {
  name: 'AI Interviewer',
  firstMessage: 'Hello! Thank you for taking the time to speak with me today. I\'m excited to learn more about you and your experience.',
  voice: {
    provider: 'openai',
    voiceId: 'alloy'
  },
  model: {
    provider: 'openai',
    model: 'gpt-4'
  }
};
