<script>
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
    { name: 'HTML5', icon: logo_html5 },
    { name: 'CSS3', icon: logo_css3 },
    { name: 'JavaScript', icon: logo_javascript },
    { name: 'Responsive', icon: logo_responsive },
  ];

  const frontend = [
    { name: 'Svelte / SvelteKit', icon: logo_svelte },
    { name: 'Vue.js', icon: logo_vue },
    { name: 'Nuxt', icon: logo_nuxt },
    { name: 'Tailwind CSS', icon: logo_tailwind },
  ];

  const backend = [
    { name: 'Node.js / Express', icon: logo_nodejs },
    { name: 'PHP', icon: logo_php },
    { name: 'Laravel', icon: logo_laravel },
    { name: 'WordPress', icon: logo_wordpress },
  ];

  const database = [
    { name: 'MySQL', icon: logo_mysql },
    { name: 'MariaDB', icon: logo_mariadb },
    { name: 'PostgreSQL', icon: logo_postgresql },
    { name: 'SQLite', icon: logo_sqlite },
  ];

  const server = [
    { name: 'Ubuntu', icon: logo_ubuntu },
    { name: 'Caddy', icon: logo_caddy },
    { name: 'Nginx', icon: logo_nginx },
    { name: 'Apache', icon: logo_apache },
  ];

  const tools = [
    { name: 'Vite', icon: logo_vite },
    { name: 'SASS', icon: logo_sass },
    { name: 'Git', icon: logo_git },
    { name: 'Docker', icon: logo_docker },
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
  <div class="container py-8 px-6">
    <h2 class="text-3xl text-white font-bold sm:text-4xl lg:text-5xl lg:mb-16">
      Diese Tools und Technologien setze ich ein.
    </h2>

    {#each areas as area}
      <h3 class="text-xl uppercase font-extrabold tracking-wide text-white text-center py-8 sm:text-2xl sm:py-12 lg:text-3xl">
        {area.title}
      </h3>

      <div class="flex flex-wrap items-center justify-center mb-8">
        {#each area.items as item}
          <figure class="flex flex-col items-center justify-center w-28 h-36 p-4 sm:w-36 sm:h-44 lg:w-56 lg:p-8">
            <img class="block w-full h-full object-contain" src={item.icon} alt={item.name}>
            <figcaption class="text-center font-bold pt-4 lg:pt-8">{item.name}</figcaption>
          </figure>
        {/each}
      </div>
    {/each}
  </div>
</section>
