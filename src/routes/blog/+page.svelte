<script lang="ts">
  import { page } from '$app/state';
  import { cn } from '@/utils';
  import ViewContainer from '@/components/viewContainer.svelte';
  import ProjectBadge from '@/components/projectBadge.svelte';

  import { routeAnimation } from '@/ui/shared';
  import { publishedPosts } from '@/data/posts';
  import { Newspaper, X } from 'lucide-svelte';

  let projectFilter = $derived(page.url.searchParams.get('project'));
  let posts = $derived(
    projectFilter ? publishedPosts.filter((post) => post.project === projectFilter) : publishedPosts
  );

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC'
    });
</script>

<svelte:head>
  <title>Blog - zmra.dev</title>
  <meta property="og:title" content="César Zamora" />
  <meta property="og:description" content="Writing about what I'm building" />
  <meta name="image" property="og:image" content="https://zmra.dev/images/readme-img.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <link rel="alternate" type="application/rss+xml" title="César Zamora's Blog" href="/blog/rss.xml" />
</svelte:head>

<ViewContainer class={cn(routeAnimation, 'flex flex-col space-y-4')}>
  <h1 class="text-xl font-medium">Blog</h1>

  <div
    class="flex w-full items-center justify-between space-x-2 text-neutral-600 dark:text-neutral-400"
  >
    <div class="flex items-center space-x-2">
      <Newspaper size={14} strokeWidth={1.5} />
      <p class="font-mono text-xs">
        {posts.length}
        {posts.length > 1 ? 'posts' : 'post'}
      </p>
    </div>
    <a href="/blog/rss.xml" class="font-mono text-xs opacity-70 hover:opacity-100">RSS</a>
  </div>

  {#if projectFilter}
    <a
      href="/blog"
      class="group inline-flex w-max items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
    >
      <span>Filtering: {projectFilter}</span>
      <X size={12} strokeWidth={1.5} />
    </a>
  {/if}

  {#if posts.length === 0}
    <p class="text-sm text-neutral-600 dark:text-neutral-400">Nothing here yet — check back soon.</p>
  {/if}

  <div class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
    {#each posts as post}
      <div class="flex flex-col gap-1.5 py-4 first:pt-0">
        <div class="flex items-center justify-between gap-2">
          <a href="/blog/{post.slug}" class="group">
            <h2 class="font-medium group-hover:underline">{post.title}</h2>
          </a>
          <time class="flex-shrink-0 font-mono text-xs text-neutral-600 dark:text-neutral-400">
            {formatDate(post.date)}
          </time>
        </div>
        <p class="text-sm text-neutral-600 dark:text-neutral-400">{post.description}</p>
        {#if post.project}
          <ProjectBadge project={post.project} />
        {/if}
      </div>
    {/each}
  </div>
</ViewContainer>
