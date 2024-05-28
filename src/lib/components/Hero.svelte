<script>
  import heikoPhoto from '$lib/assets/heiko-salmon300.jpg';

  const experienceYears = Math.round((new Date() - 1293840000000) / (1000 * 60 * 60 * 24 * 365));
</script>

<section class="flex items-center justify-around container py-44 text-white">
  <div class="font-bold">
    <div class="text-6xl leading-none">Heiko Salmon</div>

    <div class="text-4xl text-gradient leading-none text--500">
      Senior Full Stack<br>Web Developer
    </div>

    <div class="text-2xl pt-8">
      mit über {experienceYears} Jahren Erfahrung
    </div>
  </div>
  <div class="rounded-full w-72 h-72 overflow-hidden">
    <img src={heikoPhoto} alt="Foto von Heiko">
  </div>
</section>
