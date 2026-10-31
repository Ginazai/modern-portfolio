import type { SkillGroup } from '@/types/portfolio';

export const skills: SkillGroup[] = [
  {
    id: 'business-delivery',
    group: 'Business Analysis & Delivery',
    items: [
      { id: 'process-analysis', label: 'Business Process Analysis' },
      { id: 'requirements', label: 'Requirements Elicitation' },
      { id: 'stakeholders', label: 'Stakeholder Engagement' },
      { id: 'solution-scoping', label: 'Solution Scoping' },
      { id: 'jira-backlog', label: 'Jira Backlog Management' },
      { id: 'documentation', label: 'Technical Documentation' }
    ]
  },
  {
    id: 'ai-automation-data',
    group: 'AI, Automation & Data',
    items: [
      { id: 'llm-integration', label: 'LLM Integration' },
      { id: 'prompt-engineering', label: 'Prompt Engineering' },
      { id: 'ai-workflows', label: 'AI-assisted Workflows' },
      { id: 'workflow-automation', label: 'Workflow Automation' },
      { id: 'rest-integration', label: 'REST API Integration' },
      { id: 'etl', label: 'ETL' },
      { id: 'pandas', label: 'pandas' },
      { id: 'windmill', label: 'Windmill' },
      { id: 'pipedream', label: 'Pipedream' },
      { id: 'groq-api', label: 'Groq API' }
    ]
  },
  {
    id: 'software-engineering',
    group: 'Software Engineering',
    items: [
      { id: 'python', label: 'Python' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'nodejs', label: 'Node.js' },
      { id: 'java', label: 'Java' },
      { id: 'sql', label: 'SQL' },
      { id: 'fastapi', label: 'FastAPI' },
      { id: 'spring-boot', label: 'Spring Boot' },
      { id: 'react', label: 'React' },
      { id: 'sqlalchemy', label: 'SQLAlchemy' },
      { id: 'postgresql', label: 'PostgreSQL' },
      { id: 'mysql', label: 'MySQL' }
    ]
  },
  {
    id: 'devops-qa-platforms',
    group: 'DevOps, QA & Platforms',
    items: [
      { id: 'git', label: 'Git' },
      { id: 'github-actions', label: 'GitHub Actions' },
      { id: 'docker', label: 'Docker' },
      { id: 'ci-cd', label: 'CI/CD' },
      { id: 'render', label: 'Render' },
      { id: 'postman', label: 'Postman' },
      { id: 'pytest', label: 'Pytest' },
      { id: 'api-testing', label: 'API Testing' },
      { id: 'hubspot', label: 'HubSpot' },
      { id: 'monday', label: 'Monday.com' },
      { id: 'linux', label: 'Linux (Rocky Linux / Ubuntu)' }
    ]
  },
  {
    id: 'spoken-languages',
    group: 'Spoken Languages',
    items: [
      { id: 'spanish-native', label: 'Spanish - Native' },
      { id: 'english-c2', label: 'English - C2 (Proficient)' }
    ]
  }
];
