import {
  siCplusplus,
  siDocker,
  siExpress,
  siGit,
  siJavascript,
  siLinux,
  siMongodb,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siSpringboot
} from 'simple-icons';

/** Brand marks come from the simple-icons package, keyed by the skill ids in data/skills.ts. */
export const skillIcons: Record<string, { path: string; title: string }> = {
  python: siPython,
  java: siOpenjdk,
  javascript: siJavascript,
  cpp: siCplusplus,
  react: siReact,
  node: siNodedotjs,
  'spring-boot': siSpringboot,
  express: siExpress,
  git: siGit,
  docker: siDocker,
  linux: siLinux,
  postman: siPostman,
  mysql: siMysql,
  postgresql: siPostgresql,
  mongodb: siMongodb
};
