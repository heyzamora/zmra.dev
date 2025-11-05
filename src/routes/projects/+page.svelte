<script lang="ts">
  import { cn } from "@/utils";
  import ViewContainer from "@/components/viewContainer.svelte";
  
  import { routeAnimation } from "@/ui/shared";
  import { projects } from "@/data/projects";
  import ProjectCard from "@/components/projectCard.svelte";
  import { ArrowUpRight, GitForkIcon } from "lucide-svelte";
</script>

<svelte:head>
  <title>Projects - zmra.dev</title>
  <meta property="og:title" content="César Zamora" />
  <meta property="og:description" content="Building cool stuff" />
  <meta name="image" property="og:image" content="https://zmra.dev/images/readme-img.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<ViewContainer class={cn(routeAnimation, "flex flex-col space-y-4")}>
  <h1 class="text-xl font-medium">Projects</h1>

  <div
    class="flex w-full items-center justify-between space-x-2 text-neutral-600 dark:text-neutral-400"
  >
    <div class="flex items-center space-x-2">
      <GitForkIcon size={14} strokeWidth={1.5} />
      <p class="font-mono text-xs">
        {projects.length}
        {projects.length > 1 ? 'projects' : 'project'}
      </p>
    </div>
    <a
      href="https://github.com/heyzamora?tab=repositories"
      class="group flex items-center space-x-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="font-mono text-xs"> View on GitHub </span>
      <ArrowUpRight
        size={14}
        strokeWidth={1.5}
        class="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
      />
    </a>
  </div>
  
  <div class="grid grid-cols-1 gap-3">
    {#each projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</ViewContainer>
