const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx": hot(preferDefault(require("/home/yudha/pakekoding/pakekoding/node_modules/@narative/gatsby-theme-novela/src/templates/articles.template.tsx"))),
  "component---node-modules-narative-gatsby-theme-novela-src-templates-article-template-tsx": hot(preferDefault(require("/home/yudha/pakekoding/pakekoding/node_modules/@narative/gatsby-theme-novela/src/templates/article.template.tsx"))),
  "component---node-modules-narative-gatsby-theme-novela-src-templates-author-template-tsx": hot(preferDefault(require("/home/yudha/pakekoding/pakekoding/node_modules/@narative/gatsby-theme-novela/src/templates/author.template.tsx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/yudha/pakekoding/pakekoding/src/pages/404.js")))
}

