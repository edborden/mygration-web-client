/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      optional: ['es7.decorators']
    },
    'ember-cli-qunit': {
      useLintTree: false
    },
    inlineContent: {
      favicon: { content: "<link rel='icon' href='/assets/images/favicon.ico'>" }
    }
  });

  var pickFiles = require('broccoli-funnel');
  var mergeTrees = require('broccoli-merge-trees');

  // Materialize
  var materializeFonts = pickFiles('bower_components/Materialize/font/roboto', {
    destDir: '/font/roboto'
  });
  app.import('bower_components/Materialize/dist/js/materialize.js');

  // Photoswipe
  var psDir = 'bower_components/photoswipe/dist/';
  app.import(psDir + 'photoswipe.css');
  app.import(psDir + 'default-skin/default-skin.css');
  app.import(psDir + 'photoswipe.js');
  app.import(psDir + 'photoswipe-ui-default.min.js');

  var psAssets = pickFiles('bower_components/photoswipe/dist/default-skin', {
    destDir: '/assets',
    exclude: ['default-skin.css']
  });

  return mergeTrees([ app.toTree(), materializeFonts, psAssets ]);
};