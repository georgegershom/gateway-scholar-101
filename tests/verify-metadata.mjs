import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const design = JSON.parse(readFileSync(join(root, 'gateway-scholar-editorial-redesign.design'), 'utf8'));
const summary = JSON.parse(readFileSync(join(root, 'orchestration-summary.json'), 'utf8'));

const expectedPages = [
  ['page-index', 'pages/index.html'],
  ['page-services', 'pages/services.html'],
  ['page-figures-tables', 'pages/figures-tables.html'],
  ['page-register', 'pages/register.html'],
  ['page-book-a-call', 'pages/book-a-call.html'],
  ['page-contact', 'pages/contact.html'],
  ['page-policies', 'pages/policies.html'],
  ['page-privacy', 'pages/privacy.html'],
  ['page-cookies', 'pages/cookies.html']
];

for (const [id, htmlSrc] of expectedPages) {
  const node = design.data.find((item) => item.id === id);
  if (!node) throw new Error(`Missing design node ${id}`);
  if (node.devMetadata?.htmlSrc !== htmlSrc) throw new Error(`Wrong htmlSrc for ${id}`);
}

if (summary.pages.length !== 9) throw new Error(`Expected 9 summary pages, got ${summary.pages.length}`);

console.log('verify-metadata: all page registrations passed');
