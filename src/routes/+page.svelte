<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import LogoWall from '$lib/components/LogoWall.svelte';
  import References from '$lib/components/References.svelte';
  import Tools from '$lib/components/Tools.svelte';
  import AboutMe from '$lib/components/AboutMe.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Contact from '$lib/components/Contact.svelte';

  export let data;
</script>

<svelte:head>
  <title>Heiko Salmon - Full Stack Web Developer Freelancer - Svelte | Vue.js | Javascript | PHP | Datenbanken</title>
  <meta name="description" content="Web Freelancer für moderne Web-Technologien | HTML5 | Javascript | CSS3 | Svelte | Vue.js | PHP">
</svelte:head>

<Nav/>

<main>
  <Hero/>
  <LogoWall/>
  <References projects={data.projects}/>
  <Tools/>
  <AboutMe/>
  <Contact/>
  <Footer/>
</main>
