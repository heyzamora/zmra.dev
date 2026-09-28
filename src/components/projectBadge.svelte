<script lang="ts">
  import { FolderGit2 } from 'lucide-svelte';
  import { projects } from '@/data/projects';

  let { project }: { project: string } = $props();

  const match = projects.find((p) => p.title === project);
</script>

{#if match}
  <a
    href={match.url ?? `/blog?project=${encodeURIComponent(project)}`}
    target={match.url ? '_blank' : undefined}
    rel={match.url ? 'noopener' : undefined}
    class="group inline-flex w-max items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1 text-xs text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
  >
    {#if match.icon}
      {#if typeof match.icon === 'string'}
        <img src={match.icon} alt={project} class="h-3.5 w-3.5" />
      {:else}
        <match.icon width={14} height={14} class="flex-shrink-0" />
      {/if}
    {:else}
      <FolderGit2 size={14} strokeWidth={1.5} />
    {/if}
    <span>Building {project}</span>
  </a>
{:else}
  <span
    class="inline-flex w-max items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
  >
    <FolderGit2 size={14} strokeWidth={1.5} />
    <span>Building {project}</span>
  </span>
{/if}
