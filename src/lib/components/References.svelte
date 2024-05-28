<script>
  export let projects = [];
</script>

<section id="ueber-mich" class="">
  <div class="container py-8 px-4">
    <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl lg:mb-16">
      Eine kleine Auswahl meiner bisherigen Projekte
    </h2>
  </div>

  {#each projects as project, idx}
    <div class="{idx % 2 !== 0 ? 'bg-grey-100 text-grey-900' : ''}">
      <div class="container py-8 px-4 lg:py-16">
        <h3 class="text-xl font-bold pb-6 sm:text-2xl lg:text-4xl">
          {project.title}
        </h3>
        <div class="flex gap-6">
          <a href={project.link} target="_blank" class="block w-2/3 {idx % 2 !== 0 ? 'order-1' : ''}">
            <img
              class="w-full shadow-2xl"
              src="/img/projects/{project.image}"
              alt={project.title + ' Screenshot'}
            >
          </a>
          <div class="w-1/3 text-xl html-copy">
            <p class="pb-4">
              {@html project.description}
            </p>
            {#each project.details as detail}
              <p class="pb-4">
                <strong>{detail.key}: </strong> {@html detail.value}
              </p>
            {/each}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>
