/**
 * deck-header-autohide — scroll-deck presentation chrome discipline.
 *
 * On pages with body.is-scroll-deck, the site header is fixed and hidden
 * (translateY(-100%), see deck-primitives.css). This reveals it when the
 * cursor approaches the top edge of the screen and hides it again when the
 * cursor moves away — so 16:9 presentations get the full viewport, but
 * navigation is always one mouse-flick away. Keyboard users: tabbing into
 * the header also reveals it.
 */
(function () {
  const body = document.body;
  if (!body.classList.contains('is-scroll-deck')) return;

  const header = document.querySelector('body > header');
  if (!header) return;

  let overHeader = false;
  const reveal = (on) => body.classList.toggle('header-revealed', on);

  document.addEventListener(
    'mousemove',
    (e) => {
      if (e.clientY <= 56) reveal(true);
      else if (!overHeader && e.clientY > 120) reveal(false);
    },
    { passive: true }
  );

  header.addEventListener('mouseenter', () => {
    overHeader = true;
    reveal(true);
  });
  header.addEventListener('mouseleave', () => {
    overHeader = false;
    reveal(false);
  });

  header.addEventListener('focusin', () => reveal(true));
  header.addEventListener('focusout', () => {
    if (!overHeader) reveal(false);
  });
})();
