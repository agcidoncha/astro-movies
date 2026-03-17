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
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`;
  const response = await fetch(url);
  const movie = await response.json();
  const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=es-ES`;
  const similarUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=es-ES`;
  const similarResponse = await fetch(similarUrl);
  const similarData = await similarResponse.json();
  const similarMovies = similarData.results || [];
  const creditsResponse = await fetch(creditsUrl);
  const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=es-ES`;
  const videosResponse = await fetch(videosUrl);
  const videosData = await videosResponse.json();
  const trailer = videosData.results?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );
  const creditsData = await creditsResponse.json();
  const cast = creditsData.cast || [];
  const director = creditsData.crew?.find((p) => p.job === "Director");
  const backdropUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : "";
  const runtime = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : "";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": movie.title, "data-astro-cid-klpkwygt": true }, { "default": async ($$result2) => renderTemplate`  ${backdropUrl && renderTemplate`${maybeRenderHead()}<div class="backdrop"${addAttribute(`background-image:url(${backdropUrl})`, "style")} data-astro-cid-klpkwygt></div>`}<main${addAttribute(`container ${backdropUrl ? "with-backdrop" : ""}`, "class")} data-astro-cid-klpkwygt> <nav class="nav" data-astro-cid-klpkwygt> <a href="/" data-astro-cid-klpkwygt>← Inicio</a> <a href="javascript:history.back()" data-astro-cid-klpkwygt>← Volver</a> </nav> <div class="layout" data-astro-cid-klpkwygt> <div data-astro-cid-klpkwygt> <img class="poster"${addAttribute(`https://image.tmdb.org/t/p/w500${movie.poster_path}`, "src")}${addAttribute(movie.title, "alt")} data-astro-cid-klpkwygt> </div> <div data-astro-cid-klpkwygt> <h1 data-astro-cid-klpkwygt> ${movie.title} (${movie.release_date?.split("-")[0] || "Sin fecha"})
</h1> <p class="meta" data-astro-cid-klpkwygt>
⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}/10
</p> ${director && renderTemplate`<p class="director" data-astro-cid-klpkwygt>Director: ${director.name}</p>`} <p class="runtime" data-astro-cid-klpkwygt> ${runtime && `Duración: ${runtime}`} </p> ${trailer && renderTemplate`<div class="trailer" data-astro-cid-klpkwygt> <iframe${addAttribute(`https://www.youtube.com/embed/${trailer.key}`, "src")} title="Tráiler" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-klpkwygt></iframe> </div>`} <div class="genres" data-astro-cid-klpkwygt> ${movie.genres.map((g) => renderTemplate`<span class="genre" data-astro-cid-klpkwygt>${g.name}</span>`)} </div> <p class="overview" data-astro-cid-klpkwygt>${movie.overview}</p> <h2 data-astro-cid-klpkwygt>Actores principales</h2> <div class="cast" data-astro-cid-klpkwygt> ${cast.slice(0, 8).map((actor) => renderTemplate`<div class="actor" data-astro-cid-klpkwygt> ${actor.profile_path && renderTemplate`<img${addAttribute(`https://image.tmdb.org/t/p/w185${actor.profile_path}`, "src")}${addAttribute(actor.name, "alt")} data-astro-cid-klpkwygt>`} <a class="actor-name"${addAttribute(`/actor/${actor.id}`, "href")} data-astro-cid-klpkwygt> ${actor.name} </a> <p class="actor-role" data-astro-cid-klpkwygt>${actor.character}</p> </div>`)} </div> </div> </div> <section class="similar-section" data-astro-cid-klpkwygt> <h2 data-astro-cid-klpkwygt>Películas similares</h2> <div class="similar-grid" data-astro-cid-klpkwygt> ${similarMovies.slice(0, 8).map((movie2) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie2, "data-astro-cid-klpkwygt": true })}`)} </div> </section> </main> ` })}`;
}, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/movie/[id].astro", void 0);
const $$file = "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/pages/movie/[id].astro";
const $$url = "/movie/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
