import type { iBlogPost, iBlogPostMeta } from '@/types/blog.type';

const modules = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<
  string,
  { metadata: iBlogPostMeta }
>;

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '');
}

export const allPosts: iBlogPost[] = Object.entries(modules)
  .map(([path, mod]) => ({ slug: slugFromPath(path), ...mod.metadata }))
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));

export const publishedPosts: iBlogPost[] = allPosts.filter((post) => post.published);

export function getPostsForProject(projectTitle: string): iBlogPost[] {
  return publishedPosts.filter((post) => post.project === projectTitle);
}
