<script>
  import heikoPhoto from '$lib/assets/heiko-salmon300.jpg';
</script>

<main class="text-white p-4">
  <div class="flex items-center justify-around container min-h-96">
    <div class="text-6xl leading-[0.7em] font-bold">
      <span>Heiko Salmon</span><br>
      <span class="text-4xl">Full Stack Web Developer</span>
    </div>
    <div class="rounded-full w-72 h-72 overflow-hidden">
      <img src={heikoPhoto} alt="Foto von Heiko">
    </div>
  </div>
</main>

<style lang="postcss">
  main {
    background: linear-gradient(to right, theme('colors.heiko-blue.950') 0%, theme('colors.heiko-blue.800') 100%);
  }
</style>
