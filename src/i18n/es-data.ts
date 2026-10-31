/** Spanish overrides for the English portfolio data. Anything not listed here (tech names, URLs, ids) stays as is. */
export const es = {
  profile: {
    tagline: 'Ingeniero de IA | Sistemas empresariales, automatización e IA aplicada',
    intro: 'Conectando las necesidades del negocio, la ingeniería de software y la automatización asistida por IA.',
    role: 'Ingeniero de IA | Sistemas empresariales y automatización',
    status: 'Trabajando actualmente',
    aboutParagraphs: [
      'Soy ingeniero de IA y me enfoco en software para el negocio, automatización de flujos de trabajo e integración de sistemas. Trabajo en todo el ciclo, desde el levantamiento de requisitos hasta la implementación técnica y la entrega, convirtiendo necesidades operativas en herramientas mantenibles y flujos conectados.',
      'Mi trabajo abarca aplicaciones full-stack, integraciones de API, ETL y reportería, y procesos asistidos por LLM. Valoro una arquitectura clara, mejoras medibles, entregas confiables y la colaboración cercana con quienes usan los sistemas.'
    ],
    contactIntro: '¿Tienes un puesto en mente o quieres hablar de un proyecto? Con gusto conversamos.',
    resumeUrl: '/resume-es.pdf',
    resumeFilename: 'Rafael-Caballero-CV.pdf'
  },

  categoryItems: { all: 'Todos', fullstack: 'Fullstack', automation: 'Automatización e IA', web: 'Plataformas web' } as Record<string, string>,

  projects: {
    loantrack: {
      title: 'LoanTrack - Plataforma de gestión de préstamos',
      description:
        'Sistema full-stack de gestión de préstamos con backend en FastAPI y frontend en React. Incluye acceso por roles, un libro mayor quincenal de intereses y pagos, flujos de importación CSV, adjuntos de pago, solicitudes de préstamo e integraciones por webhook. El CI/CD con Docker cubre pruebas, staging y promoción a producción con aprobación.'
    },
    'finance-analysis': {
      title: 'Flujo de análisis financiero asistido por IA',
      description:
        'Flujo de varios pasos en Windmill que obtiene estados de cuenta bancarios en PDF desde Gmail, extrae y normaliza saldos y transacciones con Python, y actualiza Google Sheets con salvaguardas contra el procesamiento duplicado. Un LLM alojado en Groq genera análisis financieros mensuales, entregados como reportes por correo con formato.'
    },
    evergreen: {
      title: 'Evergreen - Pipeline de producción de video con IA',
      description:
        'Pipeline de generación de contenido por etapas y reanudable para producción de video con guion. Coordina las etapas de guion, voz, música, visuales y ensamblaje, con puntos de aprobación, generación vía API cuando está disponible y traspasos manuales cuando una etapa necesita un insumo externo.'
    },
    'literary-publication': {
      title: 'Publicación literaria',
      description:
        'Publicación literaria digital construida sobre WriteFreely como CMS headless. Un lector en React y Vite presenta ensayos en un formato paginado, similar a un libro, con archivo con búsqueda, diseños adaptables y temas claro y oscuro, mientras MySQL almacena el contenido.'
    }
  } as Record<string, { title: string; description: string }>,

  skillGroups: {
    'business-delivery': 'Análisis de negocio y entrega',
    'ai-automation-data': 'IA, automatización y datos',
    'software-engineering': 'Ingeniería de software',
    'devops-qa-platforms': 'DevOps, QA y plataformas',
    'spoken-languages': 'Idiomas'
  } as Record<string, string>,

  skillLabels: {
    'process-analysis': 'Análisis de procesos de negocio',
    requirements: 'Levantamiento de requisitos',
    stakeholders: 'Gestión de partes interesadas',
    'solution-scoping': 'Definición del alcance de soluciones',
    'jira-backlog': 'Gestión de backlog en Jira',
    documentation: 'Documentación técnica',
    'llm-integration': 'Integración de LLM',
    'prompt-engineering': 'Ingeniería de prompts',
    'ai-workflows': 'Flujos asistidos por IA',
    'workflow-automation': 'Automatización de flujos',
    'rest-integration': 'Integración de APIs REST',
    'api-testing': 'Pruebas de API',
    'spanish-native': 'Español - Nativo',
    'english-c2': 'Inglés - C2 (Dominio)'
  } as Record<string, string>,

  // Same order as data/experience.ts.
  experiences: [
    {
      role: 'Ingeniero de IA',
      date: 'Sep 2026 - Actualidad',
      bullets: {
        'workflow-analysis': 'Analizo flujos de trabajo operativos y levanto requisitos con las partes interesadas para identificar oportunidades de mejora de procesos, automatización y herramientas internas.',
        'jira-delivery': 'Traduzco necesidades del negocio en elementos de trabajo de Jira con alcance definido, prioridades y criterios de aceptación claros, coordinando la planificación y la implementación con ingeniería.',
        'iterative-delivery': 'Trabajo con las partes interesadas para validar requisitos, incorporar retroalimentación y apoyar el despliegue, la documentación, el mantenimiento y la mejora continua.',
        'publisher-portal': 'Contribuí a un portal de incorporación de publishers que mejoró el intercambio de información entre los publishers y los departamentos internos, reduciendo traspasos, fricción de incorporación y tiempos de respuesta.',
        'ai-dev-workflow': 'Construí un flujo de desarrollo personal asistido por IA que conecta el contexto del backlog de Jira con un LLM, skills reutilizables y GitHub para agilizar el análisis de tareas, la planeación de la implementación y su ejecución.'
      }
    },
    {
      role: 'Especialista en Integraciones',
      date: 'Jun 2025 - Sep 2026',
      bullets: {
        'account-automation': 'Automaticé la creación dinámica de cuentas con Pipedream, reduciendo aproximadamente 6 horas de trabajo manual por semana.',
        'publisher-integrations': 'Completé más del 85 % de las integraciones de publishers en menos de 10 días en promedio.',
        'data-centralization': 'Reduje en más de un 75 % los errores por redundancia al centralizar los datos interdepartamentales en una única fuente de verdad.',
        'etl-reporting': 'Desarrollé scripts en Python y Node.js, procesos ETL y reportes con pandas para agilizar los flujos operativos y el manejo de datos.',
        'business-platforms': 'Construí y mantuve integraciones de API con publishers y socios, automatizaciones, herramientas internas y recursos para publishers en distintos sistemas de negocio.'
      }
    },
    {
      role: 'Asistente de Pruebas',
      date: 'Abr 2025 - May 2025',
      bullets: {
        'qa-test-cases': 'Ejecuté casos de prueba funcionales y no funcionales de QA para sistemas electorales, completando el 100 % de los casos asignados dentro del plazo.',
        'machine-provisioning': 'Automaticé parcialmente el aprovisionamiento de máquinas, reduciendo en aproximadamente un 15 % el tiempo de configuración por unidad.',
        'critical-defect': 'Identifiqué, reproduje y reporté un defecto crítico de software que orientó versiones posteriores.'
      }
    }
  ] as { role: string; date: string; bullets: Record<string, string> }[],

  education: [{ degree: 'Licenciatura', field: 'Ingeniería en Sistemas Computacionales', years: 'Ene 2021 - Jun 2026' }]
};
