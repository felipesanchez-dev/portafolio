export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  Opinion: {
    name: "Opiniones",
    iconName: "opinion",
  },
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  react: {
    name: "React Native",
    iconName: "react",
  },
  React: {
    name: "React",
    iconName: "react",
  },
  expo: {
    name: "Expo",
    iconName: "expo",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },

  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  sql: {
    name: "SQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  SqlLite: {
    name: "SQL Lite",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  cloudinary: {
    name: "Cloudinary",
    iconName: "cloudinary",
  },
  aws: {
    name: "Aws",
    iconName: "aws",
  },
  nextjs: {
    name: "Next.JS",
    iconName: "nextjs",
  },
  Postman: {
    name: "Postman",
    iconName: "postman",
  },
  APIs: {
    name: "APIs",
    iconName: "Api",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};
