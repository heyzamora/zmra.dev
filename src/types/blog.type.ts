import type { Stack } from './featuredProjects.types';

export interface iBlogPostMeta {
  title: string;
  description: string;
  date: string;
  published: boolean;
  project?: string;
  tags?: Stack[];
}

export interface iBlogPost extends iBlogPostMeta {
  slug: string;
}
