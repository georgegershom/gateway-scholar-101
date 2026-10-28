import { mkdirSync, readFileSync, writeFileSync, copyFileSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const pagesDir = join(root, 'pages');
const assetsDir = join(root, 'assets');
const distDir = join(root, 'dist');

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
mkdirSync(join(distDir, 'assets'), { recursive: true });

for (const assetName of readdirSync(assetsDir)) {
  copyFileSync(join(assetsDir, assetName), join(distDir, 'assets', assetName));
}

for (const pageName of readdirSync(pagesDir).filter((name) => name.endsWith('.html'))) {
  const source = readFileSync(join(pagesDir, pageName), 'utf8')
    .replaceAll('../assets/', './assets/');

  const outputName = pageName === 'index.html' ? 'index.html' : pageName;
  writeFileSync(join(distDir, outputName), source, 'utf8');
}

console.log('build-static: dist created successfully');
