import type { iProjects } from '@/types/featuredProjects.types';
import { featuredProjects } from './featuredProjects';

export const projects: iProjects[] = featuredProjects.concat([
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
    title: 'Github Profile - heyzamora',
    description: 'Github Profile README Generator using Python and Github Actions',
    tags: ['Python', 'Github'],
    url: 'https://github.com/heyzamora',
    githubUrl: 'https://github.com/heyzamora/heyzamora',
    status: 'live'
  },
  {
    title: 'Zamora',
    description: '🪄 My personal website.',
    tags: ['Svelte', 'Shadcn', 'Tailwind CSS', 'TypeScript', 'Github', 'Vercel'],
    url: 'https://zmra.dev',
    githubUrl: 'https://github.com/heyzamora/zmra.dev',
    icon: 'https://raw.githubusercontent.com/heyzamora/zmra.dev/master/static/images/logo_svg.svg',
    status: 'live'
  }
]);
