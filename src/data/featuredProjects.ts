import type { iProjects } from '@/types/featuredProjects.types';

import CieserLogo from '@/icons/companies/cieser.svelte';
// import InsightedLogo from '@/icons/projects/insighted.svelte'; // used by Lupin, hidden for now
import RoveLogo from '@/icons/projects/rove.svelte';

export const featuredProjects: iProjects[] = [
  {
    title: 'Chubiedits',
    description: '🎬 A portfolio site for a video editor, built to showcase their work and land clients.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Shadcn', 'Vercel', 'Github'],
    url: 'https://chubiedits.zmra.dev',
    icon: '/images/chubiedits.svg',
    status: 'live',
    color: '#a14fff',
    blurColor: 'rgba(161, 79, 255, 0.1)',
    freelance: true
  },
  {
    title: 'Rove',
    description:
      '📱 A local-first mobile app for gig workers to track mileage—no subscriptions, no cloud, data stays on the device.',
    tags: ['React', 'TypeScript', 'Expo', 'SQLite'],
    icon: RoveLogo,
    status: 'wip'
  },
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
  // Lupin is stale for now — hidden but kept for when work resumes.
  // {
  //   title: 'Lupin',
  //   description:
  //     '🔍 A platform that helps teachers track and manage students, classes, and academic progress.',
  //   tags: [
  //     'Next.js',
  //     'Tailwind CSS',
  //     'TypeScript',
  //     'Vercel',
  //     'NestJS',
  //     'PostgreSQL',
  //     'Prisma',
  //     'Railway'
  //   ],
  //   icon: InsightedLogo,
  //   status: 'wip'
  // },
  {
    title: 'CIESER',
    description: '🏠 A modern landing page for a Chilean company',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Figma', 'Vercel'],
    url: 'https://cieser.cl',
    icon: CieserLogo,
    status: 'live',
    color: '#333399',
    blurColor: 'rgba(51, 51, 153, 0.1)',
    freelance: true
  }
];
