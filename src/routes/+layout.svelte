<script>
  import '../app.css';
  import Toast from '@/components/ui/Toast.svelte';
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta name="author" content="Namaste Soft" />
  <meta property="og:title" content="Namaste Soft - Software Development Services" />
  <meta property="og:description" content="Professional software development services including websites, web applications, mobile apps, and AI/ML solutions." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@namaste_soft" />
  <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
</svelte:head>

<slot />

<Toast />
