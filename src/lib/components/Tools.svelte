<script>
  import { fadeIn } from '$lib/utils.js';

  import logo_html5 from '$lib/assets/tools/html5.svg';
  import logo_css3 from '$lib/assets/tools/css3.svg';
  import logo_javascript from '$lib/assets/tools/javascript.svg';
  import logo_responsive from '$lib/assets/tools/responsive.svg';

  import logo_svelte from '$lib/assets/tools/svelte.svg';
  import logo_vue from '$lib/assets/tools/vue.svg';
  import logo_nuxt from '$lib/assets/tools/nuxt.svg';
  import logo_tailwind from '$lib/assets/tools/tailwind.svg';

  import logo_nodejs from '$lib/assets/tools/nodejs.svg';
  import logo_php from '$lib/assets/tools/php.svg';
  import logo_laravel from '$lib/assets/tools/laravel.svg';
  import logo_wordpress from '$lib/assets/tools/wordpress.svg';

  import logo_sqlite from '$lib/assets/tools/sqlite.svg';
  import logo_postgresql from '$lib/assets/tools/postgresql.svg';
  import logo_mariadb from '$lib/assets/tools/mariadb.svg';
  import logo_mysql from '$lib/assets/tools/mysql.svg';

  import logo_ubuntu from '$lib/assets/tools/ubuntu.svg';
  import logo_caddy from '$lib/assets/tools/caddy.svg';
  import logo_nginx from '$lib/assets/tools/nginx.svg';
  import logo_apache from '$lib/assets/tools/apache.svg';

  import logo_vite from '$lib/assets/tools/vite.svg';
  import logo_sass from '$lib/assets/tools/sass.svg';
  import logo_git from '$lib/assets/tools/git.svg';
  import logo_docker from '$lib/assets/tools/docker.svg';

  const standards = [
    { name: 'HTML5', icon: logo_html5, width: '512', height: '512' },
    { name: 'CSS3', icon: logo_css3, width: '290.19', height: '409.6' },
    { name: 'JavaScript', icon: logo_javascript, width: '630', height: '630' },
    { name: 'Responsive', icon: logo_responsive, width: '512', height: '512' },
  ];

  const frontend = [
    { name: 'Svelte / SvelteKit', icon: logo_svelte, width: '94', height: '113' },
    { name: 'Vue.js', icon: logo_vue, width: '128', height: '110' },
    { name: 'Nuxt', icon: logo_nuxt, width: '800', height: '200' },
    { name: 'Tailwind CSS', icon: logo_tailwind, width: '248', height: '31' },
  ];

  const backend = [
    { name: 'Node.js / Express', icon: logo_nodejs, width: '267', height: '80' },
    { name: 'PHP', icon: logo_php, width: '100', height: '50' },
    { name: 'Laravel', icon: logo_laravel, width: '50', height: '52' },
    { name: 'WordPress', icon: logo_wordpress, width: '28', height: '28' },
  ];

  const database = [
    { name: 'MySQL', icon: logo_mysql, width: '389.8', height: '201.3' },
    { name: 'MariaDB', icon: logo_mariadb, width: '789.1', height: '195.64' },
    { name: 'PostgreSQL', icon: logo_postgresql, width: '431.96', height: '445.34' },
    { name: 'SQLite', icon: logo_sqlite, width: '361.84', height: '160.59' },
  ];

  const server = [
    { name: 'Ubuntu', icon: logo_ubuntu, width: '254.06', height: '400' },
    { name: 'Caddy', icon: logo_caddy, width: '1859.13', height: '471.05' },
    { name: 'Nginx', icon: logo_nginx, width: '939.45', height: '196.91' },
    { name: 'Apache', icon: logo_apache, width: '868.34', height: '349.9' },
  ];

  const tools = [
    { name: 'Vite', icon: logo_vite, width: '410', height: '404' },
    { name: 'SASS', icon: logo_sass, width: '547.48', height: '410.58' },
    { name: 'Git', icon: logo_git, width: '92pt', height: '92pt' },
    { name: 'Docker', icon: logo_docker, width: '2333.95', height: '530.79' },
  ];

  const areas = [
    { title: 'Standards', items: standards },
    { title: 'Frontend', items: frontend },
    { title: 'Backend', items: backend },
    { title: 'Datenbanken', items: database },
    { title: 'Server', items: server },
    { title: 'Tools', items: tools },
  ];
</script>

<section id="tools">
  <div class="container py-8 px-4">
    <h2 class="section-header">
      Essenzielle <span class="text-gradient">Tools &amp; Technologien</span>
    </h2>

    {#each areas as area}
      <h3 class="text-xl uppercase font-extrabold tracking-wide text-white text-center py-8 sm:text-2xl sm:py-12 lg:text-3xl">
        {area.title}
      </h3>

      <div class="flex flex-wrap items-center justify-center mb-8">
        {#each area.items as item}
          <figure class="flex flex-col items-center justify-center w-36 h-36 p-4 sm:h-44 lg:w-56 lg:p-8">
            <img
              class="block w-full h-full object-contain"
              src={item.icon}
              alt={`${item.name} Logo`}
              width={item.width}
              height={item.height}
              loading="lazy"
              use:fadeIn
            >
            <figcaption class="text-center font-bold pt-4 whitespace-nowrap lg:pt-8">
              {item.name}
            </figcaption>
          </figure>
        {/each}
      </div>
    {/each}
  </div>
</section>
