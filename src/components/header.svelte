<script>
  import { buttonVariants } from '@/ui/button';

  import Github from '@/icons/social/github.svelte';
  import Linkedin from '@/icons/social/linkedin.svelte';
  import X from '@/icons/social/x.svelte';
  import ModdeToggle from './modde-toggle.svelte';

  const SocialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zamora-cesar',
      icon: Linkedin,
      iconSize: 18
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/heyzamora__',
      icon: X,
      iconSize: 18
    },
    {
      name: 'GitHub',
      url: 'https://github.com/heyzamora',
      icon: Github,
      iconSize: 18
    }
  ];
</script>

<header
  class="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between bg-neutral-100/50 py-4 backdrop-blur-lg dark:bg-neutral-900/50"
>
  <a
    href="/"
    class="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
  >
    Zamora
  </a>
  <nav class="flex items-center space-x-1">
    {#each SocialLinks as { name, url, icon, iconSize}, i}
      {@const SvelteComponent = icon}
      <a
        href={url}
        title={name}
        target="_blank"
        rel="noopener noreferrer"
        class={buttonVariants({
          variant: 'ghost',
          size: 'icon',
          class: 'opacity-80 transition-opacity duration-150 hover:opacity-100'
        })}
      >
        <SvelteComponent height={iconSize ? iconSize : 18} />
      </a>
    {/each}
    <ModdeToggle />
  </nav>
</header>
