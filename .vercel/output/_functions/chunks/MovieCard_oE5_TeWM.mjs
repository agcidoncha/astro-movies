import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro } from './astro/server_-efHbaLO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$MovieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MovieCard;
  const { movie } = Astro2.props;
  const releaseYear = movie.release_date?.split("-")[0] || "Sin fecha";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/movie/${movie.id}`, "href")}${addAttribute(movie.title.toLowerCase(), "data-title")} data-astro-cid-y6otcn7o> <img class="poster"${addAttribute(`https://image.tmdb.org/t/p/w500${movie.poster_path}`, "src")}${addAttribute(movie.title, "alt")} loading="lazy" data-astro-cid-y6otcn7o> <div class="info" data-astro-cid-y6otcn7o> <p class="title" data-astro-cid-y6otcn7o>${movie.title}</p> <p class="meta" data-astro-cid-y6otcn7o>⭐ ${rating}/10 · ${releaseYear}</p> </div> </a>`;
}, "/Users/agcidoncha/Desktop/proyectos-web/terror-movies/src/components/MovieCard.astro", void 0);

export { $$MovieCard as $ };
