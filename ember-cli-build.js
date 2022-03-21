// ember-build-cli.js

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {});

  return app.toTree();
};
