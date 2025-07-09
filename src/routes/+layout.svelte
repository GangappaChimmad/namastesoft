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
  <meta property="og:url" content="https://namastesoft.com" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@namaste_soft" />
</svelte:head>

<slot />

<Toast />
