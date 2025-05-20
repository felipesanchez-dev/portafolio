import rss, { pagesGlobToRssItems } from '@astrojs/rss';

const YOUR_NAME = "Juan Felipe Reyes Sánchez";
const YOUR_BRAND = "Felipe Sánchez Dev";
const YOUR_EMAIL = "felipe@felipesanchezdev.site";
const BLOG_TITLE = `${YOUR_BRAND} | Blog de Desarrollo Web, Software y Tecnología`;
const BLOG_DESCRIPTION = `Explora el blog de ${YOUR_NAME} (${YOUR_BRAND}). Artículos, tutoriales y reflexiones sobre desarrollo full stack, JavaScript, React, Next.JS, Astro, Node.js, y las últimas tendencias en tecnología desde Ibagué, Colombia.`;
const CURRENT_YEAR = new Date().getFullYear();

export async function GET(context) {
  return rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("../blog/**/*.md")),
    customData: `
      <language>es-CO</language>
      <managingEditor>${YOUR_EMAIL} (${YOUR_NAME})</managingEditor>
      <webMaster>${YOUR_EMAIL} (${YOUR_NAME})</webMaster>
      <copyright>Copyright ${CURRENT_YEAR}, ${YOUR_NAME} (${YOUR_BRAND})</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <pubDate>${new Date().toUTCString()}</pubDate> 
      <category>Desarrollo Web</category>
      <category>Tecnología</category>
      <category>Software</category>
      <category>JavaScript</category>
      <category>React</category>
      <category>Astro</category>
      <category>Full Stack</category>
      <docs>http://www.rssboard.org/rss-specification</docs>
    `.trim(),
  });
}