import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

assert(existsSync(join(root, 'assets', 'site.css')), 'Missing assets/site.css');
assert(existsSync(join(root, 'assets', 'site.js')), 'Missing assets/site.js');

const indexHtml = read('pages/index.html');
assert(indexHtml.includes('data-site-header'), 'Home page missing shared header mount');
assert(indexHtml.includes('data-site-footer'), 'Home page missing shared footer mount');
assert(indexHtml.includes('../assets/site.css'), 'Home page missing shared stylesheet link');
assert(indexHtml.includes('../assets/site.js'), 'Home page missing shared script link');
assert(indexHtml.includes('Welcome to Gateway Scholar'), 'Home page missing main hero headline');
assert(indexHtml.includes('No ghostwriting • No fake data • No fake references • You remain the author'), 'Home page missing trust line');

const servicesHtml = read('pages/services.html');
assert(servicesHtml.includes('Thesis/Dissertation Support'), 'Services page missing thesis support section');
assert(servicesHtml.includes('Formatting & Style Compliance'), 'Services page missing formatting section');
assert(servicesHtml.includes('data-site-header'), 'Services page missing shared header mount');

const figuresHtml = read('pages/figures-tables.html');
assert(figuresHtml.includes('Need publication-ready visuals?'), 'Figures page missing approved teaser copy');
assert(figuresHtml.includes('user-provided data'), 'Figures page missing data integrity language');
assert(figuresHtml.includes('data-site-footer'), 'Figures page missing shared footer mount');

const registerHtml = read('pages/register.html');
assert(registerHtml.includes('What to prepare before reaching out'), 'Register page missing preparation section');
assert(registerHtml.includes('wa.me/8618552548576'), 'Register page missing WhatsApp action');
assert(!registerHtml.includes('<form'), 'Register page should not use a fake live form');

const bookHtml = read('pages/book-a-call.html');
assert(bookHtml.includes('Who this call is for'), 'Book a Call page missing fit section');
assert(bookHtml.includes('Who should skip the call'), 'Book a Call page missing qualifier section');
assert(bookHtml.includes('mailto:georgegershom22@gmail.com'), 'Book a Call page missing email action');

const contactHtml = read('pages/contact.html');
assert(contactHtml.includes('WhatsApp'), 'Contact page missing WhatsApp contact block');
assert(contactHtml.includes('WeChat'), 'Contact page missing WeChat block');

const policiesHtml = read('pages/policies.html');
assert(policiesHtml.includes('Academic integrity rules'), 'Policies page missing integrity rules heading');
assert(policiesHtml.includes('Privacy'), 'Policies page missing legal cross-links');

const privacyHtml = read('pages/privacy.html');
assert(privacyHtml.includes('what information may be shared by users'), 'Privacy page missing approved privacy scope');

const cookiesHtml = read('pages/cookies.html');
assert(cookiesHtml.includes('primarily informational'), 'Cookies page missing static-site explanation');

assert(servicesHtml.includes('id="simulation-review"'), 'Services page missing Simulation Model Review section');
assert(indexHtml.includes('services.html#simulation-review'), 'Home page missing link to Simulation Model Review');

for (const page of ['index', 'services', 'figures-tables', 'register', 'book-a-call', 'contact', 'policies', 'privacy', 'cookies']) {
  const html = read(`pages/${page}.html`);
  assert(!/This page should|Contact details should|The tone should|language should stay|policies should feel|Privacy should match|this page is built/.test(html), `pages/${page}.html shows an internal design note to visitors`);
}

console.log('verify-pages: foundation checks passed');
