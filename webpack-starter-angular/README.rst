Webpack Starter Angular
=======================

Requirements
------------

- DONE: ES 6 with Angular 1.4
- DONE: Bundling
- Splitting large files
- DONE: Delivering static files separately -> Possible via https://webpack.github.io/docs/stylesheets.html#separate-css-bundle
- DONE: SASS support
- SASS variables
- Router
  - DONE: Angular UI Router
  - Angular New Router
- DONE: Self-registering components
- DONE: Jade support


Prerequisits
------------

Install a few dependencies globally::

  $ npm install -g babel
  $ npm install -g webpack
  $ npm install -g webpack-dev-server
  $ npm install -g eslint


Development
-----------

Create a JS bundle with Webpack::

  $ npm run build

Start the Webpack development server on 'localhost:3000'::

  $ npm run dev

Run tests::

  $ npm run test

Linting::

  $ npm run lint


Jade Loader
-----------

Installation::

  $ npm install jade-loader --save-dev

Webpack Configuration (webpack.config.js)::

  module.exports = {
    ...
    module: {
      loaders: [
        ...
        { test: /\.jade$/, loader: 'jade-loader' },
      ]
    }
  }

Javascript::

  import template from './hero.jade';

Jade (hero.jade)::

  div.jumbotron
    h1 Angular, ES6, Webpack Starter!
    h3 You can find my template inside {{ vm.name }}.html


Sources
-------

- https://github.com/angular-class/NG6-starter
