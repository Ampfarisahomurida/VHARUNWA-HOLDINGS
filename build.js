const fs = require('fs');
const path = require('path');

const root = __dirname;
const output = path.join(root, 'dist');

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

const entries = [
  '404.html',
  'contact.html',
  'gallery.html',
  'index.html',
  'services.html',
  'why-us.html',
  'work.html',
  'css',
  'gallery.css',
  'pages.css',
  'pages-responsive.css',
  'images',
  'favicon.ico',
  'icon.png',
  'icon.svg',
  'robots.txt',
  'site.webmanifest',
  'vharunwa-logo.png',
];

for (const entry of entries) {
  const source = path.join(root, entry);
  const destination = path.join(output, entry);
  fs.cpSync(source, destination, { recursive: true });
}

console.log(`Static site copied to ${path.relative(root, output)}`);
