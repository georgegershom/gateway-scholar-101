import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(existsSync(join(dist, 'index.html')), 'Missing dist/index.html');
assert(existsSync(join(dist, 'services.html')), 'Missing dist/services.html');
assert(existsSync(join(dist, 'assets', 'hero-main.jpg')), 'Missing dist/assets/hero-main.jpg');
assert(existsSync(join(dist, 'assets', 'site.css')), 'Missing dist/assets/site.css');
assert(existsSync(join(dist, 'assets', 'site.js')), 'Missing dist/assets/site.js');

const builtHome = readFileSync(join(dist, 'index.html'), 'utf8');
assert(builtHome.includes('./assets/site.css'), 'dist/index.html should reference ./assets/site.css');
assert(!builtHome.includes('../assets/site.css'), 'dist/index.html should not keep source-relative asset paths');

console.log('verify-dist: static build checks passed');
