<script>
  import heikoPhoto from '$lib/assets/heiko-salmon.webp';

  const experienceYears = Math.round((new Date() - 1293840000000) / (1000 * 60 * 60 * 24 * 365));
</script>

<section class="container max-lg:max-w-[40rem] pt-32 pb-16 px-4 text-white lg:py-44 lg:text-xl lg:flex lg:items-center lg:justify-around">
  <div class="rounded-full w-72 h-72 mb-8 mx-auto overflow-hidden lg:mx-0 lg:mb-0 lg:order-1">
    <img src={heikoPhoto} alt="Foto von Heiko" width="300" height="300" loading="eager">
  </div>
  <div class="font-bold">
    <div class="text-5xl lg:text-6xl leading-none">
      Heiko Salmon
    </div>

    <div class="inline-block text-3xl lg:text-4xl text-gradient leading-none">
      Senior Full Stack<br>Web Developer
    </div>

    <div class="text-2xl pt-8">
      mit über {experienceYears} Jahren Erfahrung
    </div>
  </div>
</section>
