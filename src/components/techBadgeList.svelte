<script lang="ts">
  import type { Stack } from '@/types/featuredProjects.types';

  import Badge from '@/ui/badge/badge.svelte';
  import { technologies } from '@/data/technologies';

  let { tags }: { tags: Stack[] } = $props();
</script>

{#if tags.length > 0}
  <div class="flex flex-wrap items-center gap-1 overflow-y-auto">
    {#each tags as tag}
      {#each technologies.filter((s) => s.stack === tag) as { icon: Icon }}
        <Badge extraClasses="whitespace-nowrap">
          {#if typeof Icon === 'string'}
            {#if Icon !== ''}
              <img src={Icon} alt={tag} height={14} width={14} class="flex-shrink-0 size-3.5" />
            {/if}
          {:else}
            <Icon width={14} height={14} class="flex-shrink-0" />
          {/if}
          <span>{tag}</span>
        </Badge>
      {/each}
    {/each}
  </div>
{/if}
