<script>
  export let projects = [];
</script>

<section id="referenzen">
  <div class="container py-8 px-4">
    <h2 class="section-header">
      Eine Auswahl meiner bisherigen Projekte
    </h2>
  </div>

  {#each projects as project, idx}
    <div class="{idx % 2 !== 0 ? 'bg-grey-100 text-grey-900' : ''}">
      <div class="container py-8 px-4 lg:py-12">
        <h3 class="text-2xl font-bold mb-6 lg:text-4xl">
          {project.title}
        </h3>
        <div class="lg:flex lg:gap-6">
          <a href={project.link} target="_blank" class="block mb-6 md:w-2/3 {idx % 2 !== 0 ? 'order-1' : ''}">
            <img
              class="w-full shadow-lg lg:shadow-2xl"
              src="/img/projects/{project.image}"
              alt={project.title + ' Screenshot'}
              width={project.image_width}
              height={project.image_height}
              loading="lazy"
            >
          </a>
          <div class="lg:w-1/3 html-copy lg:text-lg xl:text-xl">
            <p class="pb-4">
              {@html project.description}
            </p>
            {#each project.details as detail}
              <p class="pb-4">
                <strong>{detail.key}</strong><br>{@html detail.value}
              </p>
            {/each}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>
