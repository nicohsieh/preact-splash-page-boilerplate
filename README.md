# Preact Splash Page Boilerplate

This is a simple light weight boilerplate with Preact and powered by Webpack. It aims for static splash pages or social bounce pages that need to be very light and don't require complexity like routes or global states. The out of box compiled js from the boilerplate is 11k, including Preact and the demo components.

---

## Features

This boilerplate includes:

- [Preact](https://preactjs.com/) (chosen for the small k size)
- JSX
- ES6 transpile with [Babel](https://babeljs.io/)
- [SASS](https://sass-lang.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [BundleAnalyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) when build

---

## Start Guide

### To install the project

- Clone the project and go into the directory

`git clone my-splash-page`

`cd my-splash-page`

- Make it yours!

`rm -rf .git && git init && npm init`


- Install the dependencies

`npm install`


###  To run the project for development

Start a webpack dev server

`npm start`



###  To build the project for production

- Build production code into `dist` folder

`npm run build`

(It also starts BundleAnalyzer for you to spot possible optimization)


- Start a local server at `dist` folder at `:8080` to check the build

`npm run start:dist`



