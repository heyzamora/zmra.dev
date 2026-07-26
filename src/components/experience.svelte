<script>
  import { experienceData } from '@/data/experience';
  import Badge from '@/ui/badge/badge.svelte';
  import SpotlightBadge from '@/ui/badge/spotlight-badge.svelte';
  import { cn } from '@/utils';
  import { Briefcase, Building2, Download, ExternalLink, MapPin } from 'lucide-svelte';
  import { technologies } from '@/data/technologies';
  import { Button } from '@/ui/button';
</script>

<section
  class={cn(
    'flex flex-col space-y-4',
    'delay-200 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards'
  )}
>
  <div class="flex items-center justify-between">
    <h2 class="text-xl font-medium">Experience</h2>
  </div>

  <ol class="relative space-y-6 border-s-2 border-neutral-300 dark:border-neutral-800">
    {#each experienceData as experience}
      <li class="ms-5 mt-1">
        <div
          class={cn(
            'absolute -start-[1.03rem] mt-[1.4rem] size-8 rounded-full border grid items-center justify-center border-neutral-400 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-900'
          )}
        >
          {#if experience.companyLogo}
            <experience.companyLogo width={18} height={18} class="flex-shrink-0" />
          {:else}
            <Briefcase size={18} class="flex-shrink-0 opacity-50" />
          {/if}
        </div>
        <time
          class="font-mono text-xs font-normal leading-none text-neutral-600 dark:text-neutral-400"
        >
          {experience.startDate} - {experience.endDate}
        </time>
        <div class="flex flex-col space-y-0.5">
          <div class="flex items-center">
          <h3 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {experience.role}
          </h3>
          {#if experience.freelance}
            <SpotlightBadge extraClasses="ml-2">Freelance</SpotlightBadge>
          {/if}
          </div>
          <div class="flex items-center">
            <MapPin size={12} strokeWidth={1.5} class="mr-1" />
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              {experience.location}
            </p>
          </div>
          {#if experience.companyUrl}
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener"
              class="group flex w-max items-center text-pretty text-sm text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
            >
              <Building2 size={12} strokeWidth={1.5} class="mr-1" />
              <span>{experience.company}</span>
              <ExternalLink
                class="ml-1 duration-150 group-hover:translate-x-[0.09rem]"
                size={12}
                strokeWidth={1.5}
              />
            </a>
          {:else}
            <div class="flex w-max items-center text-pretty text-sm text-neutral-600 dark:text-neutral-400">
              <Briefcase size={12} strokeWidth={1.5} class="mr-1" />
              <span>{experience.company}</span>
            </div>
          {/if}
        </div>
        <!-- bind:innerHTML needed to make link inside the text clickable -->
        <p
          class="mt-3 text-pretty text-sm dark:text-neutral-400"
          contenteditable="false"
          bind:innerHTML={experience.aboutRole} 
        ></p>
        <div class="mt-3 flex flex-col space-y-0.5">
          {#if experience.technologies.length > 0}
              <div class="flex flex-wrap gap-2">
                {#each experience.technologies as technology}
                  {#each technologies.filter((s) => s.stack === technology) as { icon: Icon }}
                    <Badge>
                      <Icon width={14} height={14} class="flex-shrink-0" />
                      <span>{technology}</span>
                    </Badge>
                  {/each}
                {/each}
              </div>
          {/if}
        </div>
      </li>
    {/each}
  </ol>
</section>
