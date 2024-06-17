<script>
  import xingLogo from '$lib/assets/xing-logo.svg?raw';
  import linkedinLogo from '$lib/assets/linkedin-logo.svg?raw';
  import gitlabLogo from '$lib/assets/gitlab-logo.svg?raw';
  import githubLogo from '$lib/assets/github-logo.svg?raw';
</script>

<section id="kontakt" class="bg-grey-950">
  <div class="container py-8 px-4">
    <h2 class="section-header">
      Kontakt
    </h2>

    <div class="lg:flex lg:justify-between">
      <div class="text-base sm:text-xl mb-8">
        Heiko Salmon<br>
        Marthastr. 3<br>
        45130 Essen<br>
        <br>
        0201 / 45 87 16 56<br>
        mail [ät] heiko-salmon [punkt] de
      </div>

      <div class="text-base sm:text-xl mb-8">
        <a class="flex items-center mb-4" href="https://www.xing.com/profile/Heiko_Salmon2/" target="_blank">
          <div class="w-8 h-8 mr-4">{@html xingLogo}</div>
          <div>XING</div>
        </a>
        <a class="flex items-center py-4" href="https://www.linkedin.com/in/heiko-salmon/" target="_blank">
          <div class="w-8 h-8 mr-4">{@html linkedinLogo}</div>
          <div>LinkedIn</div>
        </a>
        <a class="flex items-center py-4" href="https://gitlab.com/henk23" target="_blank">
          <div class="w-8 h-8 mr-4">{@html gitlabLogo}</div>
          <div>GitLab</div>
        </a>
        <a class="flex items-center py-4" href="https://github.com/henk23/" target="_blank">
          <div class="w-8 h-8 mr-4">{@html githubLogo}</div>
          <div>GitHub</div>
        </a>
      </div>

      <div class="text-base sm:text-xl mb-8">
        <p class="mb-4">
          USt-Id: DE279749940
        </p>
        <p class="mb-4">
          <a href="/datenschutz">Datenschutz</a>
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  a :global(svg) {
    max-width: 100%;
  }
</style>
