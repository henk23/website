<script>
  import xingLogo from '$lib/assets/xing-logo.svg?raw';
  import linkedinLogo from '$lib/assets/linkedin-logo.svg?raw';
</script>

<section id="kontakt">
  <div class="container py-8 px-4">
    <h2 class="text-3xl font-bold mb-8 sm:text-4xl lg:text-5xl lg:mb-16">
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
          <div>Profil bei XING</div>
        </a>
        <a class="flex items-center py-4" href="https://www.linkedin.com/in/heiko-salmon/" target="_blank">
          <div class="w-8 h-8 mr-4">{@html linkedinLogo}</div>
          <div>Profil bei LinkedIn</div>
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
