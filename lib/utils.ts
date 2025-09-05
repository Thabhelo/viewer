import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { techMappings, interviewCovers } from '@/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInterviewCover(): string {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return interviewCovers[randomIndex];
}

export async function getTechLogos(techArray: string[]) {
  return techArray.slice(0, 4).map(tech => {
    const normalizedTech = tech.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');
    const iconUrl = techMappings[normalizedTech] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${normalizedTech}/${normalizedTech}-original.svg`;
    
    return {
      tech: tech,
      url: iconUrl
    };
  });
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
