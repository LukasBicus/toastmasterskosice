# Toastmasters Košice [![alt_text][fb_icon]][fb_page]
**LEGACY WEBPAGE**

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)][cc-by-nc-sa]

Webová stránka klubu [Toastmasters Košice][tm-kosice-website].

This is just a fork of Toastmasters Kosice legacy webpage, that I use as part of my portfolio. Original page is there:
[Original code](https://github.com/toastmasters-kosice/tmke-web-legacy)

I used this project to learn Gatsby and test deployment to Netlify.

## Licencia
[![License: CC BY-NC-SA 4.0][cc-by-nc-sa-icon]][cc-by-nc-sa]

Obsah je poskytovaný v súlade s licenciou [CC BY-NC-SA 4.0][cc-by-nc-sa]. V skratke, obsah môžete zdieľať a upravovať na nekomerčné účely za predpokladu, že uvediete pôvodného autora a zmeny zverejníte pod tou istou licenciou.

[//]: # (Used references)
[tm-kosice-website]: https://www.toastmasterskosice.sk/
[fb_icon]: http://i.imgur.com/fep1WsG.png (Facebook klubu Toastmasters Košice)
[fb_page]: https://www.facebook.com/toastmasters.kosice/
[cc-by-nc-sa-icon]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa]: https://creativecommons.org/licenses/by-nc-sa/4.0/


Landing image by [Scott Warman](https://unsplash.com/@scottiewarman?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge)

## Install

Instal nvm. Follow steps in given order:
```
nvm use # use node and npm with specific version
npm config set ignore-scripts false # enable to use scripts. Scripts should be ignored due security reasons by default
npm install
npm config set ignore-scripts true # disable scripts back.
```

## Development

For development create new branches with features and merge them into `development` branch.

## Deployment

Github pages automatically display static content from `master` branch. If you want to deploy static pages, in `development` branch run command:
```
npm run deploy
```
New static pages will be automatically built into `public` folder and deployed to `master` branch. In few seconds, you will be able to see changed pages on [https://toastmasters-kosice.github.io/](https://toastmasters-kosice.github.io/)

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```sh
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

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

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
