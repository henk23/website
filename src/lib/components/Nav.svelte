<script>
  import HSLogo from '$lib/assets/hs-logo.svg?raw';
</script>

<header class="fixed top-0 z-50 w-full bg-grey-950/70 backdrop-blur-sm text-white font-bold">
  <div class="container px-4 py-2 sm:py-4">
    <nav class="flex items-center justify-between">
      <a href="/" class="block w-20 text-white" aria-label="Zurück nach oben">
        {@html HSLogo}
      </a>
      <ul class="text-right sm:flex sm:gap-6 sm:text-lg lg:text-xl">
        <li><a href="#referenzen" class="header-link">Referenzen</a></li>
        <li><a href="#ueber-mich" class="header-link">Über mich</a></li>
        <li><a href="#kontakt" class="header-link">Kontakt</a></li>
      </ul>
    </nav>
  </div>
</header>
