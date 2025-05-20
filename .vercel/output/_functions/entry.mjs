import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C09xrieV.mjs';
import { manifest } from './manifest_CxdvR-BB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/about.astro.mjs');
const _page2 = () => import('./pages/blogs/home-mmouzo.astro.mjs');
const _page3 = () => import('./pages/certificates/backend2022.astro.mjs');
const _page4 = () => import('./pages/contact/email.astro.mjs');
const _page5 = () => import('./pages/contact/github.astro.mjs');
const _page6 = () => import('./pages/contact/linkedin.astro.mjs');
const _page7 = () => import('./pages/contact/telegram.astro.mjs');
const _page8 = () => import('./pages/projects/spotfilm.astro.mjs');
const _page9 = () => import('./pages/studies/studie1.astro.mjs');
const _page10 = () => import('./pages/studies/studie2.astro.mjs');
const _page11 = () => import('./pages/works/work1.astro.mjs');
const _page12 = () => import('./pages/works/work2.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/about.md", _page1],
    ["src/pages/blogs/home-mmouzo.md", _page2],
    ["src/pages/certificates/backend2022.md", _page3],
    ["src/pages/contact/email.md", _page4],
    ["src/pages/contact/github.md", _page5],
    ["src/pages/contact/linkedin.md", _page6],
    ["src/pages/contact/telegram.md", _page7],
    ["src/pages/projects/spotfilm.md", _page8],
    ["src/pages/studies/studie1.md", _page9],
    ["src/pages/studies/studie2.md", _page10],
    ["src/pages/works/work1.md", _page11],
    ["src/pages/works/work2.md", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "694f0b18-6679-4a7b-b4a3-3447e2b33123",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
