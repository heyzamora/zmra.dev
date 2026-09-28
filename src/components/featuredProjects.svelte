<script lang="ts">
  import { cn } from '@/utils';
  import { featuredProjects } from '@/data/featuredProjects';
  import { getPostsForProject } from '@/data/posts';
  import { ArrowRight } from 'lucide-svelte';

  import ProjectCard from './projectCard.svelte';
  import { Button } from '@/ui/button';
</script>

<section
  class={cn(
    'flex flex-col space-y-4',
    'delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards'
  )}
>
  <div class="flex items-center justify-between">
    <h2 class="text-xl font-medium">Projects</h2>
    <Button variant="ghost" size="sm" class="group flex items-center space-x-1" href="/projects">
      <span>More</span>
      <ArrowRight size={16} class="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100" />
    </Button>
  </div>
  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
    {#each featuredProjects as project}
      <ProjectCard {...project} postCount={getPostsForProject(project.title).length} />
    {/each}
  </div>
</section>
