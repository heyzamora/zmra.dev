import type { iProjects } from '@/types/featuredProjects.types';

import CieserLogo from '@/icons/companies/cieser.svelte';
import InsightedLogo from '@/icons/projects/insighted.svelte';

export const featuredProjects: iProjects[] = [
  {
    title: 'Mark',
    description:
      '🔗 An open-source habit tracker to help you build good habits and break bad ones.',
    tags: [
      'Next.js',
      'Tailwind CSS',
      'Shadcn',
      'TypeScript',
      'Vercel',
      'Github',
      'Railway',
      'Auth.js'
    ],
    githubUrl: 'https://github.com/heyzamora/mark',
    url: 'https://mark.zmra.dev',
    icon: 'https://raw.githubusercontent.com/heyzamora/mark/main/public/assets/logo.svg',
    status: 'live',
    color: '#008904',
    blurColor: 'rgba(0, 137, 4, 0.1)'
  },
  {
    title: 'InsightEd',
    description:
      '🔍 A platform that helps teachers track and manage students, classes, and academic progress.',
    tags: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Vercel',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Railway'
    ],
    icon: InsightedLogo,
    status: 'wip'
  },
  {
    title: 'Gen UUID',
    description: '✍️ An open-source UUID generator for the terminal.',
    tags: ['Python', 'CLI'],
    githubUrl: 'https://github.com/heyzamora/gen-uuid',
    icon: 'https://raw.githubusercontent.com/heyzamora/gen-uuid/main/public/images/logo.svg',
    status: null,
    color: '#52b4a5',
    blurColor: 'rgba(82, 180, 165, 0.1)'
  },
  {
    title: 'CIESER',
    description: '🏠 A modern landing page for a Chilean company',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Figma', 'Vercel'],
    url: 'https://cieser.cl',
    icon: CieserLogo,
    status: 'live',
    color: '#333399',
    blurColor: 'rgba(51, 51, 153, 0.1)'
  }
];
