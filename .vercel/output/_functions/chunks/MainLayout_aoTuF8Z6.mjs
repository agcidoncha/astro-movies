import { e as createComponent, l as renderHead, g as addAttribute, o as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_-efHbaLO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Pel\xEDculas de terror" } = Astro2.props;
  const path = Astro2.url.pathname;
  return renderTemplate`<html lang="es" data-astro-cid-ouamjn2i> <head><meta charset="UTF-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-ouamjn2i> <header class="site-header" data-astro-cid-ouamjn2i> <div class="site-header__inner" data-astro-cid-ouamjn2i> <a class="site-logo" href="/" data-astro-cid-ouamjn2i>🎬 Movies</a> <nav class="site-nav" data-astro-cid-ouamjn2i> <a href="/"${addAttribute(path === "/" ? "active" : "", "class")} data-astro-cid-ouamjn2i>Inicio</a> <a href="/search"${addAttribute(path.startsWith("/search") ? "active" : "", "class")} data-astro-cid-ouamjn2i>Buscar</a> </nav> </div> </header> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
