# Preact Splash Page Boilerplate

🕊️ This is a simple light weight boilerplate with Preact and powered by Webpack. It aims for static splash pages or social bounce pages that need to be very light and don't require complexity like routes or global states. The out of box compiled js from the boilerplate is 11k, including Preact and the demo components.

<br />

This boilerplate includes:

- [Preact](https://preactjs.com/) (chosen for the small k size)
- [Babel](https://babeljs.io/) (ES6 and JSX transpile)
- [SASS](https://sass-lang.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
  <br />

---

## Start Guide

### Installation

Clone the project and go into the directory

```sh
git clone https://github.com/nicohsieh/preact-splash-page-boilerplate.git my-splash-page
cd my-splash-page
```

Make it yours!

```sh
rm -rf .git && git init && npm init
```

Install the dependencies

```sh
npm install
```

<br />

### Development

Start a webpack dev server at `:8000`

```sh
npm start
```

Build production code into `dist` folder

(It also starts BundleAnalyzer for you to spot possible optimization)

```sh
npm run build
```

Start a local server at `dist` folder at `:8080` to check the build

```sh
npm run start:dist
```

---

### License

MIT
