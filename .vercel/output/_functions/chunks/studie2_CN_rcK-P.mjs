/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_CpD2Dm7d.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Advanced SWAT Tactics and Leadership Training","location":"FBI Academy","url":"http://ni.sb/mehanad","institute":"FBI Academy","date":"1975-1980","tags":["Conflict Resolution","Strategic Planning","Risk Assessment","Firearms Training","Emergency Response"]};
				const file = "/workspaces/janakammaa.github.io/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
				function rawContent() {
					return "   \n                                                    \n                     \n                         \n                      \n               \n                                                                                                                 \n   ";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
