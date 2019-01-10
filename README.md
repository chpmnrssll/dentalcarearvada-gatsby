# JAMstack, Gatsby + Netlify project

- Follows [JAMstack architecture](https://jamstack.org)
- [Gatsby](https://www.gatsbyjs.org/)
- [Netlify](https://www.netlify.com) for continuous deployment & CDN distribution.
- [bulma](https://bulma.io/) CSS framework

**Note:** Pushing to this repository or making changes from Netlify-CMS will trigger a whole site re-build.

[Gatsby + Netlify CMS Starter README](Starter-README.md)

## Prerequisites

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```

To test the Netlify-CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Installed Plugins

- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass)
- [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/)
- [gatsby-plugin-netlify-cms](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms)
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet) - *SEO, Head, Meta, tags*
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp) & [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp) - *Automatic image resizing*
- [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/) - *Add your GA tracking id to "gatsby-config.js"*
- [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed) - *RSS feeds*
