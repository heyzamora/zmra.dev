import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { allPosts } from '@/data/posts';

export const load: PageLoad = async ({ params }) => {
  const meta = allPosts.find((post) => post.slug === params.slug);

  if (!meta) {
    error(404, 'Post not found');
  }

  const post = await import(`../../../posts/${params.slug}.md`).catch(() => {
    error(404, 'Post not found');
  });

  return {
    meta,
    content: post.default
  };
};
