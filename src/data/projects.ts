import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    title: 'Pulse API',
    description: 'A resilient service layer for real-time logistics events, with observable queues and role-based access.',
    tech: [
      { id: 'node-js', label: 'Node.js' },
      { id: 'postgresql', label: 'PostgreSQL' },
      { id: 'docker', label: 'Docker' }
    ],
    category: 'Backend',
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'pulse'
  },
  {
    title: 'Atlas Workspace',
    description: 'A focused project command center that turns scattered team updates into clear, actionable work.',
    tech: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'express', label: 'Express' }
    ],
    category: 'Fullstack',
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'atlas'
  },
  {
    title: 'Signal Dashboard',
    description: 'A responsive analytics interface designed to make complex system health legible at a glance.',
    tech: [
      { id: 'react', label: 'React' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'css', label: 'CSS' }
    ],
    category: 'Frontend',
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'signal'
  }
];

export const categoryItems = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Fullstack' }
];

export const projectCardGradient: Record<string, string> = {
  pulse: 'bg-[linear-gradient(135deg,#113d3b,#0b1919)]',
  atlas: 'bg-[linear-gradient(135deg,#24233d,#121221)]',
  signal: 'bg-[linear-gradient(135deg,#17303d,#101618)]'
};
