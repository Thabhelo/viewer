export interface Interview {
  id: string;
  userId: string;
  role: string;
  type: 'technical' | 'behavioral' | 'mixed';
  level: 'junior' | 'mid' | 'senior';
  techStack: string[];
  questions: string[];
  finalized: boolean;
  coverImage?: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Feedback {
  id: string;
  interviewId: string;
  userId: string;
  totalScore: number;
  categoryScores: {
    communication: { score: number; comment: string };
    technicalKnowledge: { score: number; comment: string };
    problemSolving: { score: number; comment: string };
    culturalFit: { score: number; comment: string };
    confidenceClarity: { score: number; comment: string };
  };
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

export interface SavedMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export type FormType = 'sign-in' | 'sign-up';

export enum CallStatus {
  INACTIVE = 'inactive',
  CONNECTING = 'connecting',
  ACTIVE = 'active',
  FINISHED = 'finished'
}

export interface RouteParams {
  id: string;
}

export interface AgentProps {
  username: string;
  userId: string;
  type: 'generate' | 'interview';
  interviewId?: string;
  questions?: string[];
}

export interface InterviewCardProps extends Interview {
  feedback?: Feedback | null;
}

export interface FormFieldProps<T> {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
}

export interface TechIconProps {
  techStack: string[];
}
