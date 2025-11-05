import type { Component } from 'svelte';
import type { Stack } from '@/types/featuredProjects.types';

import Github from '@/icons/social/github.svelte';

import Antd from '@/icons/stack/antd.svelte';
import Cli from '@/icons/stack/cli.svelte';
import Figma from '@/icons/stack/figma.svelte';
import Graphql from '@/icons/stack/graphql.svelte';
import JavaScript from '@/icons/stack/javascript.svelte';
import Nestjs from '@/icons/stack/nestjs.svelte';
import Nextjs from '@/icons/stack/nextjs.svelte';
import Postgresql from '@/icons/stack/postgresql.svelte';
import Prisma from '@/icons/stack/prisma.svelte';
import Python from '@/icons/stack/python.svelte';
import React from '@/icons/stack/react.svelte';
import Radix from '@/icons/stack/radix.svelte';
import Railway from '@/icons/stack/railway.svelte';
import Sass from '@/icons/stack/sass.svelte';
import Shadcn from '@/icons/stack/shadcn.svelte';
import Storybook from '@/icons/stack/storybook.svelte';
import StyledComponents from '@/icons/stack/styled-components.svelte';
import Svelteicon from '@/icons/stack/svelteicon.svelte';
import Tailwindcss from '@/icons/stack/tailwindcss.svelte';
import Typescript from '@/icons/stack/typescript.svelte';
import Vercel from '@/icons/stack/vercel.svelte';

interface Technologies {
  stack: Stack;
  icon: Component | string;
}

export const technologies: Technologies[] = [
  {
    stack: 'Ant Design',
    icon: Antd
  },
  {
    stack: 'Auth.js',
    icon: 'https://raw.githubusercontent.com/heyzamora/zmra.dev/master/src/icons/stack/authjs.png'
  },
  {
    stack: 'CLI',
    icon: Cli
  },
  {
    stack: 'Figma',
    icon: Figma
  },
  {
    stack: 'Github',
    icon: Github
  },
  {
    stack: 'GraphQL',
    icon: Graphql
  },
  {
    stack: 'JavaScript',
    icon: JavaScript
  },
  {
    stack: 'NestJS',
    icon: Nestjs
  },
  {
    stack: 'Next.js',
    icon: Nextjs
  },
  {
    stack: 'PostgreSQL',
    icon: Postgresql
  },
  {
    stack: 'Prisma',
    icon: Prisma
  },
  {
    stack: 'Python',
    icon: Python
  },
  {
    stack: 'Radix UI',
    icon: Radix
  },
  {
    stack: 'Railway',
    icon: Railway
  },
  {
    stack: 'React',
    icon: React
  },
  {
    stack: 'SCSS/SASS',
    icon: Sass
  },
  {
    stack: 'Shadcn',
    icon: Shadcn
  },
  {
    stack: 'Storybook',
    icon: Storybook
  },
  {
    stack: 'Stripe',
    icon: ''
  },
  {
    stack: 'Styled-Components',
    icon: StyledComponents
  },
  {
    stack: 'Svelte',
    icon: Svelteicon
  },
  {
    stack: 'Tailwind CSS',
    icon: Tailwindcss
  },
  {
    stack: 'TypeScript',
    icon: Typescript
  },
  {
    stack: 'Vercel',
    icon: Vercel
  }
];
