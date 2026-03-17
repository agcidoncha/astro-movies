import { e as createComponent, l as renderHead, g as addAttribute, r as renderTemplate, k as renderComponent, h as createAstro } from '../chunks/astro/server_-efHbaLO.mjs';
import 'piccolore';
import { $ as $$MovieCard } from '../chunks/MovieCard_oE5_TeWM.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const apiKey = "1e624a9ddf56baa843800f64a23b0212";
  const query = Astro2.url.searchParams.get("query") || "";
  let movies = [];
  if (query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=es-ES`;
    const response = await fetch(url);
    const data = await response.json();
    movies = data.results || [];
  }
  return renderTemplate`<html lang="es" data-astro-cid-ipsxrsrh> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Buscar películas</title>${renderHead()}</head> <body data-astro-cid-ipsxrsrh> <main class="container" data-astro-cid-ipsxrsrh> <h1 data-astro-cid-ipsxrsrh>Buscar películas</h1> <form method="GET" data-astro-cid-ipsxrsrh> <input type="text" name="query" placeholder="Buscar película..."${addAttribute(query, "value")} data-astro-cid-ipsxrsrh> <button type="submit" data-astro-cid-ipsxrsrh>Buscar</button> </form> ${query && renderTemplate`<p data-astro-cid-ipsxrsrh>
Resultados para: <strong data-astro-cid-ipsxrsrh>${query}</strong> </p>`} <div class="grid" data-astro-cid-ipsxrsrh> ${movies.map((movie) => renderTemplate`${renderComponent($$result, "MovieCard", $$MovieCard, { "movie": movie, "data-astro-cid-ipsxrsrh": true })}`)} </div> </main> </body></html>`;
}, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/search.astro", void 0);
const $$file = "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
