const NAV_ITEMS = [
  { slug: 'index', href: './index.html', label: 'Home' },
  { slug: 'services', href: './services.html', label: 'Services' },
  { slug: 'figures-tables', href: './figures-tables.html', label: 'Figures & Tables' },
  { slug: 'register', href: './register.html', label: 'Register' },
  { slug: 'book-a-call', href: './book-a-call.html', label: 'Book a Call' },
  { slug: 'contact', href: './contact.html', label: 'Contact' }
];

function headerMarkup(activeSlug) {
  const links = NAV_ITEMS.map((item) => {
    const activeClass = item.slug === activeSlug ? ' is-active' : '';
    return `<a class="gs-site-nav__link${activeClass}" href="${item.href}">${item.label}</a>`;
  }).join('');

  return `
    <div class="gs-nav-wrap">
      <div class="gs-container gs-nav-shell">
        <nav class="gs-nav" aria-label="Primary">
          <a class="gs-brand" href="./index.html" aria-label="Gateway Scholar home">
            <span class="gs-brand-mark" aria-hidden="true"></span>
            <span class="gs-brand-copy">
              <strong>Gateway Scholar</strong>
              <span>Editorial Advisory</span>
            </span>
          </a>
          <div class="gs-site-nav">${links}</div>
          <a class="gs-nav-cta" href="./register.html">Register</a>
        </nav>
      </div>
    </div>
  `;
}

function footerMarkup() {
  return `
    <footer class="gs-footer">
      <div class="gs-container gs-footer__grid">
        <div>
          <strong>Gateway Scholar</strong>
          <p>Ethical editorial support for MSc/PhD STEM students with real drafts and real data.</p>
        </div>
        <div class="gs-footer__links">
          <a href="./policies.html">Policies</a>
          <a href="./privacy.html">Privacy</a>
          <a href="./cookies.html">Cookies</a>
        </div>
      </div>
    </footer>
  `;
}

document.querySelectorAll('[data-site-header]').forEach((node) => {
  node.innerHTML = headerMarkup(document.body.dataset.page || 'index');
});

document.querySelectorAll('[data-site-footer]').forEach((node) => {
  node.innerHTML = footerMarkup();
});
