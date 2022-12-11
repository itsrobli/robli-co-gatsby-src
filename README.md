<p align="center">
  <img src="content/assets/roblico-icon.png" width="100" />
</p>

<p align="center">
    <img src="https://github.com/itsrobli/robli-co-gatsby-src/workflows/PROD%20GH%20Pages%20Gatsby%20Publish/badge.svg" />
</p>

# Notes for my future self

Site is at: [https://robli.co](https://robli.co). It is hosted on GitHub Pages at [this repo](https://github.com/itsrobli/co-robli).
The content is pushed automatically by GitHub Actions.

## Dev notes

### CI/CD - GitHub Actions

Pushes to `test` branch will trigger the test build which is accessed at [here](https://itsrobli.github.io/co-robli-dev/).

### Other

The site pretty much follows the standard Gatsby patterns [documented below](#original-creation). There are some deviations:

- MDX is used instead of markdown.
    - The RSS feed generator in `gatsby-config.js` uses a custom query because I'm using MDX.
- The page generation feature in `gatsby-node.js` has a multi-query structure. This is so the photo galleries and blogs could use separate layouts.

## Outstanding tasks

- [ ] Update URLs in blog markdown files to no longer reference the old blog site.
- [ ] Deal with build warnings around ChildImageSharp which likely come from the GraphQL queries in the `src/templates` files.
- [ ] Image quality is set to high everywhere which results in a very large build bundle. This is desired in the Photos and maybe elsewhere so maybe the answer is to
    - [ ] Cull unused images from `content/blog/images`
- [ ] Test if code CSS styles (and prismjs) are working properly by writing a blog post about building the 2.0.0 version of my website.
- [ ] Learn to write tests in a Gatsby project and then write some.
- [ ] Remove redundant CSS.


# Original creation

This section details how it all started. There is not too much deviation from the standard Gatsby patterns other than noted above.

This site started on Gatsby v2 and migrated straight on to v4.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

