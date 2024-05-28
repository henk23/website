<script>
  import heikoPhoto from '$lib/assets/heiko-salmon300.jpg';
  import LogoWall from '$lib/components/LogoWall.svelte';
  import Technologies from '$lib/components/Technologies.svelte';
</script>

<main class="text-white">
  <section class="flex items-center justify-around container py-44">
    <div class="font-bold">
      <div class="text-6xl leading-none">Heiko Salmon</div>
      <div class="text-4xl gradient leading-none text--500">
        Senior Full Stack<br>Web Developer
      </div>
    </div>
    <div class="rounded-full w-72 h-72 overflow-hidden">
      <img src={heikoPhoto} alt="Foto von Heiko">
    </div>
  </section>

  <LogoWall/>

  <Technologies/>
</main>

<style lang="postcss">
  .gradient {
    background: linear-gradient(to bottom right, #ff6e7f, #bfe9ff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
