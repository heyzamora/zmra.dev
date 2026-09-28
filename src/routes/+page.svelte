<script lang="ts">
  import ViewContainer from '@/components/viewContainer.svelte';
  
  import About from '@/components/about.svelte';
  import Experience from '@/components/experience.svelte';
  import Projects from '@/components/featuredProjects.svelte';
</script>

<svelte:head>
  <title>César Zamora - zmra.dev</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://zmra.dev" />
  <meta property="og:title" content="César Zamora" />
  <meta property="og:description" content="Building cool stuff" />
  <meta property="og:image" content="https://zmra.dev/images/readme-img.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@heyzamora__" />
  <meta name="twitter:title" content="César Zamora" />
  <meta name="twitter:description" content="Building cool stuff" />
  <meta name="twitter:image" content="https://zmra.dev/images/readme-img.png" />
</svelte:head>

<ViewContainer class="grid items-center gap-14 py-4 md:py-4">
  <About />
  <Projects />
  <Experience />
</ViewContainer>
