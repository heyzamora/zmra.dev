<script lang="ts">
  import type { iProjects } from '@/types/featuredProjects.types';

  import { mode } from 'mode-watcher';
  import { ExternalLink, Link, Newspaper } from 'lucide-svelte';

  import Github from '@/icons/social/github.svelte';
  import Badge from '@/ui/badge/badge.svelte';
  import SpotlightBadge from '@/ui/badge/spotlight-badge.svelte';
  import TechBadgeList from './techBadgeList.svelte';
    import Button from '@/ui/button/button.svelte';

  let div: HTMLDivElement | undefined = $state();
  let focused = false;
  let position = $state({ x: 0, y: 0 });
  let opacity = $state(0);
  let i: number = 0;
  let positions: { x: number; y: number }[] = [{ x: 0, y: 0 }];

  const handleMouseMove = (e: MouseEvent) => {
    if (!div || focused) return;
    const rect = div.getBoundingClientRect();
    position = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    positions[i] = position;
  };

  const handleFocus = () => {
    focused = true;
    opacity = 1;
  };

  const handleBlur = () => {
    focused = false;
    opacity = 0;
  };

  const handleMouseEnter = () => {
    opacity = 1;
  };

  const handleMouseLeave = () => {
    opacity = 0;
  };

  let {
    title,
    description,
    icon: Icon,
    url,
    githubUrl,
    tags,
    status,
    color,
    blurColor,
    freelance,
    postCount = 0
  }: iProjects & { postCount?: number } = $props();

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'live':
        return 'success';
      case 'wip':
        return 'warning';
      case 'archived':
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string | null) => {
    switch (status) {
      case 'live':
        return '🌎';
      case 'wip':
        return '🚧';
      case 'archived':
        return '🗄️';
      default:
        return '';
    }
  };
</script>

<div
  role="contentinfo"
  bind:this={div}
  onmousemove={handleMouseMove}
  onfocus={handleFocus}
  onblur={handleBlur}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  class="relative flex flex-col rounded-md border-[0.0625rem] border-neutral-300 px-3 py-4 shadow-sm dark:border-neutral-800"
>
  <input
    tabindex="-1"
    aria-hidden="true"
    class="pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-[0.310rem] border transition-opacity duration-500 placeholder:select-none border-black/50"
    style="
      opacity: {opacity};
      -webkit-mask-image: radial-gradient(30% 30px at {position.x}px {position.y}px, {color ?? 'black'} 45%, transparent);
      background-color: transparent;
      border-color: {color ? color : $mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
    "
  />
  <div
    class="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300"
    style="
      opacity: {opacity};
      background: radial-gradient(500px circle at {position.x}px {position.y}px, {blurColor ?? 'rgba(97, 97, 97, 0.1)'}, transparent 60%);
      "
      ></div>
  <div class="flex flex-col gap-3 justify-between h-full">
    <div class="flex flex-col gap-3">
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center space-x-[0.625rem]">
        {#if Icon}
          {#if typeof Icon === 'string'}
            <img src={Icon} alt={title} class="h-6 w-6" />
          {:else}
            <Icon width={24} height={24} class="flex-shrink-0" />
          {/if}
        {/if}
        <p class="font-medium">{title}</p>
        {#if freelance}
          <SpotlightBadge>Freelance</SpotlightBadge>
        {/if}
      </div>
      <div class="flex items-center gap-2">
        {#if status !== null}
          <Badge variant={getStatusColor(status)}>
            <span class="flex items-center gap-1">
              {getStatusIcon(status)}
              <span class={status === 'wip' ? 'uppercase' : 'capitalize'}>{status}</span>
            </span>
          </Badge>
        {/if}
      </div>
    </div>
    <p class="text-sm dark:text-neutral-400">{description}</p>
    <TechBadgeList {tags} />
  </div>
    {#if url || githubUrl || postCount > 0}
    <div class="flex items-center gap-2 justify-end">
      {#if postCount > 0}
        <a
          href="/blog?project={encodeURIComponent(title)}"
          class="group mr-auto flex items-center gap-1 text-xs text-neutral-600 transition-colors duration-150 hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          <Newspaper size={13} strokeWidth={1.5} />
          <span class="underline decoration-dotted underline-offset-[0.1875rem]">
            {postCount}
            {postCount > 1 ? 'posts' : 'post'}
          </span>
        </a>
      {/if}
      {#if url}
        <Button variant="outline" size="sm" class="space-x-1 border group border-gray-500 bg-gray-500/10 hover:bg-gray-500/20" target="_blank" rel="noopener" href={url}>
          <span class="decoration-dotted underline-offset-[0.3125rem] group-hover:underline">Live</span>
          <span class="relative size-4">
            <Link height={16} class="absolute size-4 transition-all duration-100 group-hover:opacity-0 group-hover:size-0 group-focus-within:opacity-0 group-focus-within:size-0" />
            <ExternalLink height={16} class="absolute size-0 transition-all duration-100 group-hover:opacity-100 group-hover:size-4 group-focus-within:opacity-100 group-focus-within:size-4" />
          </span>
        </Button>
      {/if}
      {#if githubUrl}
        <Button variant="outline" size="sm" class="space-x-1 border group border-gray-500 bg-gray-500/10 hover:bg-gray-500/20" target="_blank" rel="noopener" href={githubUrl}>
          <span class="decoration-dotted underline-offset-[0.3125rem] group-hover:underline">Repo</span>
          <span class="relative size-4">
            <Github height={16} styles="absolute size-4 transition-all duration-100 group-hover:opacity-0 group-hover:size-0 group-hover:translate-x-[0.09375rem] group-focus-within:opacity-0 group-focus-within:size-0 group-focus-within:translate-x-[0.09375rem]" />
            <ExternalLink height={16} class="absolute size-0 transition-all duration-100 group-hover:opacity-100 group-hover:size-4 group-hover:translate-x-[0.09375rem] group-focus-within:opacity-100 group-focus-within:size-4 group-focus-within:translate-x-[0.09375rem]" />
          </span>
        </Button>
      {/if}
    </div>
    {/if}
  </div>
</div>
