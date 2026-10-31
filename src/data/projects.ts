import type { CoverVariant, Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    title: 'LoanTrack - Loan Management Platform',
    description: 'A full-stack loan management system with a FastAPI backend and React frontend. It supports role-based access, a twice-monthly interest and payment ledger, CSV import workflows, payment attachments, loan requests, and webhook integrations. Dockerized CI/CD supports testing, staging, and approval-gated production promotion.',
    tech: [
      { id: 'python', label: 'Python' },
      { id: 'fastapi', label: 'FastAPI' },
      { id: 'sqlalchemy', label: 'SQLAlchemy' },
      { id: 'postgresql', label: 'PostgreSQL' },
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'docker', label: 'Docker' },
      { id: 'github-actions', label: 'GitHub Actions' },
      { id: 'render', label: 'Render' }
    ],
    category: 'Fullstack',
    githubUrl: 'https://github.com/Ginazai/loantrack',
    liveUrl: 'https://frontend-latest-wqm2.onrender.com/',
    imageUrl: 'loantrack'
  },
  {
    title: 'AI-Assisted Financial Analysis Workflow',
    description: 'A multi-step Windmill workflow that retrieves bank-statement PDFs from Gmail, extracts and normalizes balances and transactions with Python, and updates Google Sheets with duplicate-processing safeguards. A Groq-hosted LLM generates monthly financial insights, which are delivered as formatted email reports.',
    tech: [
      { id: 'windmill', label: 'Windmill' },
      { id: 'python', label: 'Python' },
      { id: 'pdfplumber', label: 'pdfplumber' },
      { id: 'typescript-bun', label: 'TypeScript / Bun' },
      { id: 'gmail-api', label: 'Gmail API' },
      { id: 'google-sheets-api', label: 'Google Sheets API' },
      { id: 'groq', label: 'Groq API (GPT-OSS)' }
    ],
    category: 'Automation',
    githubUrl: '',
    liveUrl: '',
    imageUrl: 'finance-analysis'
  },
  {
    title: 'Evergreen - AI Video Production Pipeline',
    description: 'A resumable, staged content-generation pipeline for scripted video production. It coordinates script, voice, music, visual, and assembly stages, with approval checkpoints, API-backed generation where available, and manual handoffs when a stage needs external input.',
    tech: [
      { id: 'python', label: 'Python' },
      { id: 'docker', label: 'Docker' },
      { id: 'gemini', label: 'Gemini API' },
      { id: 'piper', label: 'Piper TTS' },
      { id: 'cloudflare-workers-ai', label: 'Cloudflare Workers AI' },
      { id: 'ffmpeg', label: 'FFmpeg' },
      { id: 'pytest', label: 'Pytest' }
    ],
    category: 'Automation',
    githubUrl: 'https://github.com/Ginazai/evergreen-generator',
    liveUrl: '',
    imageUrl: 'evergreen'
  },
  {
    title: 'Literary Publication',
    description: 'A digital literary publication built around WriteFreely as a headless CMS. A React and Vite reader presents essays in a paginated, book-like format with a searchable archive, responsive layouts, and light and dark themes, while MySQL stores the publication content.',
    tech: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'vite', label: 'Vite' },
      { id: 'writefreely', label: 'WriteFreely' },
      { id: 'mysql', label: 'MySQL' },
      { id: 'aiven', label: 'Aiven' },
      { id: 'minisearch', label: 'MiniSearch' },
      { id: 'caddy', label: 'Caddy' }
    ],
    category: 'Web',
    githubUrl: 'https://github.com/Ginazai/literary-publications',
    liveUrl: 'https://reader-o2ks.onrender.com/',
    imageUrl: 'literary-publication'
  }
];

export const categoryItems = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'automation', label: 'Automation & AI' },
  { id: 'web', label: 'Web Platforms' }
];

/** Which generative cover each project uses (see GenerativeCover). */
export const coverVariants: Record<string, CoverVariant> = {
  loantrack: 'pipeline',
  'finance-analysis': 'flow',
  evergreen: 'waves',
  'literary-publication': 'flow'
};
