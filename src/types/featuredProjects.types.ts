export type Stack =
  | 'Ant Design'
  | 'Auth.js'
  | 'CLI'
  | 'Expo'
  | 'Figma'
  | 'Github'
  | 'GraphQL'
  | 'JavaScript'
  | 'NestJS'
  | 'Next.js'
  | 'PostgreSQL'
  | 'Prisma'
  | 'Python'
  | 'Radix UI'
  | 'Railway'
  | 'React'
  | 'SCSS/SASS'
  | 'Shadcn'
  | 'SQLite'
  | 'Storybook'
  | 'Stripe'
  | 'Styled-Components'
  | 'Svelte'
  | 'Tailwind CSS'
  | 'TypeScript'
  | 'Vercel';

export interface iProjects {
  title: string;
  description: string;
  tags: Stack[];
  status: 'live' | 'wip' | 'archived' | null;
  url?: string;
  githubUrl?: string;
  icon?: any;
  color?: string;
  blurColor?: string;
  freelance?: boolean;
}
