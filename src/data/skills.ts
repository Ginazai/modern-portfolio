import type { SkillGroup } from '@/types/portfolio';

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    group: 'Languages',
    items: [
      { id: 'python', label: 'Python' },
      { id: 'java', label: 'Java' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'cpp', label: 'C++' },
      { id: 'sql', label: 'SQL' }
    ]
  },
  {
    id: 'frameworks',
    group: 'Frameworks',
    items: [
      { id: 'react', label: 'React' },
      { id: 'node', label: 'Node.js' },
      { id: 'spring-boot', label: 'Spring Boot' },
      { id: 'express', label: 'Express' }
    ]
  },
  {
    id: 'tools',
    group: 'Tools',
    items: [
      { id: 'git', label: 'Git' },
      { id: 'docker', label: 'Docker' },
      { id: 'linux', label: 'Linux' },
      { id: 'postman', label: 'Postman' }
    ]
  },
  {
    id: 'databases',
    group: 'Databases',
    items: [
      { id: 'mysql', label: 'MySQL' },
      { id: 'postgresql', label: 'PostgreSQL' },
      { id: 'mongodb', label: 'MongoDB' }
    ]
  }
];
