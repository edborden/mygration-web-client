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

  return mergeTrees([ app.toTree(), materializeFonts ]);
};