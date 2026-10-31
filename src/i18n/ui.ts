/** Every UI string that isn't portfolio data. `es` is typed against `en`, so a missing key is a compile error. */
const en = {
  skip: 'Skip to content',
  mainNav: 'Main navigation',
  logoLabel: (name: string) => `${name}, back to top`,
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  toLight: 'Switch to light mode',
  toDark: 'Switch to dark mode',
  language: 'Language',
  nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', education: 'Education', contact: 'Contact' } as Record<string, string>,
  titleSuffix: 'Portfolio',

  viewWork: 'View My Work',
  downloadResume: 'Download Resume',
  resumeMissingDev: (url: string) => `No PDF found at ${url}. Put your resume in the public folder with that exact name and refresh.`,
  resumeMissingProd: 'The resume is not available right now. Please reach out through the contact form below.',
  scrollToAbout: 'Scroll to about',

  aboutTitle: 'About Me',
  skillsTitle: 'Skills & Technologies',
  projectsTitle: 'Projects',
  experienceTitle: 'Experience',
  educationTitle: 'Education',
  contactTitle: 'Get In Touch',
  stats: { projects: 'featured projects', roles: 'career roles', technologies: 'technologies & tools' } as Record<string, string>,

  filterLabel: 'Filter projects by category',
  noProjects: 'No projects in this category yet.',
  category: { Fullstack: 'Fullstack', Automation: 'Automation', Web: 'Web' } as Record<string, string>,
  onGithub: (title: string) => `${title} on GitHub`,
  liveSite: (title: string) => `${title} live site`,

  fieldName: 'Name',
  fieldEmail: 'Email',
  fieldMessage: 'Message',
  phName: 'Your name',
  phMessage: 'Tell me a little about the opportunity...',
  errName: 'Please tell me your name.',
  errEmailMissing: 'Please add an email address so I can reply.',
  errEmailInvalid: 'That email address does not look right.',
  errMessage: 'Write a short message so I know what this is about.',
  send: 'Send message',
  sentTitle: 'Your email app should be opening.',
  sentBody: (email: string) => `The message is ready to send. If nothing opened, write to ${email} directly.`,
  writeAnother: 'Write another message',
  emailMe: 'Email Rafael',
  mailSubject: (name: string) => `Portfolio message from ${name}`,

  footerNote: (year: number) => `© ${year} Rafael Caballero · Built with React & Tailwind CSS`,
  backToTop: 'Back to top'
};

const es: typeof en = {
  skip: 'Saltar al contenido',
  mainNav: 'Navegación principal',
  logoLabel: name => `${name}, volver al inicio`,
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  toLight: 'Cambiar a modo claro',
  toDark: 'Cambiar a modo oscuro',
  language: 'Idioma',
  nav: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', experience: 'Experiencia', education: 'Educación', contact: 'Contacto' },
  titleSuffix: 'Portafolio',

  viewWork: 'Ver mi trabajo',
  downloadResume: 'Descargar CV',
  resumeMissingDev: url => `No se encontró un PDF en ${url}. Coloca tu CV en la carpeta public con ese nombre exacto y recarga.`,
  resumeMissingProd: 'El CV no está disponible en este momento. Escríbeme desde el formulario de contacto.',
  scrollToAbout: 'Ir a sobre mí',

  aboutTitle: 'Sobre mí',
  skillsTitle: 'Habilidades y tecnologías',
  projectsTitle: 'Proyectos',
  experienceTitle: 'Experiencia',
  educationTitle: 'Educación',
  contactTitle: 'Contáctame',
  stats: { projects: 'proyectos destacados', roles: 'roles profesionales', technologies: 'tecnologías y herramientas' },

  filterLabel: 'Filtrar proyectos por categoría',
  noProjects: 'Aún no hay proyectos en esta categoría.',
  category: { Fullstack: 'Fullstack', Automation: 'Automatización', Web: 'Web' },
  onGithub: title => `${title} en GitHub`,
  liveSite: title => `${title}, sitio en vivo`,

  fieldName: 'Nombre',
  fieldEmail: 'Correo',
  fieldMessage: 'Mensaje',
  phName: 'Tu nombre',
  phMessage: 'Cuéntame un poco sobre la oportunidad...',
  errName: 'Por favor, dime tu nombre.',
  errEmailMissing: 'Agrega un correo electrónico para poder responderte.',
  errEmailInvalid: 'Ese correo electrónico no parece válido.',
  errMessage: 'Escribe un mensaje breve para saber de qué se trata.',
  send: 'Enviar mensaje',
  sentTitle: 'Tu aplicación de correo debería estar abriéndose.',
  sentBody: email => `El mensaje está listo para enviarse. Si no se abrió nada, escribe directamente a ${email}.`,
  writeAnother: 'Escribir otro mensaje',
  emailMe: 'Escribir a Rafael',
  mailSubject: name => `Mensaje desde el portafolio de ${name}`,

  footerNote: year => `© ${year} Rafael Caballero · Hecho con React y Tailwind CSS`,
  backToTop: 'Volver arriba'
};

export type Ui = typeof en;
export const uis = { en, es };
