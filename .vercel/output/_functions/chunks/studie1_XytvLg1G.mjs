/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_CpD2Dm7d.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Bachelor of Science in Criminal Justice","location":"University of California, Los Angeles (UCLA)","url":"http://foeberoz.gm/kuj","institute":"University of California","date":"1970-1975","tags":["Criminal Justice","Law Enforcement","Legal Studies","Public Safety","Court System"]};
				const file = "/workspaces/janakammaa.github.io/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
				function rawContent() {
					return "   \n                                              \n                                                      \n                           \n                                   \n               \n     \n   \n                       \n                      \n                    \n                    \n                   \n   \n   \n";
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
