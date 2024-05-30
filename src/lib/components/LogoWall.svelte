<script>
  import { fadeIn } from '$lib/utils.js';
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
    { icon: logo_fressnapf, name: 'Fressnapf', width: '250', height: '39.9' },
    { icon: logo_medion, name: 'Medion', width: '206.62', height: '40.76' },
    { icon: logo_aldi_talk, name: 'Aldi Talk', width: '168', height: '51.65' },
    { icon: logo_koch_essen, name: 'Koch Essen', width: '256', height: '46.18' },

    { icon: logo_makita, name: 'Makita', width: '204.93', height: '66.05' },
    { icon: logo_primagas, name: 'Primagas', width: '209', height: '29.97' },
    { icon: logo_metro, name: 'Metro', width: '200', height: '53.61' },
    { icon: logo_kinderhut, name: 'Kinderhut', width: '189.83', height: '73.63' },

    { icon: logo_hmmh, name: 'hmmh', width: '240', height: '72' },
    { icon: logo_gerry_weber, name: 'Gerry Weber', width: '272.08', height: '24.19' },
    { icon: logo_schaeffler, name: 'Schaeffler', width: '228', height: '25.88' },
    { icon: logo_hessnatur, name: 'Hessnatur', width: '220', height: '53.01' },

    { icon: logo_carstens_stiftung, name: 'Carstens Stiftung', width: '140', height: '140' },
    { icon: logo_correctiv, name: 'Correctiv', width: '176', height: '58.6' },
    { icon: logo_agiplan, name: 'Agiplan', width: '177.57', height: '59.18' },
    { icon: logo_studio_buehne, name: 'Studio Buehne', width: '132', height: '106.54' },
  ];
</script>

<section id="logo-wall" class="bg-grey-100 text-grey-900">
  <div class="container py-8 px-4">
    <h2 class="section-header">
      Erfolgreiche <span class="text-gradient">Kooperationen</span>
    </h2>

    <div class="grid gap-8 grid-cols-2 my-8 sm:grid-cols-3 sm:gap-16 sm:my-16 lg:grid-cols-4 lg:gap-16 lg:mt-24">
      {#each logos as logo, idx}
        <div class="logo flex items-center justify-center min-h-24" use:fadeIn>
          <img
            src={logo.icon}
            alt={`${logo.name} Logo`}
            width={logo.width}
            height={logo.height}
            loading="lazy"
          >
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
