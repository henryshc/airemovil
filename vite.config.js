import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, existsSync } from 'fs';

// ── Detección automática de páginas ─────────────────────────────
// 1. Todos los .html de la raíz (index, sobre-nosotros, landings de
//    servicios como recarga-r134a..., verificaciones de Google, etc.)
// 2. Todos los .html dentro de /blog/
// Para publicar página o nota nueva: solo agregás el archivo.
// Nunca hay que volver a tocar este config.

const root = process.cwd();

const rootPages = Object.fromEntries(
  readdirSync(root)
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace('.html', ''), resolve(root, f)])
);

const blogDir = resolve(root, 'blog');
const blogPages = existsSync(blogDir)
  ? Object.fromEntries(
      readdirSync(blogDir)
        .filter((f) => f.endsWith('.html'))
        .map((f) => ['blog/' + f.replace('.html', ''), resolve(blogDir, f)])
    )
  : {};

export default defineConfig({
  build: {
    rollupOptions: {
      input: { ...rootPages, ...blogPages },
    },
  },
});
