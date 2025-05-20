/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_CpD2Dm7d.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<ul>\n<li>Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.</li>\n<li>Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.</li>\n<li>Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.</li>\n<li>Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.</li>\n<li>Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events.</li>\n</ul>";

				const frontmatter = {"title":"Tactical Team Leader","date":"1985 - 1990","url":"http://atawajof.dz/vonilzor","location":"Los Angeles, California","org":"Los Angeles County Sheriff's Department – SWAT Division","tags":["SWAT","Surveillance","Undercover Operations","Evidence Gathering","Case Solving","Interviewing Skills"]};
				const file = "/workspaces/janakammaa.github.io/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "   \n                           \n                 \n                                \n                                 \n                                                            \n     \n   \n           \n                   \n                            \n                         \n                   \n                          \n   \n   \n\n- Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.\n- Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.\n- Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.\n- Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.\n- Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events.\n";
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
