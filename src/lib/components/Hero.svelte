<script>
  import heroImage from '$lib/assets/hero.webp';

  const heroStyle = `background-image: url('${heroImage}')`;

  const experienceYears = Math.round((new Date() - 1293840000000) / (1000 * 60 * 60 * 24 * 365));
</script>

<section class="bg-hero px-4" style={heroStyle}>
  <div class="container max-sm:max-w-[10rem] pt-8 pb-8 ml-0 text-white sm:pt-32 sm:pb-16 sm:mx-auto lg:py-44 lg:text-xl lg:flex lg:items-start lg:justify-start">
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
  </div>
</section>

<style lang="postcss">
  .bg-hero {
    background-repeat: no-repeat;
    background-position: calc(50% - 2rem) 0;
    background-image: url('/website-2024/src/lib/assets/hero.webp');
    background-size: cover;
    max-width: 1600px;
    margin: 0 auto;
  }

  :global(body) {
    margin-top: 5.5rem;
  }

  @media (min-width: 640px) {

    .bg-hero {
      background-position: 50% 0;
    }
  }
</style>
