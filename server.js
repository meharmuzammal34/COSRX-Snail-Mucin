import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// Auto-build if dist is missing but source files exist
if (!fs.existsSync(path.join(distDir, 'index.html')) && fs.existsSync(path.join(__dirname, 'index.html'))) {
  try {
    console.log('dist/index.html not found, running vite build...');
    const { execSync } = await import('node:child_process');
    execSync('npx vite build', { stdio: 'inherit' });
    console.log('Build completed successfully.');
  } catch (err) {
    console.warn('Auto-build notice:', err.message);
  }
}

// Serve compiled static assets from dist
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir, {
    maxAge: '1d',
    index: false
  }));
}

// Serve public static assets
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir, {
    maxAge: '1d',
    index: false
  }));
}

// Explicit SEO and crawler routes
app.get('/robots.txt', (req, res) => {
  const robotsDist = path.join(distDir, 'robots.txt');
  const robotsPub = path.join(publicDir, 'robots.txt');
  if (fs.existsSync(robotsDist)) return res.sendFile(robotsDist);
  if (fs.existsSync(robotsPub)) return res.sendFile(robotsPub);
  res.type('text/plain').send('User-agent: *\nAllow: /\nSitemap: https://cosrx-snail-mucin.netlify.app/sitemap.xml');
});

app.get('/sitemap.xml', (req, res) => {
  const sitemapDist = path.join(distDir, 'sitemap.xml');
  const sitemapPub = path.join(publicDir, 'sitemap.xml');
  if (fs.existsSync(sitemapDist)) return res.sendFile(sitemapDist);
  if (fs.existsSync(sitemapPub)) return res.sendFile(sitemapPub);
  res.status(404).send('sitemap not found');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// SPA fallback for all pages (e.g. /cosrx-snail-96-review, /about, etc.)
app.get('*', (req, res) => {
  const indexDist = path.join(distDir, 'index.html');
  const indexRoot = path.join(__dirname, 'index.html');

  if (fs.existsSync(indexDist)) {
    return res.sendFile(indexDist);
  }
  if (fs.existsSync(indexRoot)) {
    return res.sendFile(indexRoot);
  }
  res.status(404).send('Application build not found. Please build the application.');
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
