<script>
  import logo_agiplan from '$lib/assets/logo-wall/logo-agiplan.svg';
  import logo_aldi_talk from '$lib/assets/logo-wall/logo-aldi-talk.svg';
  import logo_carstens_stiftung from '$lib/assets/logo-wall/logo-carstens-stiftung.svg';
  import logo_correctiv from '$lib/assets/logo-wall/logo-correctiv.svg';
  import logo_fressnapf from '$lib/assets/logo-wall/logo-fressnapf.svg';
  import logo_gerry_weber from '$lib/assets/logo-wall/logo-gerry-weber.svg';
  import logo_hessnatur from '$lib/assets/logo-wall/logo-hessnatur.svg';
  import logo_hmmh from '$lib/assets/logo-wall/logo-hmmh.svg';
  import logo_kinderhut from '$lib/assets/logo-wall/logo-kinderhut.svg';
  import logo_koch_essen from '$lib/assets/logo-wall/logo-koch-essen.svg';
  import logo_makita from '$lib/assets/logo-wall/logo-makita.svg';
  import logo_medion from '$lib/assets/logo-wall/logo-medion.svg';
  import logo_metro from '$lib/assets/logo-wall/logo-metro.svg';
  import logo_primagas from '$lib/assets/logo-wall/logo-primagas.svg';
  import logo_schaeffler from '$lib/assets/logo-wall/logo-schaeffler.svg';
  import logo_studio_buehne from '$lib/assets/logo-wall/logo-studio-buehne.svg';

  const logos = [
    logo_fressnapf,
    logo_medion,
    logo_aldi_talk,
    logo_koch_essen,

    logo_makita,
    logo_primagas,
    logo_metro,
    logo_kinderhut,

    logo_hmmh,
    logo_gerry_weber,
    logo_schaeffler,
    logo_hessnatur,

    logo_carstens_stiftung,
    logo_correctiv,
    logo_agiplan,
    logo_studio_buehne,
  ];
</script>

<section class="bg-grey-100">
  <div class="container py-8 px-6">
    <h2 class="text-3xl text-grey-900 font-bold sm:text-4xl lg:text-5xl">
      Mit diesen Marken durfte ich bereits zusammenarbeiten.
    </h2>

    <div class="grid gap-8 grid-cols-2 py-8 sm:grid-cols-3 sm:gap-16 sm:py-16 lg:grid-cols-4 lg:gap-16 lg:py-20">
      {#each logos as logo}
        <div class="logo flex items-center justify-center min-h-24">
          <img src={logo} alt="Logo">
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  @media (min-width: 640px) and (max-width: 1023px) {

    .logo:last-child:nth-child(3n - 2) {
      grid-column: span 3;
    }
  }
</style>
