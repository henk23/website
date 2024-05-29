<script>
  import '../app.css';
  import hsLogo from '$lib/assets/hs-logo.svg';
</script>

<svelte:head>
  <link rel="icon" href={hsLogo} />
</svelte:head>

<slot/>
