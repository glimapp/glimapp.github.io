(() => {
  if (location.hostname !== 'glimapp.github.io' || navigator.doNotTrack === '1') return;

  const page = new URL(location.origin + location.pathname);
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
    const value = new URLSearchParams(location.search).get(key);
    if (value && /^[a-zA-Z0-9_-]{1,80}$/.test(value)) page.searchParams.set(key, value);
  }
  let referrer = '';
  try {
    const url = new URL(document.referrer);
    referrer = url.origin + url.pathname;
  } catch {}

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-NXR4ZF7FD9', {
    page_location: page.href,
    page_referrer: referrer
  });
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-NXR4ZF7FD9';
  document.head.append(tag);

  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    const url = new URL(link.href);
    let action;
    if (url.hostname === 'github.com' && url.pathname === '/glimapp/glim/releases/latest') {
      action = 'release_click';
    } else if (url.hostname === 'github.com' && /^\/glimapp\/glim\/?$/.test(url.pathname)) {
      action = 'github_click';
    } else if (url.origin === location.origin && url.pathname.startsWith('/assets/examples/')) {
      action = 'example_download';
    } else if (url.origin === location.origin && /\/(markdown|json|csv)-viewer\/$/.test(url.pathname)) {
      action = 'scenario_open';
    }
    if (!action) return;
    window.gtag('event', action, {
      page_path: location.pathname,
      link_path: url.pathname,
      placement: link.dataset.placement || 'content',
      language: document.documentElement.lang,
      transport_type: 'beacon'
    });
  });
})();
