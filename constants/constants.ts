import { Categories } from '../types/categories.ts';
import { ElementKey, Element } from '../types/element.ts';

export const elements: Record<ElementKey, Element> = {
  // PROGRAMMING LANGUAGE
  typescript: {
    name: 'TypeScript',
    shortName: 'TS',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 6,
  },
  javascript: {
    name: 'JavaScript',
    shortName: 'JS',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 6,
  },
  bash: {
    name: 'Bash',
    shortName: 'Bash',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 3,
  },
  dart: {
    name: 'Dart',
    shortName: 'Dart',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 2,
  },
  go: {
    name: 'GO',
    shortName: 'GO',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 3,
  },

  php: {
    name: 'PHP',
    shortName: 'PHP',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 3,
  },
  python: {
    name: 'Python',
    shortName: 'Python',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 3,
  },

  java: {
    name: 'Java',
    shortName: 'Java',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 3,
  },

  html: {
    name: 'HTML',
    shortName: 'HTML',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 6,
  },

  css: {
    name: 'CSS',
    shortName: 'CSS',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 6,
  },
  lua: {
    name: 'LUA',
    shortName: 'LUA',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 1,
  },
  ruby: {
    name: 'Ruby',
    shortName: 'Ruby',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 4,
  },
  sql: {
    name: 'SQL',
    shortName: 'SQL',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 4,
  },
  'no-sql': {
    name: 'NoSQL',
    shortName: 'NoSQL',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 1,
  },
  graphql: {
    name: 'GraphQL',
    shortName: 'GraphQL',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 4,
  },

  // WANT TO LEARN

  flask: {
    name: 'Flask',
    shortName: 'Flask',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  cpp: {
    name: 'C++',
    shortName: 'C++',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  clojure: {
    name: 'Clojure',
    shortName: 'Clojure',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  elm: {
    name: 'Elm',
    shortName: 'Elm',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  elixir: {
    name: 'Elixir',
    shortName: 'Elixir',
    category: Categories.PROGRAMMING_LANGUAGE,
    fluency: 1,
  },
  fsharp: {
    name: 'F#',
    shortName: 'F#',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  Haskell: {
    name: 'Haskell',
    shortName: 'Haskell',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  rust: {
    name: 'Rust',
    shortName: 'Rust',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  pytorch: {
    name: 'PyTorch',
    shortName: 'Torch',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  webgpu: {
    name: 'WebGPU',
    shortName: 'WebGPU',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  webgl: {
    name: 'WebGL',
    shortName: 'WebGL',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  rxjs: {
    name: 'RxJS',
    shortName: 'Rx',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },

  r: {
    name: 'R',
    shortName: 'R',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },

  tensorflow: {
    name: 'TensorFlow',
    shortName: 'TF',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  edge: {
    name: 'Edge',
    shortName: 'Edge',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  astro: {
    name: 'Astro',
    shortName: 'Astro',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },
  typeORM: {
    name: 'TypeORM',
    shortName: 'TypeORM',
    category: Categories.WANT_TO_LEARN,
    fluency: 0,
  },

  // Frameworks
  react: {
    name: 'React JS',
    shortName: 'React',
    category: Categories.FRAMEWORK,
    fluency: 6,
  },
  vue: {
    name: 'VueJS',
    shortName: 'VUE',
    category: Categories.FRAMEWORK,
    fluency: 4,
  },
  svelte: {
    name: 'Svelte',
    shortName: 'Svelte',
    category: Categories.FRAMEWORK,
    fluency: 3,
  },
  solid: {
    name: 'Solid JS',
    shortName: 'SolidJS',
    category: Categories.FRAMEWORK,
    fluency: 5,
  },
  fresh: {
    name: 'Fresh',
    shortName: 'Fresh',
    category: Categories.FRAMEWORK,
    fluency: 5,
  },
  angular: {
    name: 'Angular JS',
    shortName: 'Angular',
    category: Categories.FRAMEWORK,
    fluency: 1,
  },
  next: {
    name: 'NextJS',
    shortName: 'Next',
    category: Categories.FRAMEWORK,
    fluency: 5,
  },
  remix: {
    name: 'Remix',
    shortName: 'Remix',
    category: Categories.FRAMEWORK,
    fluency: 3,
  },
  Gatsby: {
    name: 'Gatsby',
    shortName: 'Gatsby',
    category: Categories.FRAMEWORK,
    fluency: 2,
  },
  ionic: {
    name: 'Ionic',
    shortName: 'Ionic',
    category: Categories.FRAMEWORK,
    fluency: 5,
  },
  'react-native': {
    name: 'React Native',
    shortName: 'React Native',
    category: Categories.FRAMEWORK,
    fluency: 3,
  },
  flutter: {
    name: 'Flutter',
    shortName: 'Flutter',
    category: Categories.FRAMEWORK,
    fluency: 2,
  },
  nuxt: {
    name: 'NuxtJS',
    shortName: 'Nuxt',
    category: Categories.FRAMEWORK,
    fluency: 2,
  },
  sveltekit: {
    name: 'SvelteKit',
    shortName: 'SvelteKit',
    category: Categories.FRAMEWORK,
    fluency: 3,
  },
  express: {
    name: 'Express',
    shortName: 'Express',
    category: Categories.FRAMEWORK,
    fluency: 4,
  },

  // Libraries

  redux: {
    name: 'Redux',
    shortName: 'Redux',
    category: Categories.LIBRARY,
    fluency: 5,
  },
  apollo: {
    name: 'Apollo',
    shortName: 'Apollo',
    category: Categories.LIBRARY,
    fluency: 5,
  },
  relay: {
    name: 'Relay',
    shortName: 'Relay',
    category: Categories.LIBRARY,
    fluency: 4,
  },
  nest: {
    name: 'Nest',
    shortName: 'Nest',
    category: Categories.LIBRARY,
    fluency: 1,
  },
  d3: {
    name: 'D3',
    shortName: 'D3',
    category: Categories.LIBRARY,
    fluency: 3,
  },
  three: {
    name: 'ThreeJS',
    shortName: 'Three',
    category: Categories.LIBRARY,
    fluency: 1,
  },
  jquery: {
    name: 'jQuery',
    shortName: 'jQuery',
    category: Categories.LIBRARY,
    fluency: 5,
  },
  jest: {
    name: 'Jest',
    shortName: 'Jest',
    category: Categories.LIBRARY,
    fluency: 5,
  },
  cypress: {
    name: 'Cypress',
    shortName: 'Cypress',
    category: Categories.LIBRARY,
    fluency: 4,
  },
  storybook: {
    name: 'Storybook',
    shortName: 'Storybook',
    category: Categories.LIBRARY,
    fluency: 5,
  },
  tRPC: {
    name: 'tRPC',
    shortName: 'tRPC',
    category: Categories.LIBRARY,
    fluency: 3,
  },
  prisma: {
    name: 'Prisma',
    shortName: 'Prisma',
    category: Categories.LIBRARY,
    fluency: 3,
  },
  tailwind: {
    name: 'Tailwind',
    shortName: 'Tailwind',
    category: Categories.LIBRARY,
    fluency: 5,
  },
  'react-query': {
    name: 'React Query',
    shortName: 'React Query',
    category: Categories.LIBRARY,
    fluency: 3,
  },

  // DATABASES
  mysql: {
    name: 'MySQL',
    shortName: 'MySQL',
    category: Categories.DATABASES,
    fluency: 3,
  },
  postgres: {
    name: 'PostgreSQL',
    shortName: 'Postgres',
    category: Categories.DATABASES,
    fluency: 3,
  },

  redis: {
    name: 'Redis',
    shortName: 'Redis',
    category: Categories.DATABASES,
    fluency: 2,
  },

  firestore: {
    name: 'FireStore',
    shortName: 'FireStore',
    category: Categories.DATABASES,
    fluency: 4,
  },

  mongo: {
    name: 'MongoDB',
    shortName: 'MongoDB',
    category: Categories.DATABASES,
    fluency: 3,
  },

  // OTHER

  node: {
    name: 'NodeJS',
    shortName: 'Node',
    category: Categories.OTHER,
    fluency: 4,
  },
  deno: {
    name: 'Deno',
    shortName: 'Deno',
    category: Categories.OTHER,
    fluency: 3,
  },
  bun: {
    name: 'Bun',
    shortName: 'Bun',
    category: Categories.OTHER,
    fluency: 1,
  },
  sass: {
    name: 'Sass',
    shortName: 'SASS',
    category: Categories.OTHER,
    fluency: 3,
  },
  rest: {
    name: 'REST',
    shortName: 'REST',
    category: Categories.OTHER,
    fluency: 5,
  },
  git: {
    name: 'GIT',
    shortName: 'GIT',
    category: Categories.OTHER,
    fluency: 5,
  },
  accessibility: {
    name: 'Accessibility',
    shortName: 'a11y',
    category: Categories.OTHER,
    fluency: 5,
  },
  mentoring: {
    name: 'Mentoring',
    shortName: 'Mentoring',
    category: Categories.OTHER,
    fluency: 6,
  },
  network: {
    name: 'Network',
    shortName: 'Network',
    category: Categories.OTHER,
    fluency: 3,
  },
  image: {
    name: 'Image',
    shortName: 'Image',
    category: Categories.OTHER,
    fluency: 5,
  },

  seo: {
    name: 'SEO',
    shortName: 'SEO',
    category: Categories.OTHER,
    fluency: 6,
  },
  SEM: {
    name: 'SEM',
    shortName: 'SEM',
    category: Categories.OTHER,
    fluency: 4,
  },
  agile: {
    name: 'Agile',
    shortName: 'Agile',
    category: Categories.OTHER,
    fluency: 4,
  },
  scrum: {
    name: 'Scrum',
    shortName: 'Scrum',
    category: Categories.OTHER,
    fluency: 4,
  },

  // BUILD
  webpack: {
    name: 'Webpack',
    shortName: 'Webpack',
    category: Categories.BUILD,
    fluency: 4,
  },
  parcel: {
    name: 'Parcel',
    shortName: 'Parcel',
    category: Categories.BUILD,
    fluency: 2,
  },
  vite: {
    name: 'Vite',
    shortName: 'Vite',
    category: Categories.BUILD,
    fluency: 2,
  },

  snowpack: {
    name: 'Snowpack',
    shortName: 'Snowpack',
    category: Categories.BUILD,
    fluency: 1,
  },

  gulp: {
    name: 'Gulp',
    shortName: 'Gulp',
    category: Categories.BUILD,
    fluency: 2,
  },
  grunt: {
    name: 'Grunt',
    shortName: 'Grunt',
    category: Categories.BUILD,
    fluency: 2,
  },

  // CLOUD
  aws: {
    name: 'AWS',
    shortName: 'AWS',
    category: Categories.CLOUD,
    fluency: 4,
  },
  gcp: {
    name: 'Google Cloud Platform',
    shortName: 'GCP',
    category: Categories.CLOUD,
    fluency: 2,
  },
  azure: {
    name: 'Microsoft Azure',
    shortName: 'Azure',
    category: Categories.CLOUD,
    fluency: 2,
  },
  vercel: {
    name: 'Vercel',
    shortName: 'Vercel',
    category: Categories.CLOUD,
    fluency: 3,
  },
  netlify: {
    name: 'Netlify',
    shortName: 'Netlify',
    category: Categories.CLOUD,
    fluency: 4,
  },
  firebase: {
    name: 'Firebase',
    shortName: 'Firebase',
    category: Categories.CLOUD,
    fluency: 5,
  },
  linode: {
    name: 'Linode',
    shortName: 'Linode',
    category: Categories.CLOUD,
    fluency: 4,
  },
  'digital-ocean': {
    name: 'Digital Ocean',
    shortName: 'Digital Ocean',
    category: Categories.CLOUD,
    fluency: 4,
  },

  // SERVER
  apache: {
    name: 'Apache',
    shortName: 'Apache',
    category: Categories.SERVER,
    fluency: 3,
  },
  nginx: {
    name: 'nginx',
    shortName: 'nginx',
    category: Categories.SERVER,
    fluency: 4,
  },

  // SAAS PAAS

  optimizely: {
    name: 'Optimizely',
    shortName: 'Optimizely',
    category: Categories.SAAS_PAAS,
    fluency: 4,
  },
  contentful: {
    name: 'Contentful',
    shortName: 'Contentful',
    category: Categories.SAAS_PAAS,
    fluency: 4,
  },
  sanity: {
    name: 'Sanity',
    shortName: 'Sanity',
    category: Categories.SAAS_PAAS,
    fluency: 2,
  },
  strapi: {
    name: 'Strapi',
    shortName: 'Strapi',
    category: Categories.SAAS_PAAS,
    fluency: 2,
  },
  jenkins: {
    name: 'Jenkins',
    shortName: 'Jenkins',
    category: Categories.SAAS_PAAS,
    fluency: 4,
  },
  kubernetes: {
    name: 'Kubernetes',
    shortName: 'Kubernetes',
    category: Categories.SAAS_PAAS,
    fluency: 3,
  },
  docker: {
    name: 'Docker',
    shortName: 'Docker',
    category: Categories.SAAS_PAAS,
    fluency: 4,
  },

  jira: {
    name: 'Jira',
    shortName: 'Jira',
    category: Categories.SAAS_PAAS,
    fluency: 5,
  },

  trello: {
    name: 'Trello',
    shortName: 'Trello',
    category: Categories.SAAS_PAAS,
    fluency: 5,
  },
  codepen: {
    name: 'Codepen',
    shortName: 'Codepen',
    category: Categories.SAAS_PAAS,
    fluency: 5,
  },
  miro: {
    name: 'Miro',
    shortName: 'Miro',
    category: Categories.SAAS_PAAS,
    fluency: 4,
  },
  figma: {
    name: 'Figma',
    shortName: 'Figma',
    category: Categories.SAAS_PAAS,
    fluency: 2,
  },
  wordpress: {
    name: 'WordPress',
    shortName: 'WP',
    category: Categories.SAAS_PAAS,
    fluency: 6,
  },
  drupal: {
    name: 'Drupal',
    shortName: 'Drupal',
    category: Categories.SAAS_PAAS,
    fluency: 4,
  },
  magento: {
    name: 'Magento',
    shortName: 'Magento',
    category: Categories.SAAS_PAAS,
    fluency: 3,
  },
  joomla: {
    name: 'Joomla',
    shortName: 'Joomla',
    category: Categories.SAAS_PAAS,
    fluency: 3,
  },
  shopify: {
    name: 'Shopify',
    shortName: 'Shopify',
    category: Categories.SAAS_PAAS,
    fluency: 2,
  },

  // INTERESTS

  blockchain: {
    name: 'Blockchain',
    shortName: 'Blockchain',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  music: {
    name: 'Music',
    shortName: 'Music',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  gaming: {
    name: 'Gaming',
    shortName: 'Gaming',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  health: {
    name: 'Health',
    shortName: 'Health',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  sustainability: {
    name: 'Sustainability',
    shortName: 'Sustainability',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  science: {
    name: 'Science',
    shortName: 'Science',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  technology: {
    name: 'Technology',
    shortName: 'Technology',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  streaming: {
    name: 'Streaming',
    shortName: 'Streaming',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  design: {
    name: 'Design',
    shortName: 'Design',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  travel: {
    name: 'Travel',
    shortName: 'Travel',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  sports: {
    name: 'Sports',
    shortName: 'Sports',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  education: {
    name: 'Education',
    shortName: 'Education',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  marketing: {
    name: 'Marketing',
    shortName: 'Marketing',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  nonprofit: {
    name: 'Nonprofit',
    shortName: 'Nonprofit',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  'privacy-security': {
    name: 'Privacy and Security',
    shortName: 'Privacy and Security',
    category: Categories.INTERESTS,
    fluency: 1,
  },
  programming: {
    name: 'Programming',
    shortName: 'Programming',
    category: Categories.INTERESTS,
    fluency: 1,
  },
};
