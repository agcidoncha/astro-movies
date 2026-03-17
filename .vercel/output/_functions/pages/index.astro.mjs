import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, n as renderScript } from '../chunks/astro/server_-efHbaLO.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_aoTuF8Z6.mjs';
import { $ as $$MovieCard } from '../chunks/MovieCard_oE5_TeWM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const heroImage = new Proxy({"src":"/_astro/back.DJybFAIe.png","width":1536,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/assets/back.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const startYear = 1900;
  const years = [];
  const apiKey = "1e624a9ddf56baa843800f64a23b0212";
  const popularUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27,878&sort_by=popularity.desc&language=es-ES`;
  const popularResponse = await fetch(popularUrl);
  const popularData = await popularResponse.json();
  const popularMovies = popularData.results || [];
  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Películas de terror", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="hero"${addAttribute(`background-image:
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)),
      url(${heroImage.src});`, "style")} data-astro-cid-j7pv25f6> <div class="hero-content" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Catálogo de cine</p> <h1 data-astro-cid-j7pv25f6>TERROR & SCI-FI</h1> <p class="subtitle" data-astro-cid-j7pv25f6>
Explora películas por género y año, descubre actores y navega entre
        títulos como en una pequeña plataforma de cine.
</p> <div class="hero-actions" data-astro-cid-j7pv25f6> <button class="hero-button hero-button--primary" id="explore-horror" data-astro-cid-j7pv25f6>
Explorar terror
</button> <button class="hero-button hero-button--secondary" id="explore-scifi" data-astro-cid-j7pv25f6>
Explorar sci-fi
</button> </div> <div class="picker-box" data-astro-cid-j7pv25f6> <select id="genre" data-astro-cid-j7pv25f6> <option value="" data-astro-cid-j7pv25f6>Selecciona un género</option> <option value="horror" data-astro-cid-j7pv25f6>Terror</option> <option value="scifi" data-astro-cid-j7pv25f6>Ciencia ficción</option> </select> <select id="year" data-astro-cid-j7pv25f6> <option value="" data-astro-cid-j7pv25f6>Selecciona un año</option> ${years.map((year) => renderTemplate`<option${addAttribute(year, "value")} data-astro-cid-j7pv25f6>${year}</option>`)} </select> <button id="go" data-astro-cid-j7pv25f6>Ver películas</button> </div> ${renderScript($$result2, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </div> </main> <section class="popular-section container" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Populares ahora</h2> <div class="popular-grid" data-astro-cid-j7pv25f6> ${popularMovies.slice(0, 8).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie, "data-astro-cid-j7pv25f6": true })}`)} </div> </section> ` })}`;
}, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/index.astro", void 0);
const $$file = "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
