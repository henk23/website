<script>
  import HSLogo from '$lib/assets/hs-logo.svg?raw';
</script>

<nav class="fixed w-full bg-grey-950/70 backdrop-blur-sm text-white font-bold uppercase p-4">
  <div class="container">
    <div class="flex items-center justify-between">
      <div class="w-20 text-white">
        {@html HSLogo}
      </div>
      <ul class="text-right sm:flex sm:gap-6 sm:text-lg lg:text-xl">
        <li><a href="#referenzen" class="header-link">Referenzen</a></li>
        <li><a href="#ueber-mich" class="header-link">Über mich</a></li>
        <li><a href="#kontakt" class="header-link">Kontakt</a></li>
      </ul>
    </div>
  </div>
</nav>

<style lang="postcss">
  nav {
    /*background: linear-gradient(to right, theme('colors.heiko-blue.950') 0%, theme('colors.heiko-blue.800') 100%);*/
    /*background: #0a0b0b; !*theme('colors.gray.800');*!*/
  }
</style>
