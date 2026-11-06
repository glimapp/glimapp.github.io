(() => {
  const demo = document.querySelector('[data-walkthrough]');
  if (!demo) return;
  const image = demo.querySelector('img');
  const caption = demo.querySelector('figcaption');
  const links = demo.querySelectorAll('[data-view]');
  for (const link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      image.src = link.href;
      image.alt = link.dataset.alt;
      caption.textContent = link.dataset.caption;
      for (const other of links) other.removeAttribute('aria-current');
      link.setAttribute('aria-current', 'true');
    });
  }
})();
