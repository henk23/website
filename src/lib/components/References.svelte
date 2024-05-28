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
      <div class="container py-8 px-4">
        <h3 class="text-xl font-bold sm:text-2xl lg:text-3xl">{project.title}</h3>
      </div>
    </div>
  {/each}
</section>
