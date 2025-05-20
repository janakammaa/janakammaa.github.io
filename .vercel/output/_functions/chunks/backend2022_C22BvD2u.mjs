/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_CpD2Dm7d.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>The Tactical Emergency Medical Technician (TEMT) certification trains healthcare professionals to provide advanced medical care in tactical and high-risk environments, such as law enforcement operations, military settings, or emergency response scenarios. TEMTs are trained to rapidly assess and treat traumatic injuries, stabilize patients in adverse conditions, and closely collaborate with tactical and rescue teams to ensure the safety and well-being of victims.</p>";

				const frontmatter = {"title":"Certified Tactical Emergency Medical Technician (TEMT)","org":"123 Main Street, Los Angeles","tags":["Tactical Medicine","First Aid Training","Critical Care","Triage Protocol"],"url":"http://akazedu.edu/seaghi","date":1992};
				const file = "/workspaces/janakammaa.github.io/src/pages/certificates/backend2022.md";
				const url = "/certificates/backend2022";
				function rawContent() {
					return "   \n                                                             \n                                 \n                                                                             \n                              \n          \n   \n\nThe Tactical Emergency Medical Technician (TEMT) certification trains healthcare professionals to provide advanced medical care in tactical and high-risk environments, such as law enforcement operations, military settings, or emergency response scenarios. TEMTs are trained to rapidly assess and treat traumatic injuries, stabilize patients in adverse conditions, and closely collaborate with tactical and rescue teams to ensure the safety and well-being of victims.\n";
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
