<script>
  const currentYear = new Date().getFullYear();
</script>
<footer class="bg-orange-500 text-grey-950 p-4">
  <div class="container font-extrabold text-center">
    &copy; 2011-{currentYear} Heiko Salmon
  </div>
</footer>

<style lang="postcss">
  footer {
    background: linear-gradient(to bottom right, theme('colors.orange.600') 0%, theme('colors.orange.500') 100%);
  }
</style>
