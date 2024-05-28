<script>
  import logo_css3 from '$lib/assets/tools/css3.svg';
  import logo_html5 from '$lib/assets/tools/html5.svg';
  import logo_javascript from '$lib/assets/tools/javascript.svg';
  import logo_nuxt from '$lib/assets/tools/nuxt.svg';
  import logo_svelte from '$lib/assets/tools/svelte.svg';
  import logo_tailwind from '$lib/assets/tools/tailwind.svg';
  import logo_vue from '$lib/assets/tools/vue.svg';
  import logo_php from '$lib/assets/tools/php.svg';
  import logo_laravel from '$lib/assets/tools/laravel.svg';
  import logo_nodejs from '$lib/assets/tools/nodejs.svg';
  import logo_responsive from '$lib/assets/tools/responsive.svg';
  import logo_wordpress from '$lib/assets/tools/wordpress.svg';
  import logo_mysql from '$lib/assets/tools/mysql.svg';
  import logo_mariadb from '$lib/assets/tools/mariadb.svg';
  import logo_postgresql from '$lib/assets/tools/postgresql.svg';
  import logo_sqlite from '$lib/assets/tools/sqlite.svg';
  import logo_ubuntu from '$lib/assets/tools/ubuntu.svg';
  import logo_caddy from '$lib/assets/tools/caddy.svg';
  import logo_nginx from '$lib/assets/tools/nginx.svg';
  import logo_apache from '$lib/assets/tools/apache.svg';
  import logo_vite from '$lib/assets/tools/vite.svg';
  import logo_sass from '$lib/assets/tools/sass.svg';
  import logo_git from '$lib/assets/tools/git.svg';
  import logo_docker from '$lib/assets/tools/docker.svg';
</script>

<section class="">
  <div class="container py-8 px-6">
    <h2 class="text-3xl text-white font-bold sm:text-4xl lg:text-5xl">
      Diese Tools und Technologien setze ich ein.
    </h2>

    <h3 class="text-2xl font-bold py-4">Standards</h3>

    <img src={logo_html5} alt="HTML5"> HTML5
    <img src={logo_css3} alt="CSS3"> CSS3
    <img src={logo_javascript} alt="JavaScript"> Javascript (ES6)
    <img src={logo_responsive} alt="Responsive"> responsive / mobile / tablet

    <h3 class="text-2xl font-bold py-4">Frontend</h3>

    <img src={logo_svelte} alt="Svelte / SvelteKit"> Svelte / SvelteKit
    <img src={logo_vue} alt="JavaScript"> Vue.js
    <img src={logo_nuxt} alt="Nuxt"> Nuxt
    <img src={logo_tailwind} alt="TailwindCSS"> Tailwind CSS

    <h3 class="text-2xl font-bold py-4">Backend</h3>

    <img src={logo_nodejs} alt="Node.js"> Node.js / Express
    <img src={logo_php} alt="PHP"> PHP
    <img src={logo_laravel} alt="Laravel"> Laravel
    <img src={logo_wordpress} alt="WordPress"> WordPress
    <img src={logo_mysql} alt="MySQL"> MySQL
    <img src={logo_mariadb} alt="MariaDB"> MariaDB
    <img src={logo_postgresql} alt="PostgreSQL"> PostgreSQL
    <img src={logo_sqlite} alt="SQLite"> SQLite

    <h3 class="text-2xl font-bold py-4">Server</h3>

    <img src={logo_ubuntu} alt="Ubuntu"> Ubuntu
    <img src={logo_caddy} alt="Caddy"> Caddy
    <img src={logo_nginx} alt="Nginx"> Nginx
    <img src={logo_apache} alt="Apache HTTP Server"> Apache HTTP Server

    <h3 class="text-2xl font-bold py-4">Tools</h3>

    <img src={logo_vite} alt="Vite"> Vite
    <img src={logo_sass} alt="SASS"> SASS
    <img src={logo_git} alt="Git"> Git
    <img src={logo_docker} alt="Docker"> Docker
  </div>
</section>

<style lang="postcss">
  img {
    display: inline-block;
    max-width: 5rem;
    max-height: 5rem;
  }
</style>
