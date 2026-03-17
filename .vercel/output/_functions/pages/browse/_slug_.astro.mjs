import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_-efHbaLO.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../../chunks/MainLayout_aoTuF8Z6.mjs';
import { $ as $$MovieCard } from '../../chunks/MovieCard_oE5_TeWM.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const apiKey = "1e624a9ddf56baa843800f64a23b0212";
  const slug = Astro2.params.slug || "";
  const [genre, year] = slug.split("-");
  let genreId = "27";
  let genreLabel = "Terror";
  if (genre === "scifi") {
    genreId = "878";
    genreLabel = "Ciencia ficción";
  }
  const page = Number(Astro2.url.searchParams.get("page") || 1);
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&primary_release_year=${year}&page=${page}&language=es-ES`;
  const response = await fetch(url);
  const data = await response.json();
  const movies = data.results || [];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${genreLabel} ${year}`, "data-astro-cid-s6kaisaw": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="container" data-astro-cid-s6kaisaw> <div class="topbar" data-astro-cid-s6kaisaw> <a class="back" href="/" data-astro-cid-s6kaisaw>← Inicio</a> </div> <h1 data-astro-cid-s6kaisaw>${genreLabel} ${year}</h1> <div class="grid" data-astro-cid-s6kaisaw> ${movies.map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie, "data-astro-cid-s6kaisaw": true })}`)} </div> <div class="pagination" data-astro-cid-s6kaisaw> ${page > 1 && renderTemplate`<a${addAttribute(`/browse/${genre}-${year}?page=${page - 1}`, "href")} data-astro-cid-s6kaisaw>
← Anterior
</a>`} <span data-astro-cid-s6kaisaw>Página ${page}</span> <a${addAttribute(`/browse/${genre}-${year}?page=${page + 1}`, "href")} data-astro-cid-s6kaisaw>
Siguiente →
</a> </div> </main> ` })}`;
}, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/browse/[slug].astro", void 0);
const $$file = "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/browse/[slug].astro";
const $$url = "/browse/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
