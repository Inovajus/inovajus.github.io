/*
 * Configuração compartilhada do Reveal.js para decks do Eixo III.
 *
 * Use:
 *   <script src="../../_shared/reveal-config.js"></script>
 *   <script>initInovajusDeck();</script>
 *
 * Pré-requisito:
 *   Reveal.js já carregado via <script src=".../reveal.js"></script>
 *   Plugin Notes opcionalmente carregado.
 */

function initInovajusDeck(extra) {
  const defaults = {
    width: 1280,
    height: 720,
    margin: 0,
    minScale: 0.2,
    maxScale: 2.0,

    center: false,
    controls: false,
    progress: false,
    hash: true,
    history: true,
    keyboard: true,
    overview: true,
    touch: true,

    // Cross-dissolve cinematográfico: 700ms slow fade
    transition: 'fade',
    transitionSpeed: 'slow',
    backgroundTransition: 'fade',

    // Fragments revelados com seta; sem auto-slide
    autoSlide: 0,
    fragments: true,
    fragmentInURL: false,

    slideNumber: 'c/t',
    showSlideNumber: 'all',

    hideCursorTime: 5000,
    hideInactiveCursor: true,

    plugins: (typeof RevealNotes !== 'undefined') ? [ RevealNotes ] : []
  };

  const config = Object.assign({}, defaults, extra || {});
  Reveal.initialize(config);
}
