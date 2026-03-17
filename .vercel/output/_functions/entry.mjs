import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B90wu9H2.mjs';
import { manifest } from './manifest_cB4qlPDE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/actor/_id_.astro.mjs');
const _page2 = () => import('./pages/browse/_slug_.astro.mjs');
const _page3 = () => import('./pages/movie/_id_.astro.mjs');
const _page4 = () => import('./pages/search.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/actor/[id].astro", _page1],
    ["src/pages/browse/[slug].astro", _page2],
    ["src/pages/movie/[id].astro", _page3],
    ["src/pages/search.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1d6ed378-9f00-4b4e-af8b-442192c5430c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
