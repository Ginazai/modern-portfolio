export const profile = {
  name: 'Rafael',
  lastName: 'Caballero.',
  initials: 'RC',
  tagline: 'Computer Systems Engineering Student | Software Developer | Driven by Innovation and Problem-Solving',
  intro: 'Building robust systems. Writing clean code. Solving real problems.',
  role: 'Computer Systems Engineering Student',
  status: 'Available for work',
  aboutParagraphs: [
    'I’m a Computer Systems Engineering student who enjoys understanding what happens beneath the interface. My favorite work lives at the intersection of backend systems, thoughtful APIs, and the people who rely on them.',
    'I care about clean architecture because good software should be easy to reason about, change, and trust. I’m always looking for the next real problem to untangle with a calm, curious approach.'
  ],
  contactIntro: "Have a role in mind or just want to connect? I'd love to hear from you.",
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'rafael@example.com'
  },
  resumeUrl: '/resume.pdf',
  footerNote: (year: number) => `© ${year} Rafael Caballero · Built with React & Tailwind CSS`
};
