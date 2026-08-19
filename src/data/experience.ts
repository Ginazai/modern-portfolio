import type { Experience, EducationItem } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    company: 'Nexora Systems',
    role: 'Software Engineering Intern',
    date: 'Jun 2024 — Present',
    bullets: [
      { id: 'rest-services', text: 'Built and maintained REST services used by internal operations teams.' },
      { id: 'product-qa', text: 'Partnered with product and QA to ship reliable, measurable improvements.' },
      { id: 'documentation', text: 'Introduced documentation patterns that made onboarding dramatically faster.' }
    ]
  },
  {
    company: 'Independent / Academic',
    role: 'Backend Developer',
    date: 'Jan 2022 — May 2024',
    bullets: [
      { id: 'data-models', text: 'Designed relational data models for student and community projects.' },
      { id: 'milestones', text: 'Translated ambiguous requirements into small, testable milestones.' },
      { id: 'architecture', text: 'Practiced clean architecture across APIs, interfaces, and deployment scripts.' }
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: 'Instituto Tecnológico de Santo Domingo',
    degree: 'Bachelor of Science',
    field: 'Computer Systems Engineering',
    years: '2021 — 2026'
  },
  {
    institution: 'Open Source & Independent Study',
    degree: 'Continuous Learning',
    field: 'Systems Design, Cloud Infrastructure & Web Development',
    years: 'Ongoing'
  }
];

export const stats = [
  { id: 'projects', value: '05+', label: 'projects' },
  { id: 'years-coding', value: '03+', label: 'years coding' },
  { id: 'technologies', value: '10+', label: 'technologies' }
];
