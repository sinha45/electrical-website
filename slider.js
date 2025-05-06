<script>
  window.addEventListener('load', () => {
    (function() {
      const carousel = document.querySelector('#hs-carousel-to-destroy');
      const destroy = document.querySelector('#hs-destroy-carousel');
      const autoInit = document.querySelector('#hs-auto-init-carousel');

      destroy.addEventListener('click', () => {
        const {element} = HSCarousel.getInstance(carousel, true);

        element.destroy();

        destroy.setAttribute('disabled', 'disabled');
        autoInit.removeAttribute('disabled');
      });

      autoInit.addEventListener('click', () => {
        HSCarousel.autoInit();

        autoInit.setAttribute('disabled', 'disabled');
        destroy.removeAttribute('disabled');
      });
    })();
  });
</script>