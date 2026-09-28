<script lang="ts">
  import { page } from '$app/state';
  import { cn } from '@/utils';
  import ViewContainer from '@/components/viewContainer.svelte';
  import ProjectBadge from '@/components/projectBadge.svelte';
  import TechBadgeList from '@/components/techBadgeList.svelte';
  import { routeAnimation } from '@/ui/shared';
  import { ArrowLeft } from 'lucide-svelte';

  let { data } = $props();
  let { meta, content: Content } = $derived(data);
  let ogImage = $derived(`${page.url.origin}/blog/${meta.slug}/og.png`);
  let postUrl = $derived(`${page.url.origin}/blog/${meta.slug}`);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
</script>

<svelte:head>
  <title>{meta.title} - zmra.dev</title>
  <meta property="og:type" content="article" />
  <meta property="og:url" content={postUrl} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@heyzamora__" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<ViewContainer class={cn(routeAnimation, 'flex flex-col space-y-4')}>
  <a
    href="/blog"
    class="group flex w-max items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400"
  >
    <ArrowLeft
      size={14}
      strokeWidth={1.5}
      class="duration-150 group-hover:-translate-x-[0.1875rem]"
    />
    <span>Back to blog</span>
  </a>

  <div class="flex flex-col space-y-2">
    <h1 class="text-xl font-medium">{meta.title}</h1>
    <div class="flex flex-wrap items-center gap-2 text-neutral-600 dark:text-neutral-400">
      <time class="font-mono text-xs">{formatDate(meta.date)}</time>
      {#if meta.project}
        <ProjectBadge project={meta.project} />
      {/if}
    </div>
    {#if meta.tags?.length}
      <TechBadgeList tags={meta.tags} />
    {/if}
  </div>

  <article class="prose prose-neutral max-w-none dark:prose-invert">
    <Content />
  </article>
</ViewContainer>
