import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_-efHbaLO.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../../chunks/MainLayout_aoTuF8Z6.mjs';
import { $ as $$MovieCard } from '../../chunks/MovieCard_oE5_TeWM.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const apiKey = "1e624a9ddf56baa843800f64a23b0212";
  const id = Astro2.params.id;
  const personUrl = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=es-ES`;
  const personResponse = await fetch(personUrl);
  const person = await personResponse.json();
  const creditsUrl = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=es-ES`;
  const creditsResponse = await fetch(creditsUrl);
  const creditsData = await creditsResponse.json();
  const movies = (creditsData.cast || []).filter((movie) => movie.poster_path).sort((a, b) => b.popularity - a.popularity);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": person.name, "data-astro-cid-fbcwvqmg": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="container" data-astro-cid-fbcwvqmg> <section class="actor-header" data-astro-cid-fbcwvqmg> <div data-astro-cid-fbcwvqmg> ${person.profile_path && renderTemplate`<img class="actor-photo"${addAttribute(`https://image.tmdb.org/t/p/w500${person.profile_path}`, "src")}${addAttribute(person.name, "alt")} data-astro-cid-fbcwvqmg>`} </div> <div class="actor-info" data-astro-cid-fbcwvqmg> <h1 data-astro-cid-fbcwvqmg>${person.name}</h1> <div class="actor-meta" data-astro-cid-fbcwvqmg> ${person.birthday && renderTemplate`<p data-astro-cid-fbcwvqmg> <strong data-astro-cid-fbcwvqmg>Nacimiento:</strong> ${person.birthday} </p>`} ${person.place_of_birth && renderTemplate`<p data-astro-cid-fbcwvqmg> <strong data-astro-cid-fbcwvqmg>Lugar:</strong> ${person.place_of_birth} </p>`} </div> ${person.biography && renderTemplate`<div class="biography" data-astro-cid-fbcwvqmg> <h2 data-astro-cid-fbcwvqmg>Biografía</h2> <p data-astro-cid-fbcwvqmg>${person.biography}</p> </div>`} </div> </section> <section class="movies-section" data-astro-cid-fbcwvqmg> <h2 data-astro-cid-fbcwvqmg>Películas</h2> <div class="movies-grid" data-astro-cid-fbcwvqmg> ${movies.slice(0, 8).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie, "data-astro-cid-fbcwvqmg": true })}`)} </div> </section> </main> ` })}`;
}, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/actor/[id].astro", void 0);
const $$file = "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/actor/[id].astro";
const $$url = "/actor/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
