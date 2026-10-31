import type { Experience, EducationItem } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    company: 'PX Inc.',
    role: 'AI Engineer',
    date: 'Sep 2026 - Present',
    current: true,
    bullets: [
      { id: 'workflow-analysis', text: 'Analyze operational workflows and gather stakeholder requirements to identify opportunities for process improvement, automation, and internal tools.' },
      { id: 'jira-delivery', text: 'Translate business needs into scoped Jira work items with clear priorities and acceptance criteria, coordinating planning and implementation with engineering.' },
      { id: 'iterative-delivery', text: 'Work with stakeholders to validate requirements, incorporate feedback, and support rollout, documentation, maintenance, and continuous improvement.' },
      { id: 'publisher-portal', text: 'Contributed to a publisher onboarding portal that improved information exchange between publishers and internal departments, reducing handoffs, onboarding friction, and turnaround time.' },
      { id: 'ai-dev-workflow', text: 'Built a personal AI-assisted development workflow connecting Jira backlog context with an LLM, reusable skills, and GitHub to streamline task analysis, implementation planning, and execution.' }
    ]
  },
  {
    company: 'PX Inc.',
    role: 'Integration Specialist',
    date: 'Jun 2025 - Sep 2026',
    bullets: [
      { id: 'account-automation', text: 'Automated dynamic account creation with Pipedream, reducing approximately 6 hours of manual work per week.' },
      { id: 'publisher-integrations', text: 'Completed more than 85% of publisher integrations in under 10 days on average.' },
      { id: 'data-centralization', text: 'Reduced redundancy-related errors by more than 75% by centralizing interdepartmental data into a single source of truth.' },
      { id: 'etl-reporting', text: 'Developed Python and Node.js scripts, ETL processes, and pandas-based reports to streamline operational workflows and data handling.' },
      { id: 'business-platforms', text: 'Built and maintained publisher and partner API integrations, automations, internal tools, and publisher-facing resources across business systems.' }
    ]
  },
  {
    company: 'Smartmatic',
    role: 'Testing Assistant',
    date: 'Apr 2025 - May 2025',
    bullets: [
      { id: 'qa-test-cases', text: 'Executed functional and non-functional QA test cases for electoral systems, completing 100% of assigned cases on schedule.' },
      { id: 'machine-provisioning', text: 'Partially automated machine provisioning, reducing setup time per unit by approximately 15%.' },
      { id: 'critical-defect', text: 'Identified, reproduced, and reported a critical software defect that informed subsequent releases.' }
    ]
  }
  // {
  //   company: 'Foundever',
  //   role: 'Customer Service Specialist - Escalations & Dispute Resolution',
  //   date: 'Mar 2021 - Mar 2025',
  //   bullets: [
  //     { id: 'banking-support', text: 'Provided specialized support for banking products, handling escalations, disputes, and fraud-related investigations.' },
  //     { id: 'agent-training', text: 'Trained new agents on escalation procedures, dispute-resolution workflows, and quality standards.' },
  //     { id: 'csat-performance', text: 'Maintained a Customer Satisfaction Score (CSAT) above 95% during the escalations tenure.' },
  //     { id: 'top-agent', text: 'Ranked among the Top 10 Best Performing Agents within the first six months.' },
  //     { id: 'quality-compliance', text: 'Recorded zero Potential Regulatory Errors (PRE) and Business Intent Violations (BI).' }
  //   ]
  // }
];

export const education: EducationItem[] = [
  {
    institution: 'Universidad Latina de Panamá',
    degree: "Bachelor's Degree",
    field: 'Computer Systems Engineering',
    years: 'Jan 2021 - Jun 2026'
  }
];
