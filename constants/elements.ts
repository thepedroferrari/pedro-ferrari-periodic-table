import { Categories } from '../types/categories.ts';
import { ElementKey, Element } from '../types/element.ts';

export const elements: Record<ElementKey, Element> = {
  // PROGRAMMING LANGUAGE
  typescript: {
    name: 'TypeScript',
    shortName: ElementKey.typescript,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 6,
  },
  javascript: {
    name: 'JavaScript',
    shortName: ElementKey.javascript,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 6,
  },
  bash: {
    name: 'Bash',
    shortName: ElementKey.bash,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 3,
  },
  dart: {
    name: 'Dart',
    shortName: ElementKey.dart,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 2,
  },
  go: {
    name: 'GO',
    shortName: ElementKey.go,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 3,
  },

  php: {
    name: 'PHP',
    shortName: ElementKey.php,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 3,
  },
  python: {
    name: 'Python',
    shortName: ElementKey.python,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 4,
  },

  java: {
    name: 'Java',
    shortName: ElementKey.java,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 3,
  },

  html: {
    name: 'HTML',
    shortName: ElementKey.html,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 6,
  },

  css: {
    name: 'CSS',
    shortName: ElementKey.css,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 6,
  },
  lua: {
    name: 'LUA',
    shortName: ElementKey.lua,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 1,
  },
  ruby: {
    name: 'Ruby',
    shortName: ElementKey.ruby,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 4,
  },
  sql: {
    name: 'SQL',
    shortName: ElementKey.sql,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 4,
  },
  'no-sql': {
    name: 'NoSQL',
    shortName: ElementKey['no-sql'],
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 1,
  },
  graphql: {
    name: 'GraphQL',
    shortName: ElementKey.graphql,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 4,
  },

  // WANT TO LEARN

  flask: {
    name: 'Flask',
    shortName: ElementKey.flask,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  cpp: {
    name: 'C++',
    shortName: ElementKey.cpp,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  clojure: {
    name: 'Clojure',
    shortName: ElementKey.clojure,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  elm: {
    name: 'Elm',
    shortName: ElementKey.elm,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  elixir: {
    name: 'Elixir',
    shortName: ElementKey.elixir,
    category: Categories.PROGRAMMING_LANGUAGE,
    level: 1,
  },
  fsharp: {
    name: 'F#',
    shortName: ElementKey.fsharp,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  Haskell: {
    name: 'Haskell',
    shortName: ElementKey.Haskell,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  rust: {
    name: 'Rust',
    shortName: ElementKey.rust,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  pytorch: {
    name: 'PyTorch',
    shortName: ElementKey.pytorch,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  webgpu: {
    name: 'WebGPU',
    shortName: ElementKey.webgpu,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  webgl: {
    name: 'WebGL',
    shortName: ElementKey.webgl,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  rxjs: {
    name: 'RxJS',
    shortName: ElementKey.rxjs,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },

  r: {
    name: 'R',
    shortName: ElementKey.r,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },

  tensorflow: {
    name: 'TensorFlow',
    shortName: ElementKey.tensorflow,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  edge: {
    name: 'Edge',
    shortName: ElementKey.edge,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  astro: {
    name: 'Astro',
    shortName: ElementKey.astro,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },
  typeORM: {
    name: 'TypeORM',
    shortName: ElementKey.typeORM,
    category: Categories.WANT_TO_LEARN,
    level: 0,
  },

  // Frameworks
  react: {
    name: 'React JS',
    shortName: ElementKey.react,
    category: Categories.FRAMEWORK,
    level: 6,
  },
  vue: {
    name: 'VueJS',
    shortName: ElementKey.vue,
    category: Categories.FRAMEWORK,
    level: 4,
  },
  svelte: {
    name: 'Svelte',
    shortName: ElementKey.svelte,
    category: Categories.FRAMEWORK,
    level: 3,
  },
  solid: {
    name: 'Solid JS',
    shortName: ElementKey.solid,
    category: Categories.FRAMEWORK,
    level: 5,
  },
  fresh: {
    name: 'Fresh',
    shortName: ElementKey.fresh,
    category: Categories.FRAMEWORK,
    level: 4,
  },
  angular: {
    name: 'Angular JS',
    shortName: ElementKey.angular,
    category: Categories.FRAMEWORK,
    level: 1,
  },
  next: {
    name: 'NextJS',
    shortName: ElementKey.next,
    category: Categories.FRAMEWORK,
    level: 5,
  },
  remix: {
    name: 'Remix',
    shortName: ElementKey.remix,
    category: Categories.FRAMEWORK,
    level: 3,
  },
  Gatsby: {
    name: 'Gatsby',
    shortName: ElementKey.Gatsby,
    category: Categories.FRAMEWORK,
    level: 2,
  },
  ionic: {
    name: 'Ionic',
    shortName: ElementKey.ionic,
    category: Categories.FRAMEWORK,
    level: 5,
  },
  'react-native': {
    name: 'React Native',
    shortName: ElementKey['react-native'],
    category: Categories.FRAMEWORK,
    level: 3,
  },
  flutter: {
    name: 'Flutter',
    shortName: ElementKey.flutter,
    category: Categories.FRAMEWORK,
    level: 2,
  },
  nuxt: {
    name: 'NuxtJS',
    shortName: ElementKey.nuxt,
    category: Categories.FRAMEWORK,
    level: 2,
  },
  sveltekit: {
    name: 'SvelteKit',
    shortName: ElementKey.sveltekit,
    category: Categories.FRAMEWORK,
    level: 3,
  },
  express: {
    name: 'Express',
    shortName: ElementKey.express,
    category: Categories.FRAMEWORK,
    level: 4,
  },

  // Libraries

  redux: {
    name: 'Redux',
    shortName: ElementKey.redux,
    category: Categories.LIBRARY,
    level: 5,
  },
  apollo: {
    name: 'Apollo',
    shortName: ElementKey.apollo,
    category: Categories.LIBRARY,
    level: 5,
  },
  relay: {
    name: 'Relay',
    shortName: ElementKey.relay,
    category: Categories.LIBRARY,
    level: 4,
  },
  nest: {
    name: 'Nest',
    shortName: ElementKey.nest,
    category: Categories.LIBRARY,
    level: 1,
  },
  d3: {
    name: 'D3',
    shortName: ElementKey.d3,
    category: Categories.LIBRARY,
    level: 3,
  },
  three: {
    name: 'ThreeJS',
    shortName: ElementKey.three,
    category: Categories.LIBRARY,
    level: 1,
  },
  jquery: {
    name: 'jQuery',
    shortName: ElementKey.jquery,
    category: Categories.LIBRARY,
    level: 5,
  },
  jest: {
    name: 'Jest',
    shortName: ElementKey.jest,
    category: Categories.LIBRARY,
    level: 5,
  },
  cypress: {
    name: 'Cypress',
    shortName: ElementKey.cypress,
    category: Categories.LIBRARY,
    level: 4,
  },
  storybook: {
    name: 'Storybook',
    shortName: ElementKey.storybook,
    category: Categories.LIBRARY,
    level: 5,
  },
  tRPC: {
    name: 'tRPC',
    shortName: ElementKey.trpc,
    category: Categories.LIBRARY,
    level: 3,
  },
  prisma: {
    name: 'Prisma',
    shortName: ElementKey.prisma,
    category: Categories.LIBRARY,
    level: 3,
  },
  tailwind: {
    name: 'Tailwind',
    shortName: ElementKey.tailwind,
    category: Categories.LIBRARY,
    level: 5,
  },
  'react-query': {
    name: 'React Query',
    shortName: ElementKey['react-query'],
    category: Categories.LIBRARY,
    level: 3,
  },

  // DATABASES
  mysql: {
    name: 'MySQL',
    shortName: ElementKey.mysql,
    category: Categories.DATABASES,
    level: 3,
  },
  postgres: {
    name: 'PostgreSQL',
    shortName: ElementKey.postgres,
    category: Categories.DATABASES,
    level: 3,
  },

  redis: {
    name: 'Redis',
    shortName: ElementKey.redis,
    category: Categories.DATABASES,
    level: 3,
  },

  firestore: {
    name: 'FireStore',
    shortName: ElementKey.firestore,
    category: Categories.DATABASES,
    level: 4,
  },

  mongo: {
    name: 'MongoDB',
    shortName: ElementKey.mongo,
    category: Categories.DATABASES,
    level: 3,
  },

  // OTHER

  node: {
    name: 'NodeJS',
    shortName: ElementKey.node,
    category: Categories.OTHER,
    level: 4,
  },
  deno: {
    name: 'Deno',
    shortName: ElementKey.deno,
    category: Categories.OTHER,
    level: 3,
  },
  bun: {
    name: 'Bun',
    shortName: ElementKey.bun,
    category: Categories.OTHER,
    level: 1,
  },
  sass: {
    name: 'Sass',
    shortName: ElementKey.sass,
    category: Categories.OTHER,
    level: 3,
  },
  rest: {
    name: 'REST',
    shortName: ElementKey.rest,
    category: Categories.OTHER,
    level: 5,
  },
  git: {
    name: 'GIT',
    shortName: ElementKey.git,
    category: Categories.OTHER,
    level: 5,
  },
  accessibility: {
    name: 'Accessibility',
    shortName: ElementKey.accessibility,
    category: Categories.OTHER,
    level: 5,
  },
  mentoring: {
    name: 'Mentoring',
    shortName: ElementKey.mentoring,
    category: Categories.OTHER,
    level: 6,
  },
  network: {
    name: 'Network',
    shortName: ElementKey.network,
    category: Categories.OTHER,
    level: 3,
  },
  image: {
    name: 'Image',
    shortName: ElementKey.image,
    category: Categories.OTHER,
    level: 5,
  },

  seo: {
    name: 'SEO',
    shortName: ElementKey.seo,
    category: Categories.OTHER,
    level: 6,
  },
  SEM: {
    name: 'SEM',
    shortName: ElementKey.SEM,
    category: Categories.OTHER,
    level: 4,
  },
  agile: {
    name: 'Agile',
    shortName: ElementKey.agile,
    category: Categories.OTHER,
    level: 4,
  },
  scrum: {
    name: 'Scrum',
    shortName: ElementKey.scrum,
    category: Categories.OTHER,
    level: 4,
  },

  // BUILD
  webpack: {
    name: 'Webpack',
    shortName: ElementKey.webpack,
    category: Categories.BUILD,
    level: 4,
  },
  parcel: {
    name: 'Parcel',
    shortName: ElementKey.parcel,
    category: Categories.BUILD,
    level: 2,
  },
  vite: {
    name: 'Vite',
    shortName: ElementKey.vite,
    category: Categories.BUILD,
    level: 2,
  },

  snowpack: {
    name: 'Snowpack',
    shortName: ElementKey.snowpack,
    category: Categories.BUILD,
    level: 1,
  },

  gulp: {
    name: 'Gulp',
    shortName: ElementKey.gulp,
    category: Categories.BUILD,
    level: 2,
  },
  grunt: {
    name: 'Grunt',
    shortName: ElementKey.grunt,
    category: Categories.BUILD,
    level: 2,
  },

  // CLOUD
  aws: {
    name: 'AWS',
    shortName: ElementKey.aws,
    category: Categories.CLOUD,
    level: 4,
  },
  gcp: {
    name: 'Google Cloud Platform',
    shortName: ElementKey.gcp,
    category: Categories.CLOUD,
    level: 4,
  },
  azure: {
    name: 'Microsoft Azure',
    shortName: ElementKey.azure,
    category: Categories.CLOUD,
    level: 2,
  },
  vercel: {
    name: 'Vercel',
    shortName: ElementKey.vercel,
    category: Categories.CLOUD,
    level: 3,
  },
  netlify: {
    name: 'Netlify',
    shortName: ElementKey.netlify,
    category: Categories.CLOUD,
    level: 4,
  },
  firebase: {
    name: 'Firebase',
    shortName: ElementKey.firebase,
    category: Categories.CLOUD,
    level: 5,
  },
  linode: {
    name: 'Linode',
    shortName: ElementKey.linode,
    category: Categories.CLOUD,
    level: 4,
  },
  'digital-ocean': {
    name: 'Digital Ocean',
    shortName: ElementKey['digital-ocean'],
    category: Categories.CLOUD,
    level: 4,
  },

  // SERVER
  apache: {
    name: 'Apache',
    shortName: ElementKey.apache,
    category: Categories.SERVER,
    level: 3,
  },
  nginx: {
    name: 'NGINX',
    shortName: ElementKey.nginx,
    category: Categories.SERVER,
    level: 4,
  },
  caddy: {
    name: 'Caddy',
    shortName: ElementKey.caddy,
    category: Categories.SERVER,
    level: 3,
  },

  // SAAS PAAS

  optimizely: {
    name: 'Optimizely',
    shortName: ElementKey.optimizely,
    category: Categories.SAAS_PAAS,
    level: 4,
  },
  contentful: {
    name: 'Contentful',
    shortName: ElementKey.contentful,
    category: Categories.SAAS_PAAS,
    level: 4,
  },
  sanity: {
    name: 'Sanity',
    shortName: ElementKey.sanity,
    category: Categories.SAAS_PAAS,
    level: 2,
  },
  strapi: {
    name: 'Strapi',
    shortName: ElementKey.strapi,
    category: Categories.SAAS_PAAS,
    level: 2,
  },
  jenkins: {
    name: 'Jenkins',
    shortName: ElementKey.jenkins,
    category: Categories.SAAS_PAAS,
    level: 4,
  },
  kubernetes: {
    name: 'Kubernetes',
    shortName: ElementKey.kubernetes,
    category: Categories.SAAS_PAAS,
    level: 3,
  },
  docker: {
    name: 'Docker',
    shortName: ElementKey.docker,
    category: Categories.SAAS_PAAS,
    level: 4,
  },

  jira: {
    name: 'Jira',
    shortName: ElementKey.jira,
    category: Categories.SAAS_PAAS,
    level: 5,
  },

  trello: {
    name: 'Trello',
    shortName: ElementKey.trello,
    category: Categories.SAAS_PAAS,
    level: 5,
  },
  codepen: {
    name: 'Codepen',
    shortName: ElementKey.codepen,
    category: Categories.SAAS_PAAS,
    level: 5,
  },
  miro: {
    name: 'Miro',
    shortName: ElementKey.miro,
    category: Categories.SAAS_PAAS,
    level: 4,
  },
  figma: {
    name: 'Figma',
    shortName: ElementKey.figma,
    category: Categories.SAAS_PAAS,
    level: 3,
  },
  wordpress: {
    name: 'WordPress',
    shortName: ElementKey.wordpress,
    category: Categories.SAAS_PAAS,
    level: 6,
  },
  drupal: {
    name: 'Drupal',
    shortName: ElementKey.drupal,
    category: Categories.SAAS_PAAS,
    level: 4,
  },
  magento: {
    name: 'Magento',
    shortName: ElementKey.magento,
    category: Categories.SAAS_PAAS,
    level: 3,
  },
  joomla: {
    name: 'Joomla',
    shortName: ElementKey.joomla,
    category: Categories.SAAS_PAAS,
    level: 3,
  },
  shopify: {
    name: 'Shopify',
    shortName: ElementKey.shopify,
    category: Categories.SAAS_PAAS,
    level: 2,
  },

  // INTERESTS

  blockchain: {
    name: 'Blockchain',
    shortName: ElementKey.blockchain,
    category: Categories.INTERESTS,
    level: 4,
  },
  music: {
    name: 'Music',
    shortName: ElementKey.music,
    category: Categories.INTERESTS,
    level: 5,
  },
  gaming: {
    name: 'Gaming',
    shortName: ElementKey.gaming,
    category: Categories.INTERESTS,
    level: 6,
  },
  health: {
    name: 'Health',
    shortName: ElementKey.health,
    category: Categories.INTERESTS,
    level: 6,
  },
  sustainability: {
    name: 'Sustainability',
    shortName: ElementKey.sustainability,
    category: Categories.INTERESTS,
    level: 5,
  },
  science: {
    name: 'Science',
    shortName: ElementKey.science,
    category: Categories.INTERESTS,
    level: 3,
  },
  technology: {
    name: 'Technology',
    shortName: ElementKey.technology,
    category: Categories.INTERESTS,
    level: 6,
  },
  streaming: {
    name: 'Streaming',
    shortName: ElementKey.streaming,
    category: Categories.INTERESTS,
    level: 5,
  },
  design: {
    name: 'Design',
    shortName: ElementKey.design,
    category: Categories.INTERESTS,
    level: 3,
  },
  travel: {
    name: 'Travel',
    shortName: ElementKey.travel,
    category: Categories.INTERESTS,
    level: 2,
  },
  sports: {
    name: 'Sports',
    shortName: ElementKey.sports,
    category: Categories.INTERESTS,
    level: 6,
  },
  education: {
    name: 'Education',
    shortName: ElementKey.education,
    category: Categories.INTERESTS,
    level: 5,
  },
  marketing: {
    name: 'Marketing',
    shortName: ElementKey.marketing,
    category: Categories.INTERESTS,
    level: 3,
  },
  nonprofit: {
    name: 'Nonprofit',
    shortName: ElementKey.nonprofit,
    category: Categories.INTERESTS,
    level: 3,
  },
  'privacy-security': {
    name: 'Privacy and Security',
    shortName: ElementKey['privacy-security'],
    category: Categories.INTERESTS,
    level: 3,
  },
  coding: {
    name: 'Coding',
    shortName: ElementKey.coding,
    category: Categories.INTERESTS,
    level: 6,
  },
};
