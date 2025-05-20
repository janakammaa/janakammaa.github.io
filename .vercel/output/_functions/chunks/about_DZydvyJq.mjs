/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_CpD2Dm7d.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Highly skilled and experienced law enforcement professional with over two decades of service in various specialized units. Adept at conducting complex investigations, coordinating tactical operations, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding the law. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.</p>";

				const frontmatter = {"title":"about","name":"Janaki Samala","designation":"Senior Tech Lead","location":"Bengaluru, India","pronouns":"she/her","website":"http://janakammaa.github.io/"};
				const file = "/workspaces/janakammaa.github.io/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "   \n            \n                     \n                               \n                          \n                   \n                                       \n   \n\nHighly skilled and experienced law enforcement professional with over two decades of service in various specialized units. Adept at conducting complex investigations, coordinating tactical operations, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding the law. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.\n";
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

export { _page as _, compiledContent as c, frontmatter as f };
